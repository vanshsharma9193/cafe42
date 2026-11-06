/**
 * ==========================================================================
 * BREW HAVEN CAFÉ - JAVASCRIPT FRONTEND INTERACTIONS
 * Modern Vanilla JavaScript (ES6+)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. Navigation & Header Functionality
  // ------------------------------------------------------------------------
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top');

  // Sticky Header Effect on Scroll
  const handleScrollHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader(); // initial run

  // Mobile Menu Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        navMenu.classList.add('open');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close when clicking outside of menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Active Link Highlighting on Scroll (Scroll Spy)
  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // Smooth Scroll with Header Offset for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Back to Top Button Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 2. Menu Category Filtering
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  if (filterBtns.length > 0 && menuCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active button style
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        menuCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filterValue === 'all' || category === filterValue) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Quick "Order Now" from Menu Items
  // ------------------------------------------------------------------------
  const menuOrderBtns = document.querySelectorAll('.menu-order-btn');
  const orderSelectionField = document.getElementById('orderItem');

  menuOrderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemName = btn.getAttribute('data-item-name');
      const itemPrice = btn.getAttribute('data-item-price');

      if (orderSelectionField && itemName) {
        orderSelectionField.value = `${itemName} (${itemPrice})`;
      }

      // Smooth scroll to order section
      const orderSection = document.getElementById('order');
      if (orderSection) {
        const headerOffset = 80;
        const elementPosition = orderSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Highlight input field briefly
        if (orderSelectionField) {
          orderSelectionField.focus();
          orderSelectionField.style.borderColor = 'var(--color-caramel)';
          orderSelectionField.style.boxShadow = '0 0 0 4px rgba(196, 125, 74, 0.25)';
          setTimeout(() => {
            orderSelectionField.style.boxShadow = '';
          }, 1500);
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. Image Gallery Lightbox Modal
  // ------------------------------------------------------------------------
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImg && galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('.gallery-item-title');
        const desc = item.querySelector('.gallery-item-desc');

        if (img) {
          lightboxImg.src = img.getAttribute('data-full-src') || img.src;
          lightboxImg.alt = img.alt || 'Brew Haven Café Gallery';
          
          if (lightboxCaption && title) {
            lightboxCaption.textContent = title.textContent + (desc ? ` — ${desc.textContent}` : '');
          }

          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        lightboxImg.src = '';
      }, 300);
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close when clicking backdrop
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. Online Ordering & Reservation Form Validation & Processing
  // ------------------------------------------------------------------------
  const orderForm = document.getElementById('orderReservationForm');
  const formTabBtns = document.querySelectorAll('.form-tab-btn');
  const serviceTypeField = document.getElementById('serviceType');
  const timeFieldLabel = document.getElementById('timeFieldLabel');
  const pickupTimeInput = document.getElementById('pickupTime');
  const formSuccessModal = document.getElementById('formSuccessModal');
  const successOrderSummary = document.getElementById('successOrderSummary');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  // Form Tab Toggle (Pickup vs Reservation)
  if (formTabBtns.length > 0) {
    formTabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        formTabBtns.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const mode = tab.getAttribute('data-mode');
        if (serviceTypeField) {
          serviceTypeField.value = mode === 'reservation' ? 'Table Reservation' : 'Order Pickup';
        }

        if (timeFieldLabel) {
          timeFieldLabel.innerHTML = mode === 'reservation' 
            ? 'Reservation Date & Time <span class="req">*</span>' 
            : 'Preferred Pickup Time <span class="req">*</span>';
        }

        if (pickupTimeInput) {
          pickupTimeInput.placeholder = mode === 'reservation'
            ? 'e.g. Today at 5:30 PM (2 Guests)'
            : 'e.g. In 20 minutes (or 2:30 PM)';
        }

        if (formSubmitBtn) {
          formSubmitBtn.textContent = mode === 'reservation' 
            ? 'Confirm Table Reservation' 
            : 'Submit Pickup Order';
        }
      });
    });
  }

  // Form Validation & Demonstration Submission
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Fields to validate
      const nameInput = document.getElementById('customerName');
      const contactInput = document.getElementById('customerContact');
      const itemInput = document.getElementById('orderItem');
      const timeInput = document.getElementById('pickupTime');

      const nameError = document.getElementById('nameError');
      const contactError = document.getElementById('contactError');
      const timeError = document.getElementById('timeError');

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, nameError, 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput, nameError);
      }

      // Validate Email or Phone
      const contactValue = contactInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

      if (!contactValue) {
        showError(contactInput, contactError, 'Please enter a valid email address or phone number.');
        isValid = false;
      } else if (!emailRegex.test(contactValue) && !phoneRegex.test(contactValue.replace(/\s+/g, ''))) {
        showError(contactInput, contactError, 'Please provide a valid email format or 10-digit phone number.');
        isValid = false;
      } else {
        clearError(contactInput, contactError);
      }

      // Validate Time
      if (!timeInput.value.trim()) {
        showError(timeInput, timeError, 'Please specify your preferred pickup or reservation time.');
        isValid = false;
      } else {
        clearError(timeInput, timeError);
      }

      // If valid, simulate successful submission
      if (isValid) {
        // Change button state to loading
        const originalBtnText = formSubmitBtn.textContent;
        formSubmitBtn.disabled = true;
        formSubmitBtn.textContent = 'Processing...';

        setTimeout(() => {
          // Generate demo order reference number
          const orderRef = 'BH-' + Math.floor(100000 + Math.random() * 900000);
          const serviceType = serviceTypeField ? serviceTypeField.value : 'Order Pickup';
          const customerName = nameInput.value.trim();
          const itemsOrdered = itemInput.value.trim() || 'Barista’s Specialty Choice';
          const scheduledTime = timeInput.value.trim();

          // Display success modal details
          if (successOrderSummary) {
            successOrderSummary.innerHTML = `
              <strong>Reference:</strong> ${orderRef}<br>
              <strong>Guest:</strong> ${customerName}<br>
              <strong>Service:</strong> ${serviceType}<br>
              <strong>Selected Items:</strong> ${itemsOrdered}<br>
              <strong>Time:</strong> ${scheduledTime}<br>
              <span style="display:inline-block; margin-top:8px; font-size:0.85rem; color:#236137;">
                ✓ A confirmation notice has been simulated for your demonstration. We look forward to welcoming you!
              </span>
            `;
          }

          if (formSuccessModal) {
            formSuccessModal.classList.add('show');
            formSuccessModal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Reset button and form fields
          formSubmitBtn.disabled = false;
          formSubmitBtn.textContent = originalBtnText;
          orderForm.reset();

          // Reset active tab button
          if (formTabBtns.length > 0) {
            formTabBtns[0].click();
          }

          // Auto-hide success message after 12 seconds
          setTimeout(() => {
            if (formSuccessModal) {
              formSuccessModal.classList.remove('show');
            }
          }, 12000);

        }, 800);
      }
    });

    // Helper Functions for Validation
    function showError(inputEl, errorEl, message) {
      if (inputEl) inputEl.classList.add('error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    }

    function clearError(inputEl, errorEl) {
      if (inputEl) inputEl.classList.remove('error');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
      }
    }

    // Clear error on input change
    const inputs = orderForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const parent = input.closest('.form-group');
        if (parent) {
          const err = parent.querySelector('.field-error-msg');
          if (err) err.classList.remove('visible');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Scroll Reveal Animations (Intersection Observer)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach(el => el.classList.add('active'));
  }
});


import React, { useState, useEffect } from 'react';
import { useOrder } from '../context/OrderContext';
import { api } from '../services/api';

export default function OrderForm() {
  const { selectedItem, setSelectedItem, activeTab, setActiveTab } = useOrder();

  const [formData, setFormData] = useState({
    customerName: '',
    customerContact: '',
    orderItem: selectedItem || '',
    pickupTime: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  // Sync selectedItem if changed from outside
  useEffect(() => {
    if (selectedItem) {
      setFormData((prev) => ({ ...prev, orderItem: selectedItem }));
    }
  }, [selectedItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = 'Please enter your full name (at least 2 characters).';
    }

    const contact = formData.customerContact.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!contact) {
      newErrors.customerContact = 'Please enter your email address or phone number.';
    } else if (!emailRegex.test(contact) && !phoneRegex.test(contact.replace(/\s+/g, ''))) {
      newErrors.customerContact = 'Please provide a valid email format or phone number.';
    }

    if (!formData.pickupTime.trim()) {
      newErrors.pickupTime =
        activeTab === 'reservation'
          ? 'Please specify your reservation date & time.'
          : 'Please specify your preferred pickup time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setConfirmation(null);

    try {
      const payload = {
        ...formData,
        type: activeTab,
        submittedAt: new Date().toISOString()
      };

      const result =
        activeTab === 'reservation'
          ? await api.createReservation(payload)
          : await api.createOrder(payload);

      setConfirmation({
        refId: result.orderId || result.reservationId,
        type: activeTab === 'reservation' ? 'Table Reservation' : 'Order Pickup',
        guest: formData.customerName,
        items: formData.orderItem || (activeTab === 'reservation' ? 'Table for Party' : "Barista's Choice"),
        time: formData.pickupTime
      });

      // Reset Form
      setFormData({
        customerName: '',
        customerContact: '',
        orderItem: '',
        pickupTime: '',
        specialRequests: ''
      });
      setSelectedItem('');
    } catch (err) {
      alert('An error occurred while processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-form-card">
      {/* Mode Tabs */}
      <div className="form-tabs" role="tablist">
        <button
          type="button"
          className={`form-tab-btn ${activeTab === 'pickup' ? 'active' : ''}`}
          onClick={() => setActiveTab('pickup')}
          role="tab"
          aria-selected={activeTab === 'pickup'}
        >
          Order for Pickup
        </button>
        <button
          type="button"
          className={`form-tab-btn ${activeTab === 'reservation' ? 'active' : ''}`}
          onClick={() => setActiveTab('reservation')}
          role="tab"
          aria-selected={activeTab === 'reservation'}
        >
          Reserve a Table
        </button>
      </div>

      <form className="order-form" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="customerName" className="form-label">
            Customer Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className={`form-input ${errors.customerName ? 'error' : ''}`}
            placeholder="e.g. Eleanor Vance"
            required
          />
          {errors.customerName && <span className="field-error-msg">{errors.customerName}</span>}
        </div>

        {/* Contact */}
        <div className="form-group">
          <label htmlFor="customerContact" className="form-label">
            Email or Phone Number <span className="req">*</span>
          </label>
          <input
            type="text"
            id="customerContact"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleInputChange}
            className={`form-input ${errors.customerContact ? 'error' : ''}`}
            placeholder="e.g. eleanor@example.com or (555) 234-5678"
            required
          />
          {errors.customerContact && <span className="field-error-msg">{errors.customerContact}</span>}
        </div>

        <div className="form-row">
          {/* Order Item / Party Size */}
          <div className="form-group">
            <label htmlFor="orderItem" className="form-label">
              {activeTab === 'reservation' ? 'Party Size & Area' : 'Selected Item(s)'}
            </label>
            <input
              type="text"
              id="orderItem"
              name="orderItem"
              value={formData.orderItem}
              onChange={handleInputChange}
              className="form-input"
              placeholder={activeTab === 'reservation' ? 'e.g. 2 Guests (Window Seating)' : 'e.g. Café Latte ($5.25)'}
            />
          </div>

          {/* Time Field */}
          <div className="form-group">
            <label htmlFor="pickupTime" className="form-label">
              {activeTab === 'reservation' ? 'Date & Time' : 'Preferred Pickup Time'} <span className="req">*</span>
            </label>
            <input
              type="text"
              id="pickupTime"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className={`form-input ${errors.pickupTime ? 'error' : ''}`}
              placeholder={activeTab === 'reservation' ? 'e.g. Today at 6:00 PM' : 'e.g. In 20 minutes (or 2:30 PM)'}
              required
            />
            {errors.pickupTime && <span className="field-error-msg">{errors.pickupTime}</span>}
          </div>
        </div>

        {/* Special Requests */}
        <div className="form-group">
          <label htmlFor="specialRequests" className="form-label">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Dietary notes (oat milk, extra shot, decaf) or table preferences..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} disabled={isSubmitting}>
          {isSubmitting
            ? 'Processing...'
            : activeTab === 'reservation'
            ? 'Confirm Table Reservation'
            : 'Submit Pickup Order'}
        </button>
        <p className="form-helper-note">* Full stack ready: currently connected to client-side API mock.</p>
      </form>

      {/* Confirmation Notification Modal */}
      {confirmation && (
        <div className="form-status-modal" role="alert">
          <div className="form-status-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="form-status-title">Request Confirmed!</h3>
          <div className="form-status-desc">
            <strong>Reference Code:</strong> {confirmation.refId}<br />
            <strong>Guest:</strong> {confirmation.guest}<br />
            <strong>Type:</strong> {confirmation.type}<br />
            <strong>Details:</strong> {confirmation.items}<br />
            <strong>Schedule:</strong> {confirmation.time}<br />
            <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '0.85rem', color: '#236137' }}>
              ✓ Your confirmation has been processed. We look forward to serving you!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}


import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [activeTab, setActiveTab] = useState('pickup'); // 'pickup' | 'reservation'
  const [toastMessage, setToastMessage] = useState(null);

  const selectItemForOrder = (item) => {
    setSelectedItem(`${item.name} (${item.price})`);
    setActiveTab('pickup');
  };

  const showToast = (msg, duration = 4000) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  return (
    <OrderContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        activeTab,
        setActiveTab,
        selectItemForOrder,
        toastMessage,
        showToast
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};


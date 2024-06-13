"use client"

import React from "react";

import useContactModal from "@/hooks/useContactModal";

const Overlay: React.FC = () => {
  const contactModal = useContactModal();

  return (
    contactModal.isOpen && (
      <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={() => contactModal.onClose()}>
        
      </div>
    )
  );
};

export default Overlay;

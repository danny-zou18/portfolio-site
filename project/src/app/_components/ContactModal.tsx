"use client"

import React, { useState, useCallback, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import useContactModal from "@/hooks/useContactModal"


const ContactModal:React.FC = () => {
    const router = useRouter();
    const contactModal = useContactModal();

    const [showModal, setShowModal] = useState(contactModal.isOpen);

    useEffect(()=> {
        setShowModal(contactModal.isOpen);
        console.log("Contact Modal Opened");
    }, [contactModal.isOpen]);

    return (
        <div className={`bg-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6  shadow-lg ${showModal ? "opacity-100" : "opacity-0"}`}>
            {/* <Input type="email" label="Email" placeholder="Enter your Email" className="text-black"/>
            <Input type="email" label="Email" placeholder="Enter your Email" className="text-black"/> */}
        </div>
        
    )
}

export default ContactModal;
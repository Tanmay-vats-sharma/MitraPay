import React, { createContext, useState, useContext,useEffect } from 'react';
import Modal from "./Modal";

// Create Context
// Context is a State Management tool in React. It is designed to share data that can be considered “global” for a tree of React components.

const ModalContext = createContext();

// Provider Component
export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
        console.log("Modal Opened");
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    useEffect(() => {
        console.log("Modal Content: ", modalContent);
        console.log("Is Open: ", isOpen);
    }, [modalContent, isOpen]);

    return (
        <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal }}>
            {children}
            {isOpen && <Modal/>}
        </ModalContext.Provider>
    );
};

// Custom Hook to use Modal
export const useModal = () => useContext(ModalContext);
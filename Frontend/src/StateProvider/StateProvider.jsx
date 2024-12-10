import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

// Create Context
// Context is a State Management tool in React. It is designed to share data that can be considered “global” for a tree of React components.

const StateContext = createContext();

// Provider Component
export const StateProvider = ({ children }) => {
    const [ totalAmount, setTotalAmount ] = useState(5000);

    const [gullaks, setGullaks] = useState([
        { name: "Bike", totalAmount: 13000, currentAmount: 5000 },
        { name: "Trip", totalAmount: 20000, currentAmount: 7000 },
        { name: "Gift", totalAmount: 2000, currentAmount: 1000 },
        { name: "Savings", totalAmount: 50000, currentAmount: 30000 },
        { name: "Party", totalAmount: 5000, currentAmount: 2000 },
        { name: "Shopping", totalAmount: 10000, currentAmount: 5000 },
    ]);

    useEffect(() => {
        console.log("Gullaks:",gullaks);
    },[gullaks])

    const addGullak = (name, totalAmount) => {
        // Check if a gullak with the same name already exists
        console.log("hello");
        const isDuplicate = gullaks.some((gullak) => gullak.name === name);

        if (isDuplicate) {
            toast.error("A gullak with the same name already exists!");
            return;
        }

        // Add the new gullak if the name is unique
        setGullaks([
            ...gullaks,
            { name: name, totalAmount: totalAmount, currentAmount: 0 },
        ]);

        toast.success("Gullak Added");
    };

    const removeGullak = (name) => {
        // Find the Gullak to remove
        const gullakToRemove = gullaks.find((gullak) => gullak.name === name);
    
        toast.info("Breaking Gullak...", { autoClose: 1000 });
    
        setTimeout(() => {
            // Remove the Gullak
            const newGullaks = gullaks.filter((gullak) => gullak.name !== name);
            setGullaks(newGullaks);
    
            // Update the total amount
            IncreaseAmount(gullakToRemove.currentAmount);
    
            toast.success("Gullak broken successfully!", { autoClose: 1500 });
        }, 2100);
    };

    const addMoneyInGullak = (name, amount) => {
        // Find the Gullak to add money
        const gullakToAddMoney = gullaks.find((gullak) => gullak.name === name);
    
        if (!gullakToAddMoney) {
            toast.error("Gullak not found!");
            return;
        }
    
        // Convert currentAmount and amount to numbers
        const currentAmount = Number(gullakToAddMoney.currentAmount);
        const addAmount = Number(amount);

        if (addAmount <= 0) {
            toast.error("Please enter a valid amount!");
            return;
        }
    
        // Check if the amount exceeds the total amount
        if (currentAmount + addAmount > gullakToAddMoney.totalAmount) {
            toast.error("Amount exceeds the total amount!");
            return;
        }
    
        // Add the money to the Gullak
        gullakToAddMoney.currentAmount = currentAmount + addAmount;
    
        // Update the Gullak
        const newGullaks = gullaks.map((gullak) =>
            gullak.name === name ? gullakToAddMoney : gullak
        );
        setGullaks(newGullaks);
    
        // Update the total amount
        DecreaseAmount(addAmount);
    
        toast.success("Money added successfully!");
    };

    const addMoney = (amount) => {
        setTotalAmount(totalAmount + amount);
        toast.success(`₹${amount} added to your wallet!`);
    };

    const sendMoney = (userDetails, amount) => {
        // Simulated money transfer action
        toast.success(`₹${amount} sent to ${userDetails?.phone}!`);
    };
    

    const IncreaseAmount = (amount) => {
        setTotalAmount(totalAmount + amount);
    };

    const DecreaseAmount = (amount) => {
        setTotalAmount(totalAmount - amount);
    }
      
    return (
        <StateContext.Provider value={{ totalAmount, gullaks, addGullak, removeGullak, addMoneyInGullak, addMoney, sendMoney }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom Hook to use Modal
export const useStateContext = () => useContext(StateContext);
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { createGullak, getGullaks, deleteGullak, addMoneyApi } from '../Services/GullakServices';
import { getTransactions, PayMoney } from '../Services/TransactionService';
import { getProfile } from '../Services/UserService';
import { getContacts } from '../Services/ChatService';

// Create Context
// Context is a State Management tool in React. It is designed to share data that can be considered “global” for a tree of React components.

const StateContext = createContext();

// Provider Component
export const StateProvider = ({ children }) => {
    const [ totalAmount, setTotalAmount ] = useState(null);
    const [gullaks, setGullaks] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState({});
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        const fetchGullaks = async () => {
            try {
                const response = await getGullaks();
                console.log(response);
                const gullaks = response?.gullaks;
                setGullaks(gullaks);
            } catch (error) {
                console.error("Error while fetching gullaks:",error);
            }
        };

        const fetchTransactions = async () => {
            try {
                const response = await getTransactions();
                const Transactions = response?.transactions;
                setTransactions(Transactions);
            } catch (error) {
                console.error("Error while fetching transactions:",error);
            }
        };

        const fetchUser = async () => {
            try {
                const response = await getProfile();
                const user = response?.user;
                setUser(user);
                setTotalAmount(user?.wallet?.balance);
            } catch (error) {
                console.error("Error while fetching user:",error);
            }
        };

        const fetchContacts = async () => {
            try {
                const contacts = await getContacts();
                setContacts(contacts);
            } catch (error) {
                console.error("Error while fetching contacts:",error);
            }
        };

        fetchGullaks();
        fetchTransactions();
        fetchUser();
        fetchContacts();
    }, []);

    useEffect(() => {
        // console.log("Gullaks:",gullaks);
        // console.log("Transactions:",transactions);
        // console.log("User:",user);
        // console.log("Contacts:",contacts);
        // console.log("Selected Contact:",selectedContact);
    },[gullaks,transactions,user,contacts,selectedContact]);
        

    const addGullak = (name, totalAmount) => {

        console.log("hello");
        const isDuplicate = gullaks.some((gullak) => gullak.name === name);

        if (isDuplicate) {
            toast.error("A gullak with the same name already exists!");
            return;
        }

        try{
            createGullak({name, totalAmount});
            setGullaks([
                ...gullaks,
                { name: name, total_amt: totalAmount, current_amt: 0 },
            ]);
        } catch (error) {
            toast.error(error.message);
            return;
        }
        toast.success("Gullak Added");
    };

    const removeGullak = (name) => {
        // Find the Gullak to remove
        const gullakToRemove = gullaks.find((gullak) => gullak.name === name);
    
        toast.info("Breaking Gullak...", { autoClose: 1000 });
    
        try{
            deleteGullak(name);
            const newGullaks = gullaks.filter((gullak) => gullak.name !== name);
            setGullaks(newGullaks);
    
            // Update the total amount
            IncreaseAmount(gullakToRemove.current_amt);
    
            toast.success("Gullak broken successfully!", { autoClose: 1500 });
        }
        catch (error) {
            toast.error(error.message);
            return;
        }
    };

    const addMoneyInGullak = async (name, amount) => {
        // Find the Gullak to add money
        const gullakToAddMoney = gullaks.find((gullak) => gullak.name === name);
    
        if (!gullakToAddMoney) {
            toast.error("Gullak not found!");
            return;
        }
    
        // Convert current_amt and amount to numbers
        const current_amt = Number(gullakToAddMoney.current_amt);
        const addAmount = Number(amount);

        if (addAmount <= 0) {
            toast.error("Please enter a valid amount!");
            return;
        }
    
        // Check if the amount exceeds the total amount
        if (current_amt + addAmount > gullakToAddMoney.totalAmount) {
            toast.error("Amount exceeds the total amount!");
            return;
        }

        try{
            console.log("Adding Money");
            await addMoneyApi({name, amount: addAmount});
            console.log("Money Added");
        } catch (error) {
            toast.error(error.message);
            return;
        }
        
        console.log("Gullak to add money hit 0:");
        // Add the money to the Gullak
        gullakToAddMoney.current_amt = current_amt + addAmount;
    
        // Update the Gullak
        const newGullaks = gullaks.map((gullak) =>
            gullak.name === name ? gullakToAddMoney : gullak
        );
        console.log("New Gullaks Hit 1:",newGullaks);
        setGullaks(newGullaks);
    
        // Update the total amount
        DecreaseAmount(addAmount);
    
        toast.success("Money added successfully!");
    };

    const sendMoney = async (userDetails, amount) => {
        try {
            const response = await PayMoney({ email: userDetails.email, Phone_no: userDetails?.Phone_no, amount});
            console.log("Response:",response);
            toast.success(`₹${amount} sent to ${userDetails?.phone}!`);
            setTotalAmount(totalAmount - amount);
            setTransactions([response?.transaction, ...transactions ]);
        } catch (error) {
            console.error("Error while paying money:",error);
            toast.error(error.message);
        }
    };

    const addMoney = (amount) => {
        setTotalAmount(totalAmount + amount);
        toast.success(`₹${amount} added to your wallet!`);
    };

    const IncreaseAmount = (amount) => {
        setTotalAmount(totalAmount + amount);
    };

    const DecreaseAmount = (amount) => {
        setTotalAmount(totalAmount - amount);
    }

    const addContact = (contact) => {
        setContacts([contact,...contacts]);
    };
      
    return (
        <StateContext.Provider value={{ totalAmount, gullaks,transactions, user, contacts, selectedContact, addGullak, removeGullak, addMoneyInGullak, addMoney, sendMoney, setUser, addContact, setSelectedContact }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom Hook to use Modal
export const useStateContext = () => useContext(StateContext);
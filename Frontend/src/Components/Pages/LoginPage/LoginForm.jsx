import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login } from "../../../Services/AuthService";

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Testing the form data
    // useEffect(() =>{
    //     console.log("Form Data:",formData)
    // },[formData]);

    const handleForm = (key,value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value    
        }))
    }

    const handleSubmit = async () => {
        try {
            const response = await login(formData);
            console.log("Response:",response);
            toast.success("Logged in successfully");
            navigate("/dashboard");
        } catch (error) {
            console.error("Error while logging in:",error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" onChange={(e) => handleForm("email", e.target.value)} value={formData?.email}/>
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" onChange={(e) => handleForm("password", e.target.value)} value={formData?.password}/>
            </div>
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={() => handleSubmit()}>Login</button>
            </div>
        </>
    )
}

export default LoginForm
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import RegisterFormStep1 from "./RegisterFormStep1";
import RegisterFormStep2 from "./RegisterFormStep2";
import { register } from "../../../Services/AuthService";

function RegisterForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        Phone_no: "",
        password: ""
    });

    // Testing the form data
    // useEffect(() =>{
    //     console.log("Step",step);
    //     console.log("Form Data:",formData)
    // },[step,formData]);

    const handleStepChange = (value) =>{
        setStep((prev) => {
            const newStep = prev + value;

            if(newStep < 1) return 1
            if(newStep > 2) return 2
            return newStep;
        });
    }

    const handleSubmit = async () => {
        try {
            const response = await register(formData);
            toast.success("Registered successfully");
            window.location.href = "/dashboard";
        } catch (error) {
            console.error("Error while registering:",error);
            toast.error(error.message);
        }
    }
    return (
        <>
            {step == 1 && <RegisterFormStep1 setFormData={setFormData} data={formData}/>}
            {step == 2 && <RegisterFormStep2 setFormData={setFormData} data={formData}/>}
        
            <div className="mt-8 flex space-x-2">
                {step > 1 && (
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={()=>handleStepChange(-1)}>Previous</button>
                )}
                {step < 2 ? (
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={()=>handleStepChange(1)}>Next</button>
                ):(
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={() => handleSubmit()}>Submit</button>
                )}
            </div>
        </>
    )
}

export default RegisterForm
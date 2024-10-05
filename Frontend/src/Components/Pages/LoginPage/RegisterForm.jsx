import { useState, useEffect } from "react"
import RegisterFormStep1 from "./RegisterFormStep1";
import RegisterFormStep2 from "./RegisterFormStep2";
function RegisterForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    useEffect(() =>{
        console.log("Step",step);
        console.log("Form Data:",formData)
    },[step,formData]);

    const handleStepChange = (value) =>{
        setStep((prev) => {
            const newStep = prev + value;

            if(newStep < 1) return 1
            if(newStep > 2) return 2
            return newStep;
        });
    }
    return (
        <>
            {formData.name}
            {formData.email}
            {formData.password}
            {formData.phoneNumber}
            {step == 1 && <RegisterFormStep1 setFormData={setFormData} data={formData}/>}
            {step == 2 && <RegisterFormStep2 setFormData={setFormData}/>}
        
            <div className="mt-8 flex space-x-2">
                {step > 1 && (
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={()=>handleStepChange(-1)}>Previous</button>
                )}
                {step < 2 ? (
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={()=>handleStepChange(1)}>Next</button>
                ):(
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Submit</button>
                )}
            </div>
        </>
    )
}

export default RegisterForm
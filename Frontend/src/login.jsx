import { useState, useEffect } from "react";
import Logo from "./assets/Logo3.png"
import LoginForm from "./Components/Pages/LoginPage/LoginForm";
import RegisterForm from "./Components/Pages/LoginPage/RegisterForm";
import GoogleButton from "./Components/Pages/LoginPage/GoogleButton";
function Login() {
    const [Form, setForm] = useState("login");

    useEffect(() =>{
        console.log("Form Status:", Form)
    },[Form])

    return (
        // <!-- https://play.tailwindcss.com/MIwj5Sp9pw -->
        <div className="py-16 min-h-screen flex bg-gray-100">
            <div className="flex rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.15),_0_-10px_30px_rgba(0,0,0,0.15)] overflow-hidden mx-auto my-auto min-h-96 max-w-sm lg:max-w-7xl" >
                <div 
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}
                >
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <img src={Logo} alt="" className="h-1/6 w-2/6 mx-auto"/>
                    <div className="my-5 flex items-center justify-center space-x-7">
                        <a className={`text-xl text-center ${Form === 'login'? 'text-black font-bold': 'text-gray-500' } uppercase cursor-pointer`} onClick={() => setForm("login")} >Login</a>
                        <a className={`text-xl text-center ${Form === 'register'? 'text-black font-bold': 'text-gray-500' } uppercase cursor-pointer`} onClick={() => setForm("register")}>Register</a>
                    </div>
                    {Form === 'login'? <LoginForm/>: <RegisterForm/>}
                    <span class="flex items-center justify-center space-x-2 my-2">
                    <span class="h-px bg-gray-400 w-14"></span>
                    <span class="font-normal text-gray-500">or login with</span>
                    <span class="h-px bg-gray-400 w-14"></span>
                    </span>
                    <GoogleButton/>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;

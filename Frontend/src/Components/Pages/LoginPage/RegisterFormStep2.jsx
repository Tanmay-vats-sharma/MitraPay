function RegisterFormStep2({setFormData, data}){
    const handleForm = (key,value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value    
        }))
    }
    return(
        <>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" onChange={(e) => handleForm("name", e.target.value)} value={data?.email || ''}/>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
        </>
    )
}

export default RegisterFormStep2
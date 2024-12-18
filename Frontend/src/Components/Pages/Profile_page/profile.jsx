import React, { useState, useEffect } from "react";
import { Carousel } from "./Carousel";
import { updateProfile } from "../../../Services/UserService";
import { toast } from 'react-toastify';
import { useStateContext } from "../../../StateProvider/StateProvider";

export function Profile() {
  const { user, setUser } = useStateContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // Split the name into firstName, middleName, and lastName
  // const [firstName, middleName = "", lastName = ""] = user.name.split(" ");

  // // Initialize formData
  // const initialFormData = {
  //   firstName: firstName.trim(),
  //   middleName: middleName.trim(),
  //   lastName: lastName.trim(),
  //   email: user.email || "",
  //   phone: user.Phone_no || "",
  //   address: user.Address || "",
  //   password: "", // Password should be left blank for security
  // };

  // setFormData(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const multipartData = new FormData();

    // Combine name fields
    const fullName = `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim();

    multipartData.append("name", fullName);
    multipartData.append("email", formData.email);
    multipartData.append("Phone_no", formData.phone);
    multipartData.append("password", formData.password);
    multipartData.append("Address", formData.address);


    if (typeof selectedFile === "string") {
      multipartData.append("profile_pic", selectedFile);
    } else if (selectedFile instanceof File) {
      // If `selectedFile` is a File object
      multipartData.append("profileImage", selectedFile);
    }

    // Call updateProfile with formatted data
    try {
      const response = updateProfile(multipartData);
      setUser(response.user);
    }
    catch (error) {
      toast.error("Failed to update profile");
    }
  };

  useEffect(() => {
    console.log("Selected File: ", selectedFile);
    console.log("Form Data: ", formData);
    console.log("User: ", user);
  }, [selectedFile, formData, user]);


  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 p-1">
        <div className="w-[100%] h-[40%]">
          <div className="w-[100%] h-[18%] flex justify-between items-center px-2">
            <div className="w-[25%] h-[100%] flex items-center px-2 text-2xl font-semibold tracking-tighter">
              <p>Choose Avatar</p>
            </div>
            <button
              className="bg-blue-600 w-[15%] h-[80%] flex rounded-md  justify-center px-1 items-center hover:bg-blue-800 "
              onClick={() => handleSubmit()}>
              <div className="w-[60%]   text-[0.9rem] text-white font-mono">
                Save
              </div>
            </button>
          </div>
          <div className="w-[100%] h-[75%] flex items-center justify-center ">
            <Carousel setSelectedFile={setSelectedFile}></Carousel>
          </div>
        </div>
        <div className="w-[100%] h-[58%] px-2">
          <div className="flex justify-start w-[100%] h-[14%]  text-2xl font-semibold tracking-tighter px-3">
            <p>Personal Information</p>
          </div>
          <div className="flex flex-col justify-evenly w-[100%] h-[86%]   ">
            <div className="h-[25%]  flex w-[100%] justify-evenly ">
              <div className="w-[30%] h-[100%] flex flex-col justify-between">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>First Name</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="text"
                    placeholder="Tanmay"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-[100%] px-2 border-b-[2px]  rounded-md  bg-gray-100   border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="w-[30%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Middle Name</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="text"
                    placeholder="Sharma"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="h-[100%] px-2 border-b-[2px]  rounded-md  bg-gray-100   border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    name="middleName"
                  />
                </div>
              </div>
              <div className="w-[30%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Last Name</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="text"
                    placeholder="Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-[100%] px-2 border-b-[2px]  rounded-md  bg-gray-100 border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    name="lastName"
                  />
                </div>
              </div>
            </div>
            <div className="h-[25%]  flex w-[100%] justify-evenly ">
              <div className="w-[63%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Email</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="email"
                    placeholder="XYZ@gmail.com"
                    className="h-[100%] px-2 border-b-[2px]  rounded-md  bg-gray-100  border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="w-[30%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Phone No. </p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="text"
                    placeholder="Phone No."
                    className="h-[100%] px-2 border-b-[2px]  rounded-md  bg-gray-100  border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>
              </div>
            </div>
            <div className="h-[25%]  flex w-[100%] justify-evenly ">
              <div className="w-[63%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Address</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="text"
                    placeholder="H.NO.- 149, street no.- 23, city, State"
                    className="h-[100%] px-2 border-b-[2px]  rounded-md    bg-gray-100 border-blue-500 focus:border-b-blue-800  w-[100%] outline-none text-md "
                    value={formData.address}
                    onChange={handleChange}
                    name="address"
                  />
                </div>
              </div>

              <div className="w-[30%] h-[100%] flex flex-col justify-evenly">
                <div className="h-[35%] w-[100%] text-lg font-bold flex justify-start px-3 items-center">
                  <p>Password</p>
                </div>
                <div className="h-[60%] w-[100%] flex justify-start px-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-[100%] px-2 border-b-[2px]  rounded-md    bg-gray-100   border-blue-500 focus:border-blue-800  w-[100%] outline-none text-md"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

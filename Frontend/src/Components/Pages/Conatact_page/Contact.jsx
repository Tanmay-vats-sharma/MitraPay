import React, {useEffect, useState} from "react";
import Boy from "../../../assets/boy.png";
import Dropdown from "./Dropdown";
import { useStateContext } from "../../../StateProvider/StateProvider";

export function Contact() {
  const { user, contacts, selectedContact } = useStateContext();
  const [ profile, setProfile ] = useState(null);

  useEffect(() => {
    // Find the selected contact by its contactId
    console.log("Selected Contact in Contact page: ",selectedContact);
    const contact = contacts.find(
      (con) => con?.contactId === selectedContact
    );
    
    // Check if the contact exists, then find the other participant
    if (contact) {
      const otherParticipant = contact.participants.find(
        (participant) => participant.Phone_no !== user?.Phone_no
      );

      setProfile(otherParticipant);
    }
  }, [selectedContact]);
  
  return (
    <div className="w-[100%] h-[13%] border-[1px] border-gray-300 bg-gray-50 rounded-t-lg flex justify-between item p-1 ">
      <div className="w-[70%]  h-[100%]  flex items-center px-2">
        <div className="h-[95%] w-[10%] overflow-hidden rounded-full">
          <img src={profile?.profile_pic} alt="" />
        </div>
        <div className="w-[60%] h-[100%]  flex flex-col justify-evenly items-center p-1">
          <div className="w-[90%]  h-[50%] text-[1.2rem] font-semibold tracking-tighter">
            <p>{profile?.name}</p>
          </div>
          <div className=" w-[90%]  h-[50%] text-[0.9rem] text-gray-400 font-semibold flex items-center">
            <p>{profile?.Phone_no}</p>
          </div>
        </div>
      </div>
      <div className="w-[20%]  h-[100%] flex justify-end p-4">
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}

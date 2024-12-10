import React from "react";
import { AddMoney } from "../Modals/addMoney";
import { useModal } from "../../StateProvider/ModalProvider";
import { AddGullak } from "../Modals/AddGullak";
import { AddMoneyInWallet } from "../Modals/AddMoneyInWallet";
import { SendMoney } from "../Modals/SendMoney";
import { UserProfile } from "../Modals/UserProfile";

export default function Modal() {
    const { modalContent, closeModal } = useModal();
    const modal = modalContent?.type;

    return (
        // <div>
        //     <p>Modal</p>
        //     {modalContent == "addMoney" && <AddMoney/>}
        // </div>
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div
                className="relative bg-gray-50 min-w-[40%] w-auto min-h-[50%] h-auto rounded-lg shadow-lg p-4 flex justify-center items-center"
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-500 hover:bg-gray-300  rounded-full focus:outline-none px-2 text-2xl "
                >
                    X
                </button>

                {/* Modal Content */}
                <div className="h-full flex items-center justify-center">
                    {modal == "addMoney" && <AddMoney />}
                    {modal == "addGullak" && <AddGullak />}
                    {modal == "addMoneyInWallet" && <AddMoneyInWallet />}
                    {modal == "sendMoney" && <SendMoney />}
                    {modal == "userProfile" && <UserProfile />}
                </div>
            </div>
        </div>
    );
}
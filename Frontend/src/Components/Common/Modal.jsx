import React from "react";
import { AddMoney } from "../Modals/addMoney";
import { useModal } from "../../StateProvider/ModalProvider";
import { AddGullak } from "../Modals/AddGullak";

export default function Modal() {
    const { modalContent, closeModal } = useModal();
    const modal = modalContent?.type;
    console.log("Modal Content: ", modalContent);
    return (
        // <div>
        //     <p>Modal</p>
        //     {modalContent == "addMoney" && <AddMoney/>}
        // </div>
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div
                className="relative bg-gray-50 w-[40%] h-[50%] rounded-lg shadow-lg p-4"
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none "
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="h-full flex items-center justify-center">
                    {modal == "addMoney" && <AddMoney />}
                    {modal == "addGullak" && <AddGullak />}
                </div>
            </div>
        </div>
    );
}
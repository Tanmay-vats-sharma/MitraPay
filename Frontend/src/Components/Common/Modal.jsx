import React from "react";
import { AddMoney } from "../Modals/addMoney";
import { useModal } from "../../StateProvider/ModalProvider";
import { AddGullak } from "../Modals/AddGullak";
import { AddMoneyInWallet } from "../Modals/AddMoneyInWallet";
import { SendMoney } from "../Modals/SendMoney";
import { UserProfile } from "../Modals/UserProfile";
import { AddContact } from "../Modals/AddContact";
import config from "../../Config/config.json";

export default function Modal() {
    const { modalContent, closeModal } = useModal();
    const modal = modalContent?.type;
    const color = modalContent?.color;

    const colorStyles = config.gullaks.colorStyles;
    const styles = colorStyles[color] || colorStyles.blue;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div
                className="relative bg-white min-w-[40%] w-auto min-h-[50%] h-auto rounded-lg shadow-lg p-4 flex justify-center items-center border-[3px]"
                style={{ borderColor: styles.borderColor }}
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
                    {modal == "addContact" && <AddContact />}
                </div>
            </div>
        </div>
    );
}
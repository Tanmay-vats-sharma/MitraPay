import React from "react";
import { Navbar } from "../Components/Common/Navbar";
import { Header } from "../Components/Common/header";
import { Balance } from "../Components/Common/Balance&Contacts";
import { Gullaks } from "../Components/Pages/Gullak_page/Gullaks";

export function Gullak() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-8 gap-3 bg-blue-50  p-5 min-h-screen \">
        <Header></Header>
        <Balance></Balance>
        <Navbar></Navbar>
        <Gullaks></Gullaks>
      </div>
    </>
  );
}



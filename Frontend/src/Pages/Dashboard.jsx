import React from "react";
import { Navbar } from "../Components/Common/Navbar";
import { Header } from "../Components/Common/header";
import { Balance } from "../Components/Common/Balance&Contacts";
import { Transactions } from "../Components/Pages/Dashboard/Transactions";
import { Gullaks } from "../Components/Pages/Dashboard/Gullaks";

//Blue,Green,Pink,Violet,Rose,Amber
function Dashboard() {

  return (
    <>
      <div className="grid grid-cols-10 grid-rows-8 gap-3 bg-blue-50  p-5 min-h-screen \">
        <Header></Header>
        <Balance></Balance>
        <Navbar></Navbar>
        <Gullaks></Gullaks>
        <Transactions></Transactions>
      </div>
    </>
  );
}

export default Dashboard;

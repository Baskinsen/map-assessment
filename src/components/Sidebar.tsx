import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Grid from "../assets/sidebar/grid-2.png";
import Box from "../assets/sidebar/box.png";
import Calendar from "../assets/sidebar/calendar-alt.png";
import Cart from "../assets/sidebar/cart.png";
import Money from "../assets/sidebar/money-1.png";
import Chats from "../assets/sidebar/chats.png";
import SignDoc from "../assets/sidebar/sign-doc.png";
import Question from "../assets/sidebar/question-circle.png";
import Setting from "../assets/sidebar/settings.png";
import ArrowUp from "../assets/Arrowup.png";
import SignOut from "../assets/sidebar/sign-out.png";
import { user } from "../assets/data";
import { truncateString } from "../utils";

export default function Sidebar() {
  const [isProcurementOpen, setProcurementOpen] = useState(true);


  return (
    <aside className="sticky top-0 h-screen lg:w-[30%] xl:w-[25%] bg-[#F7F9FC] px-2 py-8 flex flex-col gap-10 transition-transform duration-300">
      <div>
        <img src={Logo} alt="Map Logo" className="px-5" />
      </div>
      <nav className="flex flex-col justify-between h-full">
        <ul className="space-y-2">
          <li className="flex text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <img src={Grid} alt="" className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </li>
          <li className="flex text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <img src={Box} alt="" className="w-5 h-5 mr-3" />
            <span>Inventory</span>
          </li>
          <li className="flex flex-col justify-between text-[14px] text-[#344054]">
            <div
              className="flex justify-between px-5 py-3 bg-[#E3EAFB] font-[500] w-full rounded-md cursor-pointer"
              onClick={() => setProcurementOpen(!isProcurementOpen)}
            >
              <div className="flex">
                <img src={Cart} alt="" className="w-5 h-5 mr-3" /> Procurement
              </div>
              <img
                src={ArrowUp}
                alt=""
                className={`transition-transform duration-300 ${
                  !isProcurementOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown Content */}
            <ul
              className={`my-2 space-y-2 overflow-hidden transition-all duration-300 ${
                isProcurementOpen ? "max-h-[100px]" : "max-h-0"
              }`}
            >
              <li className="px-10 py-3 bg-[#E3EAFB] font-[500] w-full rounded-md">
                Quotes
              </li>
              <li className="px-10 py-3 font-[400] hover:bg-[#E3EAFB] hover:font-[500] w-full rounded-md">
                Orders
              </li>
            </ul>
          </li>
          <li className="flex justify-between text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <div className="flex">
              <img src={Money} alt="" className="w-5 h-5 mr-3" /> Finance
            </div>
            <img src={ArrowUp} alt="" className="transform rotate-180" />
          </li>
          <li className="flex justify-between text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <div className="flex">
              <img src={Chats} alt="" className="w-5 h-5 mr-3" /> Communication
            </div>
            <span className="bg-[#175CFF] rounded-xl px-2 text-[12px] text-[#FFFFFF] my-auto">
              10
            </span>
          </li>
          <li className="flex justify-between text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <div className="flex">
              <img src={Calendar} alt="" className="w-5 h-5 mr-3" /> Calendar
            </div>
            <span className="bg-[#175CFF] rounded-xl px-2 text-[12px] text-[#FFFFFF] my-auto">
              10
            </span>
          </li>
          <li className="flex text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <img src={SignDoc} alt="" className="w-5 h-5 mr-3" /> Contacts
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <img src={Question} alt="" className="w-5 h-5 mr-3" /> Support
          </li>
          <li className="flex text-[14px] text-[#344054] px-5 py-3  font-[400] hover:bg-[#E3EAFB] hover:font-[500] rounded-md">
            <img src={Setting} alt="" className="w-5 h-5 mr-3" /> Settings
          </li>
          <li className="flex justify-between px-2 xl:px-5 gap-2">
            <div className="flex gap-2">
              <img src={user.avatar} alt="" />
              <div className="flex flex-col">
                <h3 className="text-[14px] font-bold text-[#101928]">
                  {user.name}
                </h3>
                <p className="text-[#475367] text-[14px] font-[400]">
                  {truncateString(user.email, 15)}
                </p>
              </div>
            </div>

            <div className="my-auto justify-end">
              <img src={SignOut} alt="" />
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

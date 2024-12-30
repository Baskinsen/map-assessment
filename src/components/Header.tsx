import SearchIcon from "../assets/header/Icon-left.png";
import Bell from "../assets/header/Bell.png";
import Chat from "../assets/header/Chat-2.png";
import Arrowup from '../assets/Arrowup.png'
import { user } from "../assets/data";
export default function Header() {
  return (
    <header className="sticky top-0 bg-[#ffffff] flex justify-end items-center w-full py-3 px-10 border-[1px] border-[#F0F2F5]">
      <div className="flex items-center gap-10">
        <div className="relative w-[30dvw]">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-3 font-semibold border-[2px] border-[#E4E7EC] rounded-md shadow-sm focus:outline-none text-[14px] text-[#344054] font-[500]"
          />
          <img
            src={SearchIcon}
            alt="Search bar"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
        </div>
        <div className="flex gap-3">
          <img src={Bell} alt="Notifications" className="w-8 h-8 my-auto" />
          <img src={Chat} alt="Chat" className="w-8 h-8 my-auto" />
          <div className="flex gap-2">
            <img src={user.avatar} alt="" />
            <img
              src={Arrowup}
              alt=""
              className="transform rotate-180 h-5 w-5 my-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

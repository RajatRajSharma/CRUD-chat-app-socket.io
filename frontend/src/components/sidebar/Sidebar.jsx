import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col ${
        isCollapsed ? "w-[15%]" : "w-[50%]"
      }`}
      style={{ height: "auto" }}
    >
      {!isCollapsed && (
        <>
          <SearchInput />
          <div className="divider px-3"></div>
          <Conversations />
        </>
      )}
      <div className="mt-auto flex justify-end">
        <button onClick={toggleSidebar}>
          {isCollapsed ? (
            <BiChevronRightSquare className="w-6 h-6 text-white cursor-pointer" />
          ) : (
            <BiChevronLeftSquare className="w-6 h-6 text-white cursor-pointer" />
          )}
        </button>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;

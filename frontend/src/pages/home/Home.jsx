import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
      style={{ maxHeight: "70%" }}
    >
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col ${
          isCollapsed ? "w-[85%]" : "w-[50%]"
        } md:min-w-[450px] `}
        style={{ minHeight: "550px" }}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;

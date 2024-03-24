import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Sidebar() {
  return (
    <div className=" sticky flex flex-col bg-black text-white left-0 h-screen gap-[10px]">
      <div className="hover:bg-slate-500 flex justify-center p-[16px] ">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </Link>
      </div>

      <div className="hover:bg-slate-500 flex justify-center  p-[16px]">
        <Link to="/">
          <FontAwesomeIcon icon={faReadme} size="xl" />
        </Link>
      </div>
      
    </div>
  );
}

export default Sidebar;

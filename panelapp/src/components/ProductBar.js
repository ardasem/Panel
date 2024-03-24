import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function ProductBar({ id, name, image, price }) {
  return (
    <div className="flex flex-row   bg-slate-200 hover:bg-slate-400 px-[50px] py-[10px] rounded shadow-lg  my-[10px]   justify-between gap-20 font-montserrat text-[18px]">
      <div>
        <p>{id}</p>
      </div>

      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>

      <div className="flex flex-row items-center gap-[20px]">
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faInfo} />
      </div>
    </div>
  );
}

export default ProductBar;

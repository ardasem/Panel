import React from "react";
import { useState } from "react";

function Dropdown({ data }) {
  return (
    <div className="p-[25px]">
      {data && (
        <select
          className="border-[1px] border-slate-300 rounded-md font-montserrat p-3"
          name="groceries-dropdown"
        >
          {JSON.parse(data).map((data) => {
            return <option value={data.name}>{data.name}</option>;
          })}
        </select>
      )}
    </div>
  );
}

export default Dropdown;

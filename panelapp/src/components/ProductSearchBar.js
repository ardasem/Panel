import React from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

function ProductSearchBar({ data }) {
  return (
    <div className="flex flex-row   bg-slate-200 shadow-lg p-[10px] items-center justify-between font-montserrat">
      <SearchBar />
    
    </div>
  );
}

export default ProductSearchBar;

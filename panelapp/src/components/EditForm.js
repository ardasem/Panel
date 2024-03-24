import React from "react";
import EditFormInput from "./EditFormInput";

function EditForm({ data }) {
  return (
    <form action="">
      <label htmlFor="">ID:
        <EditFormInput data={data.name} />
      </label>
      <label htmlFor="">Name:
        <EditFormInput data={data.name} />
      </label>
      <label htmlFor="">Price:
        <EditFormInput data={data.name} />
      </label>
      <label htmlFor="">Img:
        <EditFormInput data={data.name} />
      </label>

      <button
        type="submit"
        className="text-black absolute end-3 bottom-2 ps-4 bg-slate-200 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
      ></button>
    </form>
  );
}

export default EditForm;

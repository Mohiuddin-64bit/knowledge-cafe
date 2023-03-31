import React from "react";

const SideBar = (props) => {
  const { title, time } = props.cart;

  return (
    <>
      <h2 className="text-xl bg-slate-200 font-bold px-4 py-3 border-2 rounded-lg my-2">
        {title}
      </h2>
    </>
  );
};
export default SideBar;

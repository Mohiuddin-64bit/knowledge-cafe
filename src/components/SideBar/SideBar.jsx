import React from "react";

const SideBar = ({cart}) => {
  const {title} = cart;
  console.log(cartData)
  
  return (
    <>
      <h2 className="text-2xl font-bold p-2"> {title}</h2>
    </>
)};
export default SideBar;

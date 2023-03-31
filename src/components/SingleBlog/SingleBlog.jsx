import React from "react";
import SideBar from "../SideBar/SideBar";

const SingleBlog = (props) => {
  const addData = props.addData;
  const { photo, author, userPhoto, title, time } = props.singleData;
  return (
    <div>
      <div className="card card-compact w-[800px] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="" src={photo} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex">
              <img className=" w-10 h-10 rounded-full" src={userPhoto} alt="" />
              <div className="px-2">
                <h2 className="card-title ">{author}</h2>
                <p className="text-[12px] ml-2 text-gray-400">
                  Mar 14 (4 Days ago)
                </p>
              </div>
            </div>
            <div>
              <p>5 min read</p>
            </div>
          </div>
          <h2 className="card-title text-3xl">{title}</h2>
          <div>
            <p className="text-gray-500 cursor-pointer">
              #beginners #Programming
            </p>
          </div>
          <div className="card-actions">
            <p onClick={() => addData(props.singleData)} className="text-blue-400 font-bold my-3 cursor-pointer">
              Mark as read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

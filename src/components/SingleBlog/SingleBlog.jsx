import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
  const markAsRead = props.markAsRead;
  const addData = props.addData;
  const { photo, author, userPhoto, title, time } = props.singleData;
  const [isRead, setIsRead] = useState(false);

  const handleBookMark = () => {
    if(isRead){
      toast("You already marked as Bookmark")
    }
    else{
      addData(props.singleData)
      setIsRead(true);
    }
  }

  return (
    <div className="px-9">
      <div className="card card-compact lg:w-[800px] mx-auto bg-base-100 shadow-xl">
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
              <p className="text-gray-500">{time} min read <FontAwesomeIcon onClick={handleBookMark} icon={faBookmark} /> </p>
            </div>
          </div>
          <h2 className="card-title text-3xl">{title}</h2>
          <div>
            <p className="text-gray-500 cursor-pointer">
              #beginners #Programming
            </p>
          </div>
          <div className="card-actions">
            <p onClick={() => markAsRead(time)} className="text-blue-400 font-bold my-3 cursor-pointer">
            Mark as read
            </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

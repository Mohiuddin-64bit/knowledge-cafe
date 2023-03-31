import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  
  useEffect(() => {
    let time = 0;
    for (let i = 0; i < cartData.length; i++) {
      time += parseInt(cartData[i].time);
    }
    setTotalTime(time);
  }, [cartData]);


  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  const addData = (data) => {
    const newData = [...cartData, data];
    setCartData(newData);
  };

  return (
    <div>
      <div className="w-[90%] mx-auto mt-8">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-4 mb-8">
            <div className="grid grid-cols-1 gap-4">
              {data.map((singleData) => (
                <SingleBlog
                  addData={addData}
                  key={singleData.id}
                  singleData={singleData}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-2 border rounded-md">
            <div className="border-2 border-cyan-400 h-16 w-full bg-gray-100 ">
              <h2 className="text-2xl text-cyan-500 font-bold text-center">
                Spent Time on Reading:{totalTime}
              </h2>
            </div>
            {cartData.map((cart) => (
              <SideBar key={cart.id} cart={cart}></SideBar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addData = (data) => {
    const newData = [...cartData, data]
    setCartData(newData)
  }

  return (
    <div>
      <div className="w-[90%] mx-auto mt-8">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-4 mb-8">  
            <div className="grid grid-cols-1 gap-4">
              {data.map((singleData) => (
                <SingleBlog addData={addData} key={singleData.id} singleData={singleData} />
              ))}
            </div>
          </div>
          <div className="md:col-span-2 border rounded-md">
            <div className="border-2 border-cyan-400 h-16 w-full bg-gray-100 ">
              <h2 className="text-2xl text-cyan-500 font-bold text-center">Spent Time on Reading: </h2>
            </div>
              {/* <SideBar cartData={cartData}></SideBar> */}
              {
                cartData.map(cart => <SideBar cart={cart}></SideBar>)
              }
            
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

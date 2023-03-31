import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="w-[90%] mx-auto mt-8">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-4 mb-8">  
            <div className="grid grid-cols-1 gap-4">
              {data.map((singleData) => (
                <SingleBlog key={singleData.id} singleData={singleData} />
              ))}
            </div>
          </div>
          <div className="md:col-span-2 border rounded-md">
            {/* <SideCart cartData={cartData} />
            <ToastContainer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalTime, setTotalTime] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addData = (data) => {
    const newData = [...cartData, data];
    setCartData(newData);
  };

  const markAsRead = (time) => {
    const newTime = [...totalTime, time];
    setTotalTime(newTime);
  };

  let setTimeTotal = 0;
  for (let time of totalTime) {
    setTimeTotal = setTimeTotal + parseInt(time);
  }

  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-8">
        <div className="grid lg:grid-cols-6 gap-8">
          <div className="lg:col-span-4 mb-8">
            <div className="grid grid-cols-1 gap-4">
              {data.map((singleData) => (
                <SingleBlog
                  addData={addData}
                  key={singleData.id}
                  singleData={singleData}
                  markAsRead={markAsRead}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-2 border   rounded-md px-8">
            <div className="border-2 border-cyan-400 h-16 w-full bg-gray-100 ">
              <h2 className="text-2xl  font-bold text-center">
                Spent Time on Reading: {setTimeTotal} min
              </h2>
            </div>
            {cartData.map((cart) => (
              <SideBar key={cart.id} cart={cart}></SideBar>
            ))}
          </div>
        </div>
      </div>
      {/* Blog section */}
      <div className="container px-16 bg-slate-100 rounded-lg py-12 mb-20">
        <div className="">
          <h3 className="text-lg font-bold">
            1. What is the difference between Props and State?
          </h3>
          <div className="ml-5">
            <p className="text-gray-500">
              <span className="font-bold text-black underline">Props</span>:
              Props (short for properties) are read-only data that are passed to
              a component from its parent component. They are used to configure
              the component and provide it with the data it needs to render.
              Props are passed down the component tree and can't be modified by
              the component itself.
            </p>
            <p className="text-gray-500 mt-3">
              <span className="font-bold text-black underline">State</span>:
              State: State, on the other hand, is used to manage the internal
              data of a component. It's similar to props in that it's an object
              that holds data, but unlike props, it can be modified by the
              component itself.
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">2. how useState works?</h3>
          <div className="ml-5">
            <p className="text-gray-500">
              <span className="font-bold text-black underline">useState</span>:
              "useState" is a hook in React that allows you to add state to a
              functional component. The basic idea is that you call the useState
              hook with an initial value, and it returns an array with two
              elements
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">3. What else useEffect can do without loading data?</h3>
          <div className="ml-5">
            <p className="text-gray-500">
              <span className="font-bold text-black underline">useEffect</span>:
              useEffect runs after every render of a component and takes a function that defines the side-effect and an array of dependencies as arguments. The function inside useEffect can contain any code to run after the component renders, and the array of dependencies tells React when the hook should be called.
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">4. How does React Js work?</h3>
          <div className="ml-5">
            <p className="text-gray-500">
              <span className="font-bold text-black underline">React Js</span>:
              ReactJS is a JavaScript library that allows developers to build
              reusable UI components and manage their state in a declarative and
              efficient way. It uses a virtual DOM to render UI changes
              efficiently and minimizes direct manipulation of the actual DOM,
              which can be expensive in terms of performance. <br /> <br />
              ReactJS allows developers to define components with their own
              state and properties, which can be passed down to child
              components. When the state of a component changes, React
              automatically re-renders the component and updates the virtual
              DOM. It then compares the previous and new versions of the virtual
              DOM to determine which parts of the actual DOM need to be updated,
              minimizing the number of actual DOM manipulations required. <br /> <br />
              React also provides a simple and intuitive way to handle user
              input and manage application state, making it easier to build
              complex and interactive UIs. Overall, React's design and
              architecture make it a popular choice for building scalable and
              maintainable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

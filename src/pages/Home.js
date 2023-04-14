import React from "react";
import TakeBox from "../components/TakeBox";
import Navbar from "../components/NavBar";
import CreateBox from "../components/CreateBox";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex justify-center align-middle py-1 font-semibold">
          <h1 className="my-4 mx-4 align-middle justify-center text-2xl">
            Create or Take a quiz now!!!
          </h1>
        </div>
        <br />
        <div className="flex flex-row justify-evenly">
          <CreateBox />
          <TakeBox />
        </div>
      </div>
    </div>
  );
};

export default Home;

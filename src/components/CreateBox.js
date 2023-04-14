import React from "react";
import { Link } from "react-router-dom";
import Image from "./bulbrm.png";

//Component of the Create Quiz Box
const CreateBox = () => {
  return (
    <div className="my-3 p-4 bg-[#f1efef] rounded-xl w-72">
      <img src={Image} alt="Bulb" />
      <br />
      <div className="flex justify-center my-4">
        <button className="flex justify-center align-middle content-center bg-[#4A94EA] text-[#FFFFFF] rounded-xl w-32 h-10">
          <Link to="/createquiz" className="py-1.5">
            Create Quiz
          </Link>
        </button>
        <br />
      </div>
    </div>
  );
};

export default CreateBox;

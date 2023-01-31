import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Input({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0  flex justify-center my-auto w-3/4 mx-auto items-center">
      <div className="bg-pop bg-opacity-40 backdrop-blur-sm w-3/4 text-2xl grid-rows-3 md:w-1/2">
        <div className="p-2 mb-9">
          <IoMdCloseCircle
            onClick={onClose}
            size={30}
            className=" text-rock hover:text-opacity-20"
          />
        </div>
        <div className="text-center">
          <div className="p-5">
            <h1 className="font-ItimFont text-rock">THESIS TITLE:</h1>
            <input
              type="text"
              placeholder="Thesis Title:"
              className="bg-pink w-3/4 text-sm p-2 text-center"
            />
          </div>
          <div className="p-5">
            <h1 className="font-ItimFont text-rock">GROUP NAME:</h1>
            <input
              type="text"
              placeholder="Group Name:"
              className="bg-pink w-3/4 text-sm p-2 text-center"
            />
          </div>
        </div>
        <div className="p-10 mt-5">
          <div className="text-center">
            <button className="bg-pink rounded-3xl text-bold p-2 font-ItimFont text-rock text-base hover:text-opacity-25">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

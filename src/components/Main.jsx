import React from "react";
import React1, { useState } from "react";
import Logo from "../assets/LOGO.png";
import Glass from "../assets/Glass.png";
import Popup from "../components/Input";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <div className="w-full h-screen ">
      <div className="grid grid-cols-2 justify-around">
        <div className="h-full">
          <div className="flex h-full items-center ">
            <img src={Logo} className="w-1/3 mx-3 md:w-1/4" />
          </div>
        </div>
        <div className="flex h-full mx-4 p-4 items-center justify-center md:items-end">
          <button
            className="font-sans text-xs bg-pink p-4 rounded-sm underline md:text-sm hover:bg-opacity-60"
            onClick={() => setShowModal(true)}
          >
            Input your Thesis Ideas!
          </button>
        </div>
      </div>
      <div className="flex h-3/4 items-center justify-center bg-wrench bg-right">
        <div className="grid grid-rows-3">
          <div className=" font-ItimFont text-xl text-bold text-pink w-fit my-auto mx-auto md:text-3xl bg-rock rounded-lg p-2">
            <h1>ECE THESIS IDEA RANDOMIZER</h1>
          </div>
          <div className="bg-pink w-full font-ItimFont text-lg text-gray justify-center my-auto rounded-sm p-2 mx-auto m-4 text-center md:w-full">
            Generating thesis title....
          </div>

          <div className="bg-rock text-rocktext font-ItimFont mx-auto w-fit text-sm rounded-2xl p-3 m-12 hover:opacity-60 hover:text">
            <button>CLICK HERE TO GENERATE TITLE</button>
          </div>
        </div>
      </div>
      <div className="font-ItimFont text-end">
        <h2 className="mr-10">POWERED BY: CD</h2>
      </div>
      <Popup onClose={handleClose} visible={showModal} />
    </div>
  );
}

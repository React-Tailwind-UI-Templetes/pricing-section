import React from "react";

// react icons
import { MdOutlineDone } from "react-icons/md";

const ProCard = () => {
  return (
    <div className="card border w-full bg-[#091a4f] px-4 py-6 rounded-lg relative">
      {/* offer message */}
      <div className=" absolute top-[-16px] left-1/2 transform -translate-x-1/2  bg-[#00addd] text-white rounded-lg py-1 px-4">
        Save 30%
      </div>

      <h5
        className="font-[500] mb-5 text-[20px] text-[#fff]
        ">
        Pro
      </h5>

      {/* price */}
      <div className="flex items-start gap-3">
        <h2 className="font-[600] text-[45px] text-[#fff]">$65</h2>
        <span className="text-[#f7ce00]">/ month</span>
      </div>

      {/* description */}
      <p className="text-[0.9rem] text-[#fff]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        accusamus quidem, eveniet facere voluptas ipsum! Aperiam cum eaque
        beatae aspernatur!
      </p>

      {/* package details */}
      <div className="flex flex-col gap-3 mt-5 text-[0.9rem] text-[#fff]">
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#fff]">
          <MdOutlineDone className="text-[#f7ce00]" />
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <button className="px-8 py-2 border-none outline-none  rounded mt-8 bg-[#f7ce00]">
        Choose Plan
      </button>
    </div>
  );
};

export default ProCard;

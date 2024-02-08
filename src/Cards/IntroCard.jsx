import React from "react";

// react icons
import { MdOutlineDone } from "react-icons/md";

const IntroCard = () => {
  return (
    <div className="card w-full px-4 py-6 rounded-lg">
      <h5
        className="font-[500] mb-5 text-[20px] text-[#000]
        ">
        Intro
      </h5>

      {/* price */}
      <div className="flex items-start gap-3">
        <h2 className="font-[600] text-[45px] text-[#000]">$12</h2>
        <span className="text-[#00addd]">/ month</span>
      </div>

      {/* description */}
      <p className="text-[0.9rem] text-[#000]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        accusamus quidem, eveniet facere voluptas ipsum! Aperiam cum eaque
        beatae aspernatur!
      </p>

      {/* package details */}
      <div className="flex flex-col gap-3 mt-5 text-[0.9rem] text-[#000]">
        <p className="flex items-center gap-3 text-[#000]">
          <MdOutlineDone className="text-[#00addd]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#000]">
          <MdOutlineDone className="text-[#00addd]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#000]">
          <MdOutlineDone className="text-[#00addd]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#cccccc]">
          <MdOutlineDone className="text-[#cccccc]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#cccccc]">
          <MdOutlineDone className="text-[#cccccc]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#cccccc]">
          <MdOutlineDone className="text-[#cccccc]" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex items-center gap-3 text-[#cccccc]">
          <MdOutlineDone className="text-[#cccccc]" />
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <button className="px-8 py-2 outline-none rounded mt-8 border border-[#091a4f] text-[#091a4f]">
        Choose Plan
      </button>
    </div>
  );
};

export default IntroCard;

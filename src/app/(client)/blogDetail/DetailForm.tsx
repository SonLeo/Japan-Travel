import React from "react";

const DetailForm = () => {
  return (
    <div>
      <span className=" text-[17px] text-[#222] mt-[85px] mb-5">
        Leave a Reply
      </span>
      <div className="p-5 ">
        <form className=" flex flex-col">
          <label className=" text-sm text-[#666]">Name*</label>
          <input
            type="text"
            className=" p-[7px]  rounded-md  w-6/12 mb-5 border focus:outline-none text-[#7a7a7a]"
          />

          <label className=" text-sm text-[#666]">Email*</label>
          <input
            type="email"
            className=" p-[7px]  rounded-md w-6/12  mb-5 border focus:outline-none text-[#7a7a7a]"
          />

          <label className=" text-sm text-[#666]">Website*</label>
          <input
            type="text"
            className=" p-[7px]  rounded-md w-6/12  mb-5 border focus:outline-none text-[#7a7a7a]"
          />
          <label className=" text-sm text-[#666]">Message*</label>
          <textarea
            placeholder="Message"
            className=" p-[7px]  rounded-md w-full mb-5 h-[136px] border focus:outline-none text-[#7a7a7a]"
          />
          <button className="py-2 px-[45px] bg-[var(--secondary-color)] text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailForm;

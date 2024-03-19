"use client";
import React, { useState } from "react";

import Banner from "../components/Banner";
import Image from "next/image";
import styles from "./services.module.css";
import { IoCaretDownOutline } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";

const Services = () => {
  const [icon, setIcon] = useState(false);
  const HandleClick = () => {
    setIcon(!icon);
  };
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <div className=" pb-5">
        {" "}
        <Banner content="Services" />
      </div>
      <div className="pt-[100px] pb-[50px]">
        <div className=" grid grid-cols-1 lg:grid-cols-2  ">
          <div className=" lg:p-5 px-[40px]  lg:flex lg:justify-end lg:items-center ">
            <Image
              height={500}
              width={600}
              className=" rounded-2xl w-full lg:w-[500px] object-cover"
              src="https://i.imgur.com/tXPVRU5.jpg"
              alt=""
            />
          </div>

          <div className="lg:p-5 px-[40px]  lg:max-w-[570px] w-full  ">
            <div className=" py-5">
              <h1 className=" text-[40px] font-bold text-[#333] mb-5 ">
                Web Design
              </h1>
              <span className=" text-[15px] mb-5 block text-[#666] ">
                Of friendship on inhabiting diminution discovered as. Did
                friendly eat breeding building few nor. Object he barton no
                effect played valley afford. Period so to oppose we little
                seeing or branch. Announcing contrasted not imprudence add
                frequently you possession mrs. Period saw his houses.
              </span>
              <span className=" text-[15px] mb-5 block text-[#666]">
                Period so to oppose we little seeing or branch. Announcing
                contrasted not imprudence add frequently you possession mrs.
              </span>
              <div className="text-[25px] font-semibold mb-5">From $150</div>
              <button
                className={` px-8 py-3 rounded border  border-[#FBB801]  ${styles["blog-button"]}`}
              >
                <span> Start a Project</span>
              </button>
            </div>
          </div>
        </div>{" "}
        <div className=" flex flex-col lg:flex-row justify-center items-center mt-8 ">
          <div className="lg:p-5 px-[40px]  lg:max-w-[550px] w-full    ">
            <div className=" ">
              <h1 className=" text-[40px] font-bold text-[#333] mb-5 ">
                Graphic Design
              </h1>
              <span className=" text-[15px] mb-5 block text-[#666] ">
                Of friendship on inhabiting diminution discovered as. Did
                friendly eat breeding building few nor. Object he barton no
                effect played valley afford. Period so to oppose we little
                seeing or branch. Announcing contrasted not imprudence add
                frequently you possession mrs. Period saw his houses.
              </span>
              <span className=" text-[15px] mb-5 block text-[#666]">
                Period so to oppose we little seeing or branch. Announcing
                contrasted not imprudence add frequently you possession mrs.
              </span>
              <div className="text-[25px] font-semibold mb-5">From $250</div>
              <button
                className={` px-8 py-3 rounded border    ${styles["blog-button"]}`}
              >
                <span> Start a Project</span>
              </button>
            </div>
          </div>
          <div className=" lg:p-5 px-[40px]  lg:flex lg:justify-start lg:items-center w-full lg:w-auto  mt-8 lg:mb-0 lg:mt-0  mb-6">
            <Image
              height={500}
              width={600}
              className=" rounded-2xl w-full lg:w-[500px] object-cover"
              src="https://i.imgur.com/A6JV1gT.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2  ">
          <div className=" lg:p-5 px-[40px]  lg:flex lg:justify-end lg:items-center ">
            <Image
              height={500}
              width={600}
              className=" rounded-2xl w-full lg:w-[500px] object-cover"
              src="https://i.imgur.com/rSov3zZ.jpg"
              alt=""
            />
          </div>

          <div className="lg:p-5 px-[40px]  lg:max-w-[570px] w-full   ">
            <div className=" py-5">
              <h1 className=" text-[40px] font-bold text-[#333] mb-5 ">
                Content Creation
              </h1>
              <span className=" text-[15px] mb-5 block text-[#666] ">
                Of friendship on inhabiting diminution discovered as. Did
                friendly eat breeding building few nor. Object he barton no
                effect played valley afford. Period so to oppose we little
                seeing or branch. Announcing contrasted not imprudence add
                frequently you possession mrs. Period saw his houses.
              </span>
              <span className=" text-[15px] mb-5 block text-[#666]">
                Period so to oppose we little seeing or branch. Announcing
                contrasted not imprudence add frequently you possession mrs.
              </span>
              <div className="text-[25px] font-semibold mb-5">From $350</div>
              <button
                className={` px-8 py-3 rounded border  border-[#FBB801]  ${styles["blog-button"]}`}
              >
                <span> Start a Project</span>
              </button>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="banner-question bg-[url('https://i.imgur.com/DUdSjvb.jpg')]">
        <div className=" py-[100px] px-[10px] max-w-[658px] mx-auto ">
          <div className=" text-center">
            <h1 className="text-[50px] font-bold text-white">F.A.Q.</h1>
            <span className=" text-[15px] text-white ">
              Rendered her for put improved concerns his. Ladies bed wisdom
              theirs mrs men months set. Everything so dispatched as it
              increasing pianoforte.
            </span>
          </div>
          <div>
            <button
              className="p-[18px] bg-white flex items-center rounded-xl w-full justify-between"
              onClick={handleToggleContent}
            >
              <span className="text-base block">
                What is paid search management, and why do I need it?
              </span>
              <div className="relative">
                {isContentVisible ? (
                  <span className="absolute -top-2 right-0">
                    <IoCaretUp />
                  </span>
                ) : (
                  <span className="absolute -top-2 right-0">
                    <IoCaretDownOutline />
                  </span>
                )}
              </div>
            </button>
            <div
              className={`p-[25px] text-[15px] bg-[#DFD6CE] mt-2 rounded-xl ${
                isContentVisible ? "visible" : "invisible"
              }`}
            >
              In to am attended desirous raptures declared diverted confined at.
              Collected instantly remaining up certainly to necessary as. Over
              walk dull into son boy door went new. At or happiness commanded
              daughters as. Is handsome an declared at received in extended
              vicinity subjects. Into miss on he over been late pain an.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

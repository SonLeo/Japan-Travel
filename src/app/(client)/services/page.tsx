"use client";
import React, { useState } from "react";

import Image from "next/image";
import styles from "./services.module.css";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Banner from "../components/Banner";

const Services = () => {


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

      <div className="banner-question bg-[url('https://i.imgur.com/DUdSjvb.jpg')] bg-cover bg-center">
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
            <Accordion allowMultiple={false} className=" mt-5">
              <AccordionItem className=" border-none">
                <h2 className=" bg-white rounded-xl ">
                  <AccordionButton >
                    <Box as="span" flex="1" textAlign="left">
                      What is paid search management, and why do I need it?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="bg-[#DFD6CE] p-[25px] text-[15px] mt-[5px] rounded-xl "
                >
                  In to am attended desirous raptures declared diverted confined
                  at. Collected instantly remaining up certainly to necessary
                  as. Over walk dull into son boy door went new. At or happiness
                  commanded daughters as. Is handsome an declared at received in
                  extended vicinity subjects. Into miss on he over been late
                  pain an.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className=" border-none mt-2">
                <h2 className=" bg-white rounded-xl ">
                  <AccordionButton className=" py-3">
                    <Box as="span" flex="1" textAlign="left">
                      How can paid search management benefit my business?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="bg-[#DFD6CE] p-[25px] text-[15px] mt-[5px] rounded-xl"
                >
                  In to am attended desirous raptures declared diverted confined
                  at. Collected instantly remaining up certainly to necessary
                  as. Over walk dull into son boy door went new. At or happiness
                  commanded daughters as. Is handsome an declared at received in
                  extended vicinity subjects. Into miss on he over been late
                  pain an.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className=" border-none mt-2">
                <h2 className=" bg-white rounded-xl ">
                  <AccordionButton className=" py-3">
                    <Box as="span" flex="1" textAlign="left">
                      What platforms do you support for paid search management?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="bg-[#DFD6CE] p-[25px] text-[15px] mt-[5px] rounded-xl"
                >
                  In to am attended desirous raptures declared diverted confined
                  at. Collected instantly remaining up certainly to necessary
                  as. Over walk dull into son boy door went new. At or happiness
                  commanded daughters as. Is handsome an declared at received in
                  extended vicinity subjects. Into miss on he over been late
                  pain an.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className=" border-none mt-2">
                <h2 className=" bg-white rounded-xl ">
                  <AccordionButton className=" py-3">
                    <Box as="span" flex="1" textAlign="left">
                      How do you optimize my paid search campaigns?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="bg-[#DFD6CE] p-[25px] text-[15px] mt-[5px] rounded-xl"
                >
                  In to am attended desirous raptures declared diverted confined
                  at. Collected instantly remaining up certainly to necessary
                  as. Over walk dull into son boy door went new. At or happiness
                  commanded daughters as. Is handsome an declared at received in
                  extended vicinity subjects. Into miss on he over been late
                  pain an.
                </AccordionPanel>
              </AccordionItem>
              
            </Accordion>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

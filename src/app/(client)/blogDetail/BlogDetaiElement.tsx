import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const BlogDetaiElement = () => {
  return (
    <div className=" p-[10px] max-w-[342px] hidden lg:block">
      <div className="  mb-5">
        <span className="text-xl  font-medium text-[#222] pb-2 mb-5 border-b-2 border-[var(--primary-color)] w-full block">
          Company
        </span>
        <span className="mb-[15px] text-[15px] text-[#666666] block">
          From breathtaking landscapes to the smallest creatures, we celebrate
          the diversity and magnificence of our planet. Through our carefully
          curated content, we aim to educate.
        </span>
      </div>
      <div>
        <span className="text-xl  font-medium text-[#222] pb-2 mb-5 border-b-2 border-[var(--primary-color)] w-full block">
          Features
        </span>
        <div className=" mb-5">
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Interactive Maps
            </span>
          </div>
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Nature Photography
            </span>
          </div>
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Educational Articles
            </span>
          </div>
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Seasonal Guides
            </span>
          </div>
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Nature Events Calendar
            </span>
          </div>
          <div className=" flex  pb-[15px] w-full border-b items-center">
            <span className=" text-[var(--primary-color)]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className=" hover:text-[var(--primary-color)] text-sm pl-2">
              Travel Itineraries
            </span>
          </div>
        </div>
        <div className="mb-5">
          <span className="text-xl  font-medium text-[#222] pb-2 mb-5 border-b-2 border-[var(--primary-color)] w-full block">
            Most Recent Posts
          </span>
          <div className="  mb-10  relative">
            <div className="  absolute top-0 left-0 ">
              <Link href={"#"}>
                {" "}
                <Image
                  width={96}
                  height={64}
                  src={"https://i.imgur.com/XWZ09kQ.jpg"}
                  alt=""
                  className=" rounded-lg"
                />
              </Link>
            </div>
            <Link href={""}>
              <span className=" text-[15px] text-[#333] pl-[115px]  block">
                Nurturing the Bond Between Humans and Nature
              </span>
            </Link>
          </div>
          <div className=" mb-10 relative">
            <div className="  absolute top-0 left-0 ">
              <Link href={"#"}>
                {" "}
                <Image
                  width={96}
                  height={64}
                  src={"https://i.imgur.com/1HR6Vv8.jpg"}
                  alt=""
                  className=" rounded-lg"
                />
              </Link>
            </div>
            <Link href={""}>
              <span className=" text-[15px] text-[#333] pl-[115px]  block">
                Into the Wild: Adventures in the Heart of Nature
              </span>
            </Link>
          </div>
          <div className="  mb-10  relative">
            <div className="  absolute top-0 left-0 ">
              <Link href={"#"}>
                <Image
                  width={96}
                  height={64}
                  src={"https://i.imgur.com/EAYdcHF.jpg"}
                  alt=""
                  className=" rounded-lg"
                />
              </Link>
            </div>
            <Link href={""}>
              <span className=" text-[15px] text-[#333] pl-[115px]  block">
                Connecting with Nature’s Tranquil Essence
              </span>
            </Link>
          </div>
        </div>
        <div>
          <span className="text-xl  font-medium text-[#222] pb-2 mb-5 border-b-2 border-[var(--primary-color)] w-full block ">
            Category
          </span>
          <div className=" text-xs flex flex-wrap gap-4 text-[#666] items-center" >
            <Link href={"#"}>
              <span className=" px-[10px] py-[5px] border rounded-md hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]  ">
                Content Creation
              </span>
            </Link>
            <Link href={"#"}>
              <span className=" px-[10px] py-[5px] border rounded-md hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] ">
                {" "}
                Graphic Design
              </span>
            </Link>
            <Link href={"#"}>
              <span className=" px-[10px] py-[5px] border rounded-md hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] ">
                SEO
              </span>
            </Link>
            <Link href={"#"}>
              <span className=" px-[10px] py-[5px] border rounded-md hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]  ">
                Web Design
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetaiElement;

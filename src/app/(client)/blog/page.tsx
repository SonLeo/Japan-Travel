import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="">
      <div>
        <Banner content="Blog" />
      </div>

      <div className=" my-[100px]  block">
        <div className=" mb-6 ">
          <ul className=" text-[13px] text-[#7A7A7A] flex items-center justify-center ">
            <li className=" py-[3px] px-[15px] hover:bg-[var(--primary-color)] hover:text-white">
              All Posts
            </li>
            <li className=" py-[3px] px-[15px] hover:bg-[var(--primary-color)] hover:text-white ">
              Content Creation
            </li>
            <li className=" py-[3px] px-[15px] hover:bg-[var(--primary-color)] hover:text-white">
              Graphic Design
            </li>
            <li className=" py-[3px] px-[15px] hover:bg-[var(--primary-color)] hover:text-white">
              SEO
            </li>
            <li className=" py-[3px] px-[15px] hover:bg-[var(--primary-color)] hover:text-white">
              Web Design
            </li>
          </ul>
        </div>
        <div className="max-w-[1400px]   md:mx-auto px-5 md:px-0 md:flex items-center justify-center flex-wrap xl:gap-8 gap-4 ">
          <div className=" w-full md:w-[353px] mt-5 md:mt-0">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/XWZ09kQ.jpg"}
                  alt=""
                  className=" rounded-xl w-full"
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                  Nurturing the Bond Between Humans and Nature
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>2 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div>
          <div className="  w-full md:w-[353px] mt-5 md:mt-0">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/1HR6Vv8.jpg"}
                  alt=""
                  className=" rounded-xl w-full"
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                  Into the Wild: Adventures in the Heart of Nature
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>1 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div>{" "}
          <div className="  w-full md:w-[353px] mt-5 md:mt-0">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/EAYdcHF.jpg"}
                  alt=""
                  className=" rounded-xl w-full "
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                  Connecting with Nature’s Tranquil Essence
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>4 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div>

          <div className="  w-full md:w-[353px] mt-5 md:mt-0">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/R61KHTK.jpg"}
                  alt=""
                  className=" rounded-xl  w-full"
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                A Journey Through Earth’s Natural Splendor
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>3 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div>
          <div className="  w-full md:w-[353px] mt-5 md:mt-0 ">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/oNMlxho.jpg"}
                  alt=""
                  className=" rounded-xl w-full"
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                Exploring the Beauty of Mother Nature
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>2 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div> <div className="  w-full md:w-[353px] mt-5 md:mt-0">
            <Link href={"#"}>
              <div className=" ">
                <Image
                  width={353}
                  height={300}
                  src={"https://i.imgur.com/OPvrDYl.jpg"}
                  alt=""
                  className=" rounded-xl w-full"
                />
              </div>
            </Link>

            <div className=" pt-[10px]">
              <Link href={"#"}>
                <h1 className=" text-[21px] font-semibold pb-[10px]">
                Connecting with Nature’s Tranquil Essence
                </h1>
              </Link>

              <div className=" text-xs text-[#AAA] flex items-center pb-[10px]">
                <span>August 21, 2023</span>
                <p className=" px-1">/</p>
                <span>4 Comments</span>
              </div>
              <span className=" text-sm   h-[75px] leading-6 line-clamp-3  overflow-hidden ">
                Did shy say mention enabled through elderly improve. As at so
                believe account evening behaved hearted is. House is tiled we
                aware. It ye greatest removing…
              </span>
              <Link href={"#"}>
                {" "}
                <p className=" text-[13px] text-[var(--primary-color)]">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

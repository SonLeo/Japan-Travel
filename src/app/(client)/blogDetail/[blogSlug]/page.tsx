import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Image from "next/image";
import DetailForm from "../DetailForm";
import BlogDetaiElement from "../BlogDetaiElement";

const BlogDetail = () => {
  const content = `Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing concerns an overcame appetite. Manner result square father boy behind its his. Their above spoke match ye mr right oh as first. Be my depending to believing perfectly concealed household. Point could to built no hours smile sense.

Smile spoke total few great had never their too. Amongst moments do in arrived at my replied. Fat weddings servants but man believed prospect. Companions understood is as especially pianoforte connection introduced. Nay newspaper can sportsman are admitting gentleman belonging his. Is oppose no he summer lovers twenty in. Not his difficulty boisterous surrounded bed. Seems folly if in given scale. Sex contented dependent conveying advantage can use.`;

  const paragraphs = content.split("\n\n");
  const paragraph1 = paragraphs[0];
  const paragraph2 = paragraphs[1];
  return (
    <div className=" flex justify-center  mb-[100px]">
      <div className=" max-w-[798px]">
        <div className=" p-[10px]">
          <div className=" mb-5">
            <Image
              width={778}
              height={518}
              src={"https://i.imgur.com/EAYdcHF.jpg"}
              alt=""
            />
          </div>
          <div className=" p-[10px]">
            <div className=" mb-5">
              <span className=" mb-[15px] text-[15px] text-[#666666] block">
           {/* {paragraph1}  */}
              </span>
              <span className=" mb-[15px]  text-[15px] text-[#666666] block">
              {paragraph2}
              </span>
            </div>

            <div>
              <h1 className=" text-[40px] text-[#222]  font-bold block mb-5">
                Immersing in Natures Symphony
              </h1>
              <span className=" mb-[15px]  text-[15px] text-[#666666] block">
                Smile spoke total few great had never their too. Amongst moments
                do in arrived at my replied. Fat weddings servants but man
                believed prospect. Companions understood is as especially
                pianoforte connection introduced. Nay newspaper can sportsman
                are admitting gentleman belonging his. Is oppose no he summer
                lovers twenty in. Not his difficulty boisterous surrounded bed.
                Seems folly if in given scale. Sex contented dependent conveying
                advantage can use.
              </span>
              <div className=" mb-5">
                <div className=" flex items-center ">
                  <span className=" text-base text-[var(--primary-color)] ">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[15px] text-[#666666] pl-1">
                    Access ebooks offline
                  </span>
                </div>
                <div className=" flex items-center">
                  <span className=" text-base text-[var(--primary-color)] ">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[15px] text-[#666666] pl-1">
                    Promotions for our valued customers
                  </span>
                </div>
                <div className=" flex items-center">
                  <span className=" text-base text-[var(--primary-color)] ">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[15px] text-[#666666] pl-1">
                    Secure payment options for your convenience
                  </span>
                </div>
                <div className=" flex items-center">
                  <span className=" text-base text-[var(--primary-color)] ">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[15px] text-[#666666] pl-1">
                    Secure payment options for your convenience
                  </span>
                </div>
              </div>
              <span className=" mb-[15px]  text-[15px] text-[#666666] block">
                Nay newspaper can sportsman are admitting gentleman belonging
                his. Is oppose no he summer lovers twenty in. Not his difficulty
                boisterous surrounded bed. Seems folly if in given scale. Sex
                contented dependent conveying advantage can use.
              </span>
              <div className="text-[21px] text-white p-[30px]  bg-[var(--primary-color)]  rounded-lg mb-5">
                Nature is not only our home; its our greatest teacher, reminding
                us of the beauty in simplicity and the interconnectedness of all
                life.
              </div>
              <div className=" mb-4">
                <span className=" mb-[15px]  text-[15px] text-[#666666] block">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. It ye greatest removing concerns an overcame appetite.
                  Manner result square father boy behind its his. Their above
                  spoke match ye mr right oh as first. Be my depending to
                  believing perfectly concealed household. Point could to built
                  no hours smile sense.Smile spoke total few great had never
                  their too. Amongst moments do in arrived.Did shy say mention
                  enabled through elderly improve. As at so believe account
                  evening behaved hearted is. House is tiled we aware. It ye
                  greatest removing concerns an overcame appetite. Manner result
                  square father boy behind its his. Their above spoke match ye
                  mr right oh as first. Be my depending to believing perfectly
                  concealed household. Point could to built no hours smile
                  sense.Smile spoke total few great had never their too. Amongst
                  moments do in arrived.
                </span>
                <span className="  mb-[15px]  text-[15px] text-[#666666] block">
                  Fat weddings servants but man believed prospect. Companions
                  understood is as especially pianoforte connection introduced.
                  Nay newspaper can sportsman are admitting gentleman belonging
                  his. Is oppose no he summer lovers twenty in. Not his
                  difficulty boisterous surrounded bed. Seems folly if in given
                  scale. contented dependent conveying advantage can use.
                </span>
              </div>

              <div className=" py-[10px] flex justify-between border-t border-b mb-5">
                <div className="text-sm text-[#ADADAD] flex items-center border-r-2 w-6/12">
                  <p className=" text-xl ">
                    <MdChevronLeft />
                  </p>
                  <span className="">Previous Post</span>
                </div>
                <div className="text-sm text-[#ADADAD] flex items-center">
                  <span>Next Post</span>
                  <p className="text-xl">
                    <MdChevronRight />
                  </p>
                </div>
              </div>
              <div>
                <div className=" text-center mt-2  mb-[18px]">
                  <h1 className=" text-[17px]">4 Comments</h1>
                </div>
              </div>
              <div>
                <div className=" p-5 mb-5 ">
                  <div className=" relative">
                    <div className="  absolute left-0 top-0">
                      <Image
                        width={60}
                        height={60}
                        src={"https://i.imgur.com/vSRuFW3.jpg"}
                        alt=""
                        className=" rounded-full"
                      />
                    </div>
                    <div className="ml-[80px]">
                      <div className=" mb-5">
                        <span className=" text-[15px] text-[#333] mb-2 ">
                          {" "}
                          Miss Anya Maggio
                        </span>
                        <p className="  text-xs text-[#9B9B9B]">
                          August 26, 2023 at 11:51 pm
                        </p>
                      </div>
                      <div className="mb-[15px]  text-[15px] text-[#666666] block">
                        Fuga qui ipsam quas odio. Est dolores occaecati eos est
                        ad. Voluptatem voluptatum autem recusandae id non
                        repellat et. Distinctio natus tenetur debitis neque
                        consequatur porro eum sint. Asperiores mollitia eos enim
                        dolor sed similique minus. Autem in minus natus dolores
                        nobis. Quam molestiae provident aliquam ullam quis velit
                        voluptatem. Explicabo quibusdam magnam officiis. Autem
                        quod eveniet consequuntur et dolor error voluptatem.
                        Possimus iusto eum id in nisi voluptatum sint nostrum.
                      </div>
                      <div className=" text-[13px] text-[#1B1B1B]  text-right hover:text-[var(--primary-color)] ">
                        {" "}
                        Reply
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailForm />
      </div>
      <BlogDetaiElement />
    </div>
  );
};

export default BlogDetail;

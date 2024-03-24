"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "~/components/client-components/Banner";

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: ["Content Creation", "SEO"],
      imageUrl: "https://i.imgur.com/XWZ09kQ.jpg",
      title: "Nurturing the Bond Between Humans and Nature",
      date: "August 21, 2023",
      comments: 2,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
    {
      id: 2,
      category: ["Graphic Design", "Web Design"],
      imageUrl: "https://i.imgur.com/1HR6Vv8.jpg",
      title: "Into the Wild: Adventures in the Heart of Nature",
      date: "August 21, 2023",
      comments: 1,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
    {
      id: 3,
      category: ["Content Creation", "SEO"],
      imageUrl: "https://i.imgur.com/EAYdcHF.jpg",
      title: "Connecting with Nature’s Tranquil Essence",
      date: "August 21, 2023",
      comments: 4,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
    {
      id: 4,
      category: ["Graphic Design", "Web Design"],
      imageUrl: "https://i.imgur.com/R61KHTK.jpg",
      title: "A Journey Through Earth’s Natural Splendor",
      date: "August 21, 2023",
      comments: 3,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
    {
      id: 5,
      category: ["Content Creation", "SEO"],
      imageUrl: "https://i.imgur.com/oNMlxho.jpg",
      title: "Exploring the Beauty of Mother Nature",
      date: "August 21, 2023",
      comments: 2,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
    {
      id: 6,
      category: ["Graphic Design", "Web Design"],
      imageUrl: "https://i.imgur.com/OPvrDYl.jpg",
      title: "Embracing the Wonders of the Natural World",
      date: "August 21, 2023",
      comments: 4,
      content:
        "Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing…",
      link: "#",
    },
  ];

  const [filter, setFilter] = useState("All");

  return (
    <div className="">
      <div>
        <Banner content="Blog" />
      </div>

      <div className="my-[100px] block">
        <div className="mb-6 ">
          <ul className="text-sm text-[#7A7A7A] flex items-center justify-center">
            {["All", "Content Creation", "Graphic Design", "SEO", "Web Design"].map(category => (
              <li
                key={category}
                className={`py-1 px-4 hover:bg-[var(--primary-color)] hover:text-white rounded ${
                  filter === category && "bg-[var(--primary-color)] text-white"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[1400px] md:mx-auto px-5 md:px-0 md:flex items-center justify-center flex-wrap xl:gap-8 gap-4 ">
          {posts
            .filter(post => filter === "All" || post.category.includes(filter))
            .map(post => (
              <div key={post.id} className="w-full md:w-[353px] mt-5 md:mt-0">
                <Link href={post.link}>
                  <div>
                    <Image
                      width={353}
                      height={300}
                      src={post.imageUrl}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                </Link>

                <div className="pt-[10px]">
                  <Link href={post.link}>
                    <h1 className="text-[21px] font-semibold pb-[10px]">{post.title}</h1>
                  </Link>

                  <div className="text-xs text-[#AAA] flex items-center pb-[10px]">
                    <span>{post.date}</span>
                    <p className="px-1">/</p>
                    <span>{post.comments} Comments</span>
                  </div>
                  <span className="text-sm h-[75px] leading-6 line-clamp-3 overflow-hidden ">
                    {post.content}
                  </span>
                  <Link href={post.link}>
                    <p className="text-[13px] text-[var(--primary-color)]">Read More</p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

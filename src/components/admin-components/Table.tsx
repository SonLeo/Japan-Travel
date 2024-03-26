import Image from "next/image";
import { Post } from "~/types/post";
import { formatDate } from "~/utils/commonUtils"

const postData: Post[] = [
  {
    image: "https://i.imgur.com/wKaBTDg.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    views: 296,
    comment: 22,
    share: 45,
    rate: 5,
    created: new Date('2023-01-01T00:00:00Z')
  },
  {
    image: "https://i.imgur.com/R5zwBXB.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    views: 546,
    comment: 12,
    share: 125,
    rate: 5,
    created: new Date('2023-01-01T00:00:00Z')
  },
  {
    image: "https://i.imgur.com/wO37ZQ4.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    views: 443,
    comment: 64,
    share: 247,
    rate: 5,
    created: new Date('2023-01-01T00:00:00Z')
  },
  {
    image: "https://i.imgur.com/qG0xv1J.png",
    name: "HP Probook 450",
    category: "Electronics",
    views: 499,
    comment: 72,
    share: 103,
    rate: 5,
    created: new Date('2023-01-01T00:00:00Z')
  },
  {
    image: "https://i.imgur.com/qG0xv1J.png",
    name: "HP Probook 450",
    category: "Electronics",
    views: 499,
    comment: 72,
    share: 103,
    rate: 5,
    created: new Date('2023-01-01T00:00:00Z')
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold">Top Posts</h4>
      </div>

      <div className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Post Name</p>
        </div>
        <div className="col-span-2 hidden items-center justify-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Views</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Comments</p>
        </div>
        <div className="col-span-1 hidden sm:flex items-center justify-center">
          <p className="font-medium">Share</p>
        </div>
      </div>

      {postData.map((post, key) => (
        <div
          className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image src={post.image} width={60} height={50} alt="Post" />
              </div>
              <div className="text-sm text-black dark:text-white">
                <p>{post.name}</p>
                <p className="text-zinc-500">Created: {formatDate(post.created)}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden items-center justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {post.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">${post.views}</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">{post.comment}</p>
          </div>
          <div className="col-span-1 hidden sm:flex items-center justify-center">
            <p className="text-sm text-meta-3">${post.share}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableOne;

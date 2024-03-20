import React from "react";

import BlogDetaiElement from "./BlogDetaiElement";
import BlogElementor from "./BlogElementor";
const BlogDetail = () => {
  return (
    <div className=" flex justify-center  mb-[100px]">
      <BlogElementor />
      <BlogDetaiElement />
    </div>
  );
};

export default BlogDetail;

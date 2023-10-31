import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../assets/gitbook.svg";

const BlogCardWithImage = ({ article }) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">
      <Link href="#">
        <div className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
          {article.attributes.title}
        </div>
      </Link>
      <Image alt="" src={img} width={140} height={140} />
    </div>
  );
};

export default BlogCardWithImage;

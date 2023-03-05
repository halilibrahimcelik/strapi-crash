import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
const ReviewItem = (props) => {
  const { title, rating, body } = props.attributes;
  return (
    <div className="max-w-[100%]  relative  md:w-[30rem] flex flex-col justify-between border rounded-lg p-2 bg-pink-200 bg-opacity-20">
      <span className="rating-val absolute top-[-20px] p-5 bg-red-600 rounded-full flex justify-center items-center text-white font-bold w-[30px] h-[30px] left-[-20px]">
        <span> {rating}</span>
      </span>
      <div>
        <h2 className="text-2xl text-center">{title} </h2>
      </div>
      <div className="body">
        <ReactMarkdown>{body.substring(0, 200) + "..."}</ReactMarkdown>
      </div>
      <Link
        to={`/details/${props.id}`}
        className="py-2 px-10 mt-5 block text-center border border-solid border-[#333] rounded-lg bg-red-600 text-white"
      >
        Read More
      </Link>
    </div>
  );
};

export default ReviewItem;

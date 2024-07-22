import "./blogpost.css";
import Readmore from "../componants/readMore";
import { useState } from "react";

const BlogPost = ({photo, post_titel,tech, name, date, desc}) => {
  return (
    <div className="blog-post">
      <div className="blog-image">{photo}</div>
      <div className="blog-details">
        <h1 className="blog-title">{post_titel}</h1>
        <p className="blog-meta">{date} by {name}</p>
        <div className="blog-tags">
          <span>{tech[0]}</span>
          <span>{tech[1]}</span>
          <span>{tech[2]}</span>
        </div>
        {/* <div className="blog-content">
        </div> */}
        <Readmore text={desc} />
      </div>
    </div>
  );
};

export default BlogPost;

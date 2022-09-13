import React from "react";
import img from "./NAimg.png";

const NewsItems = ({
  title,
  description,
  image,
  url,
  date,
  Author,
  // source,
}) => {
  return (
    <>
      <div className="news-item " key={url}>
        {/* <div className="source">{source}</div> */}
        <img className="news-img" src={image ? image : img} alt="news" />
        <h4 className="title">{title ? title : ""}</h4>
        <p className="description">
          {description ? description.slice(0, 110) : ""}...
          <a href={url} target="_blank" rel="noopener noreferrer">
            {" "}
            <input value="Read More" type="button" className="btn"></input>
          </a>
        </p>

        <p>
          Published at -{" "}
          <span style={{ fontWeight: 700 }}>
            {new Date(date).toGMTString().slice(0, 22)}
          </span>{" "}
          By{" "}
          <span style={{ fontWeight: 700 }}>
            {Author ? Author : "Unknown Person"}{" "}
          </span>
        </p>
      </div>
    </>
  );
};

export default NewsItems;

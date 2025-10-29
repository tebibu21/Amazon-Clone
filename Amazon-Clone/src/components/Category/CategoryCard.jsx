import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;

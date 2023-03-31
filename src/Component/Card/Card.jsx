import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { user, user_img, date, time, title, banner } = data;
  return (
    <div className="single-card-container">
      <div>
        <img src={banner} alt="card img" />
      </div>
      <div className="card-info">
        <div className="user-info">
          <div className="user">
            <div>
              <img src={user_img} alt="user img" />
            </div>
            <div>
              <h3>{user}</h3>
              <p>{date}</p>
            </div>
          </div>
          <div className="time">
            <p>{time} min read</p>
          </div>
        </div>
        <h2>{title}</h2>
      </div>
      <hr />
    </div>
  );
};

export default Card;

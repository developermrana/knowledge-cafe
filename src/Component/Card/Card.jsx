import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { user, user_img, date, time, title, banner, id } = props.data;
  const addTitle = props.cardTitle;
  const addTime = props.addTime;
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
            <p>
              {time} min read
              <span onClick={() => addTitle(title, id)}>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </p>
          </div>
        </div>
        <h2>{title}</h2>
      </div>
      <button onClick={() => addTime(time)}>Make As Read</button>
      <hr />
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [datas, setDatas] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [times, setTimes] = useState(0);

  useEffect(() => {
    fetch("Fakedata.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  // add time event handler start
  const addTime = (time) => {
    let totalTime = 0;
    const localStor = localStorage.getItem("cardTime");
    if (localStor) {
      let previousTime = JSON.parse(localStor);
      totalTime = previousTime + time;
    } else {
      totalTime = time;
    }
    localStorage.setItem("cardTime", JSON.stringify(totalTime));
    setTimes(totalTime);
  };
  // add time event handler end

  const addTitle = (cardTitle, id) => {
    let shoppingCard;

    const localStor = localStorage.getItem("cardTitle");

    if (localStor) {
      let parseStor = JSON.parse(localStor);
      const filterTitle = parseStor.find((title) => title === cardTitle);

      if (filterTitle) {
        return toast("This cart already added");
      } else {
        shoppingCard = [...parseStor, cardTitle];
        localStorage.setItem("cardTitle", JSON.stringify(shoppingCard));
        setCardData(shoppingCard);
      }
    } else {
      shoppingCard = [cardTitle];
      localStorage.setItem("cardTitle", JSON.stringify(shoppingCard));
      setCardData(shoppingCard);
    }
  };

  return (
    <div className="card-container">
      <ToastContainer></ToastContainer>
      <div className="all-card">
        {datas.map((data) => (
          <Card
            data={data}
            key={data.id}
            cardTitle={addTitle}
            addTime={addTime}
          ></Card>
        ))}
      </div>
      <div className="card-aside">
        <div className="add-time">
          <h3>
            Spent time on read: <span>{times}</span> min
          </h3>
        </div>
        <div className="bookmark">
          <h2>Bookmark items: {cardData.length}</h2>
        </div>
        <div className="add-card">
          {cardData.map((cardTitle) => (
            <h2>{cardTitle}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("Fakedata.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="card-container">
      <div className="all-card">
        {datas.map((data) => (
          <Card data={data} key={data.id}></Card>
        ))}
      </div>
      <div className="card-aside">aside</div>
    </div>
  );
};

export default Cards;

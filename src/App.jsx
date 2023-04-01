import React from "react";
import "./App.css";
import Header from "./Component/Header/header";
import Cards from "./Component/Cards/Cards";
import Faqanswer from "./Component/Faqanswer/Faqanswer";

const App = () => {
  return (
    <div>
      <Header />
      <Cards></Cards>
      <Faqanswer />
    </div>
  );
};

export default App;

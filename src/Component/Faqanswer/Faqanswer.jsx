import React from "react";
import "./Faqanswer.css";

const Faqanswer = () => {
  return (
    <div className="faq-container">
      <div className="single-ques">
        <h3>What is the difference props and state?</h3>
        <p>
          ans: While both hold information that influences the output of render,
          they are different in one important way: props get passed to the
          component (similar to function parameters) whereas state is managed
          within the component
        </p>
      </div>
      <div className="single-ques">
        <h3>How does work useState?</h3>
        <p>
          ans: Every time your component renders, useState gives you an array
          containing two values: The state variable (counter) with the value you
          stored. The state setter function (setCounter) which can update the
          state variable and trigger React to render the component again.
        </p>
      </div>
      <div className="single-ques">
        <h3>How mani work useEffect?</h3>
        <p>
          ans: What does useEffect do? By using this Hook, you tell React that
          your component needs to do something after render. React will remember
          the function you passed , and call it later after performing the DOM
          updates
        </p>
      </div>
      <div className="single-ques">
        <h3>How dose react work?</h3>
        <p>
          ans: ReactJS always has one-way data flow. That means, when a React
          app is designed, the connection between the parent and child
          components needs to be created. By doing this, various errors can be
          debugged very easily. And if a bug is found, it can be fixed quickly.
        </p>
      </div>
    </div>
  );
};

export default Faqanswer;

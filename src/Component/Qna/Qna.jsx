import React from "react";
import "./Qna.css";

const Qna = () => {
  return (
      <>
      <div className="qna-container">
        <h1>1.Difference between props and state?</h1>
        <p>
          Difference between props and state are:Props are read only.on the
          other hand,sate can be asynchronous..props are immutable and state is
          mutable..props are used for passing data from one component to another
          and state holds information about the component..child component can
          access props but cannot access state..
        </p>
      </div>
      <div className="qna-container">
        <h1>2.How does useState works? </h1>
        <p>
          useState is a react hook that allows us to add state to a functional
          component..every time a component renders,useState gives an array with
          two values:The state variable with the value you stored. The state
          setter function which can update the state variable and trigger React
          to render the component again.
        </p>
      </div>
      <div className="qna-container">
        <h1>3.Purpose of useEffect other than fetching data?</h1>
              <p>
                  useEffect can be used in many things other than fetching data.such as:Updating the state of other components,Setting up event listeners,validating input field,live filtering,trigger animation on new array value and many more.
        </p>
      </div>
      <div className="qna-container">
        <h1>4.How Does React work?</h1>
        <p>
          react contains a collection of JS code which used for user interface (UI) building called components and create ReactDOM.if there is any changes on the component,react compare the previous ReactDOM with the new ReactDOM to identify the changes.and then instead of updating the whole DOM,react only updates the components that changed..
        </p>
      </div>
    </>
  );
};

export default Qna;

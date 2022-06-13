import React from "react";
import { useHistory } from "react-router-dom";
import MyNameComponent from "./MyNameComponent";
import IncrementComponent from "./IncrementComponent";

export default function FirstPage() {
  const history = useHistory();

  function handleBackToHome() {
    history.push("/");
  }

  return (
    <div>
      <div className={"title"}>First Page</div>
      <button onClick={handleBackToHome}>Go to Home page</button>
      <MyNameComponent action={() => console.log("From first page")} />
      <div className={"content"}>
        <span>My name is </span>
        <span className="bold-text">Sotiris</span>
      </div>
      <IncrementComponent initialNumber={5} incrementBy={5} />
    </div>
  );
}

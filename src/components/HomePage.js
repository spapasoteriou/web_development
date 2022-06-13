import React from "react";
import { useHistory } from "react-router-dom";
import MyNameComponent from "./MyNameComponent";
import IncrementComponent from "./IncrementComponent";

export default function HomePage() {
  const history = useHistory();

  return (
    <div>
      <div className={"title"}>Home Page</div>
      <button onClick={() => history.push("/first-page")}>
        Go to First page
      </button>
      <button onClick={() => history.push("/second-page")}>
        Go to Second page
      </button>
      <MyNameComponent
        name={"Dionysis"}
        action={() => console.log("From Home page")}
      />
      <IncrementComponent />
    </div>
  );
}

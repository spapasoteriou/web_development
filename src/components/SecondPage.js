import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SecondPage() {
  const history = useHistory();

  const [isShowMessage, setIsShowMessage] = useState(false);

  function handleBackToHome() {
    history.push("/");
  }

  return (
    <div>
      <div className={"title"}>Second Page</div>
      <button onClick={handleBackToHome}>Go to Home page</button>
      <div
        style={{
          marginTop: 20,
          padding: 50,
          border: "1px solid black",
          width: "fit-content",
        }}
        onMouseEnter={() => setIsShowMessage(true)}
        onMouseLeave={() => setIsShowMessage(false)}
      >
        Show message
      </div>
      {isShowMessage && (
        <div
          style={{
            padding: 5,
            marginTop: "20px",
            border: "1px solid orange",
            width: "fit-content",
          }}
        >
          We are awesome
        </div>
      )}
    </div>
  );
}

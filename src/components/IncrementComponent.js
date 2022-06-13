import React, { useEffect, useState } from "react";

export default function IncrementComponent({
  initialNumber = 0,
  incrementBy = 1,
}) {
  const [number, setNumber] = useState(initialNumber);
  const [isShowMessage, setIsShowMessage] = useState(false);

  useEffect(() => {
    if (number > 50) {
      setIsShowMessage(true);
    } else {
      setIsShowMessage(false);
    }
  }, [number]);

  function handleIncrementClick() {
    setNumber(number + incrementBy);
  }

  function handleDecrementClick() {
    setNumber(number - incrementBy);
  }

  const messageText =
    number > 20 ? "Is greater than 20" : "Is less than or equal to 20";

  return (
    <div className={"increment-component"}>
      <div>
        <span>The number is: </span>
        <span>{number}</span>
      </div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      {number === initialNumber ? (
        <div className="message">Number = initial number</div>
      ) : (
        <div className="message">{messageText}</div>
      )}
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

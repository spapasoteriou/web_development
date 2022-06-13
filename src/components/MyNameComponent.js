import React from "react";

export default function MyNameComponent({ name = "Sotiris", action }) {
  return (
    <div>
      <div>My name is {name}</div>
      <button onClick={action}>Click me!</button>
    </div>
  );
}

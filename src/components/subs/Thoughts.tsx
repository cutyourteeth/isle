import React from "react";

const thoughtsList = [
  { text: "keep myself as an independent one" },
  { text: "coding is an implement of art " },
  { text: "Good habits serve everyone" }
];

export const Thoughts = () => {
  return (
    <div>
      <div>representing saytote - chat to note</div>
      {thoughtsList.map((item, index) => (
        <div style={{padding: "1rem 2rem"}} key={index}>
          {index + 1}. {item.text}
        </div>
      ))}
    </div>
  );
};

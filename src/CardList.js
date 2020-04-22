import React from "react";
import Card from "./Card";

const cardList = (props) => {
  const { robots } = props;

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].name}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default cardList;

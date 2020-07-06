import React from "react";
import Card from "./card";

const Cards = (props) => {
  return props.questions.map((q) => (
    <Card key={q.id} question={q} onUpdate={props.onUpdate} />
  ));
};

export default Cards;

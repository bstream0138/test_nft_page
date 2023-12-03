import React from "react";
import DataCard from "./DataCard";
import DateData from "../date.json";

const ToDo = () => {
  return (
    <ul className="grid grid-cols-7 gap-4">
      {DateData.map((v, i) => <DataCard key={i} date={v.date} todos={v.todos} />)}
    </ul>
  );
};

export default ToDo;

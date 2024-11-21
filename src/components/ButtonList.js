import React from "react";
import Button from "./Button";
import {list} from '../utils/listOfButtons'

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item}></Button>
      ))}
    </div>
  );
};

export default ButtonList;

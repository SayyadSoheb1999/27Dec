import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
export const List = ({ item }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="listD">
        <p>{item.name}</p>
        <p>{item.slug}</p>
        <p style={{ marginRight: "100px" }}>{item.start}</p>
        <p>{item.photo}</p>
      </div>
      <div className="iconDiv">
        <Button>De-activate</Button>
        <BsFillPenFill />
        <AiFillFile />
        <MdDelete />
      </div>
    </div>
  );
};

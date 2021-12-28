import React, { useState, useEffect } from "react";
import { List } from "./List";
import "../App.css";
import { useSelector } from "react-redux";
export const ListCompo = () => {
  const [data, setData] = useState([]);
  const selector = useSelector((state) => state.ProductReducer.products);
  useEffect(() => {
    console.log("selector data: ", selector);
    setData(selector);
  }, [selector]);
  return (
    <div>
      <div className="eventd1">
        <div
          style={{
            borderBottom: "1px solid black",
            paddingBottom: "20px",
          }}
        >
          <input type="search" />
        </div>
        <div
          className="listT"
          style={{
            display: "flex",

            marginTop: "5px",
          }}
        >
          <p>Name</p>
          <p>Slug</p>
          <p>Event Start Date</p>
          <p>Photos</p>
        </div>
        <div>
          {data &&
            data.map((item) => {
              return <List item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

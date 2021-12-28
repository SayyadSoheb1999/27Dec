import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export const EventsPage = () => {
  return (
    <div>
      <h1 style={{ display: "inline-block" }}>Events</h1>
      <Link style={{ float: "right" }} to={"/virtual"}>
        <Button> New Event</Button>
      </Link>
      <div className="eventd1">
        <div
          style={{
            borderBottom: "1px solid black",
            paddingBottom: "20px",
          }}
        >
          Activity
        </div>

        <div className="eventd2">
          <div>
            <BsFillCalendarEventFill size={"30px"} />
            <span>
              <h5>3</h5>
              <h5>Event Created</h5>
            </span>
          </div>
          <div>
            <AiFillCamera size={"30px"} />
            <span>
              <h5>18</h5>
              <h5>Photo Captured</h5>
            </span>
          </div>
          <div style={{ borderLeft: "1px solid black" }}>
            <FaShareAlt className="p-3" size={"30px"} />
            <span>
              <h5>-</h5>
              <h5>Shareo Collected</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

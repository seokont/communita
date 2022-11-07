import React, { useEffect, useState } from "react";
import { Whisper } from "rsuite";
import Popover from "rsuite/Popover";
import Calendar from "rsuite/Calendar";
import Badge from "rsuite/Badge";
import * as dateFns from "date-fns";
import "rsuite/dist/rsuite.css";
import { borderRadius } from "@mui/system";
const MyCalendar = () => {
  const getTodoList = (date) => {
    let i = new Date();
    const day = dateFns.getDate(date);
    const month = dateFns.getMonth(date);

    switch (`${day}.${month + 1}`) {
      case "3.9":
        return [{ title: "Женя" }];
      case "22.8":
        return [{ title: "Максим" }];
      case "26.8":
        return [{ title: "Юра" }];
      case "31.8":
        return [{ title: "Вова" }];

      case "7.9":
        return [{ title: "Юра" }];
      case "10.9":
        return [{ title: "Максим" }];
      case "19.10":
        return [{ title: "Женя" }];
      case "22.10":
        return [{ title: "Вова" }];

      case "21.9":
        return [{ title: "Максим" }];

      case "24.9":
        return [{ title: "Юра" }];
      default:
        return [];
    }
  };
  const renderCell = (date) => {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} Більше</a>
          </Whisper>
        </li>
      );

      const hightom = (title) => {
        if (title === "Женя") {
          return displayList.map((item, index) => (
            <div
              style={{
                backgroundColor: "green",
                width: "40px",
                height: "40px",
                borderRadius: "50px",
                top: "30px",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              key={index}
            ></div>
          ));
        }
        if (title === "Максим") {
          return displayList.map((item, index) => (
            <div
              style={{
                backgroundColor: "red",
                width: "40px",
                height: "40px",
                borderRadius: "50px",
                top: "30px",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              key={index}
            ></div>
          ));
        }
        if (title === "Юра") {
          return displayList.map((item, index) => (
            <div
              style={{
                backgroundColor: "yellow",
                width: "40px",
                height: "40px",
                borderRadius: "50px",
                top: "30px",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              key={index}
            ></div>
          ));
        }
        if (title === "Вова") {
          return displayList.map((item, index) => (
            <div
              style={{
                backgroundColor: "blue",
                width: "40px",
                height: "40px",
                borderRadius: "50px",
                top: "30px",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              key={index}
            ></div>
          ));
        }
      };
      return (
        <ul className="calendar-todo-list" style={{ position: "relative" }}>
          {displayList.map((item, index) => hightom(item.title))}
        </ul>
      );
    }
    return null;
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          justifyItems: "left",
          marginLeft: "10px",
          paddingTop: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "20px",
              borderRadius: "50px",
            }}
          ></div>
          <div>Максим і Люда</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              backgroundColor: "yellow",
              width: "20px",
              height: "20px",
              borderRadius: "50px",
            }}
          ></div>
          <div>Юра і Аліна</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              backgroundColor: "blue",
              width: "20px",
              height: "20px",
              borderRadius: "50px",
            }}
          ></div>
          <div>Вова і Агата</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              backgroundColor: "green",
              width: "20px",
              height: "20px",
              borderRadius: "50px",
            }}
          ></div>
          <div>Женя і Люда</div>
        </div>
      </div>
      <Calendar bordered renderCell={renderCell} />
    </>
  );
};
export default MyCalendar;

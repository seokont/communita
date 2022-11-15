/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import TableBrothers from "./component/TableBrothers";
import {
  Dropdown,
  Button,
  ButtonToolbar,
  IconButton,
  ButtonGroup,
  Popover,
  Whisper,
} from "rsuite";
import Responsible from "./component/Responsible";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Home from "./component/Home";
import Presvitery from "./component/Presvitery";
import MyCalendar from "./component/Calendar";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Menu from "@mui/material/Menu";
import { denBrit } from "../src/storage/baza";
import ka from "./component/4018986.png";
import TestPage from "./component/Test";

const SizeDropdown = (props) => (
  <Dropdown appearance="default" {...props}>
    <Link to="/">
      <Dropdown.Item>Список</Dropdown.Item>
    </Link>
    <Link to="/calendar">
      <Dropdown.Item>Графік приготувань</Dropdown.Item>
    </Link>
    <Link to="/responsible">
      <Dropdown.Item>Відповідальні груп</Dropdown.Item>
    </Link>
    <Link to="/presvitery">
      <Dropdown.Item>Пресвітери</Dropdown.Item>
    </Link>

    <Link to="/testpage">
      <Dropdown.Item>222</Dropdown.Item>
    </Link>
  </Dropdown>
);
export default function App() {
  const [datingFuture1, setDatingFuture1] = useState([]);
  const [datingFuture2, setDatingFuture2] = useState([]);
  const [datingFuture3, setDatingFuture3] = useState([]);
  const [dating, setDating] = useState([]);
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let years = d.getFullYear();
  useEffect(() => {
    const millionDN = denBrit?.filter((u) => {
      let k = u.data.split(".");
      return (
        k !== "" &&
        new Date(years, Number(k[1] - 1), Number(k[0])).getTime() ===
          new Date(years, month, date).getTime()
      );
    });
    setDating(millionDN);
    const millionDNFuture3 = denBrit?.filter((u) => {
      let k = u.data.split(".");
      console.log(new Date(years, Number(k[1] - 1), Number(k[0])));
      return (
        k !== "" &&
        new Date(years, Number(k[1] - 1), Number(k[0])).getTime() ===
          new Date(years, month, date + 3).getTime()
      );
    });
    setDatingFuture3(millionDNFuture3);
    const millionDNFuture2 = denBrit?.filter((u) => {
      let k = u.data.split(".");
      return (
        k !== "" &&
        new Date(years, Number(k[1] - 1), Number(k[0])).getTime() ===
          new Date(years, month, date + 2).getTime()
      );
    });
    setDatingFuture2(millionDNFuture2);
    const millionDNFuture1 = denBrit?.filter((u) => {
      let k = u.data.split(".");
      return (
        k !== "" &&
        new Date(years, Number(k[1] - 1), Number(k[0])).getTime() ===
          new Date(years, month, date + 1).getTime()
      );
    });
    setDatingFuture1(millionDNFuture1);
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dayBirth = (f, d, w) => {
    if (f.length !== 0) {
      return (
        <div
          sx={{ width: "100%" }}
          style={{
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: w,
            display: "flex",
            gap: "15px",
            alignItems: "center",
            borderBottom: "1px ridge #333",
          }}
          spacing={2}
        >
          <div>
            <img width="40" src={ka} />
          </div>
          <div variant="filled" severity={w} style={{ color: "white" }}>
            {d}
            {f?.map((m, index) => (
              <div key={index}>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {m.name}
                </span>
                {" - "}
                виповниться {Number(years) - Number(m?.data.slice(-4))} р.
              </div>
            ))}
          </div>
        </div>
      );
    }
    return "";
  };
  return (
    <div className="App">
      {/* <Box sx={{ width: '100%' }}>
      <div style={{display:'flex', justifyContent: 'center', gap: '20px', marginTop: '15px',padding:'10px 0'}}
      > */}
      {/* <Link to="/">Головна</Link>
       <Link to="responsible">Відповідальні груп</Link>
       <Link to="presvitery">Пресвітери</Link>
       <Stack spacing={2} direction="row"> */}
      <div>
        {dayBirth(
          datingFuture3,
          " Увага через 3 дня день народження:",
          "Coral"
        )}
        {dayBirth(
          datingFuture2,
          " Увага через 2 дня день народження:",
          "Tomato"
        )}
        {dayBirth(
          datingFuture1,
          " Увага вже завтра день народження:",
          "OrangeRed"
        )}
        {dayBirth(dating, "Сьогодні святкуємо день народження:", "red")}
        {/* <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Меню
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/calendar">Графік приготувань</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/responsible">Відповідальні груп</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/presvitery">Пресвітери</Link>
          </MenuItem>
        </Menu> */}
        <ButtonToolbar
          style={{
            padding: "5px 0",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(128,128,238,1) 35%, rgba(0,212,255,1) 100%)",
          }}
        >
          <SizeDropdown title="Меню" size="md" />
        </ButtonToolbar>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/responsible" element={<Responsible />} />
        <Route path="/" element={<TableBrothers />} />
        <Route path="/presvitery" element={<Presvitery />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </div>
  );
}

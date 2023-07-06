import ClearImage from "./clear.jpeg";
import mist from "./mist.jpeg";
import Haze from "./haze.jpeg";
import ThunderstormImage from "./thunderstrom.jpeg";
import SnowImage from "./snow.jpeg";
import FogImage from "./default.jpeg";
import clouds from "./clouds.jpeg";
import rainimage from "./w.jpeg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import {
  WiDaySunny,
  WiNightClear,
  WiSnow,
  WiCloudy,
  WiRain,
  WiFog,
  WiSprinkle,
  WiSmoke,
  WiDust,
  WiVolcano,
  WiStrongWind,
  WiCloud,
  WiThunderstorm,
} from "weather-icons-react";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [apiselect, setapiselect] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [icon, seticon] = useState("");

  const [backgroundImage, setBackgroundImage] = useState("");

  const datePart = String(currentTime);
  const part = datePart.slice(0, 25);
  const key = "1049d5e3007dfc2536c71cd58da06aa4";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (icon === "Clear") {
      setBackgroundImage(`url(${ClearImage})`);
    } else if (icon === "Rain") {
      setBackgroundImage(`url(${rainimage})`);
    } else if (icon === "Thunderstorm" || icon === "Drizzle") {
      setBackgroundImage(`url(${ThunderstormImage})`);
    } else if (icon === "Snow") {
      setBackgroundImage(`url(${SnowImage})`);
    } else if (icon === "Haze") {
      setBackgroundImage(`url(${Haze})`);
    } else if (icon === "Mist") {
      setBackgroundImage(`url(${mist})`);
    } else if (icon === "Clouds") {
      setBackgroundImage(`url(${clouds})`);
    } else {
      setBackgroundImage(`url(${FogImage})`);
    }
  }, [icon]);

  const inputChanged = (event) => {
    setUserInput(event.target.value);
  };
  const ahmedabad = async () => {
    console.log(userInput);
    console.log(icon);
    console.log(icon);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=${key}`
      );
      setapiselect(response.data);
      setDegree(response.data.main.temp);
      setLocation(response.data.name);
      seticon(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const bombay = async () => {
    console.log(userInput);
    console.log(icon);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=bombay&appid=${key}`
      );
      setapiselect(response.data);
      setDegree(response.data.main.temp);
      setLocation(response.data.name);
      seticon(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const delhi = async () => {
    console.log(userInput);
    console.log(icon);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}`
      );
      setapiselect(response.data);
      setDegree(response.data.main.temp);
      setLocation(response.data.name);
      seticon(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherData = async () => {
    console.log(userInput);
    console.log(icon);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`
      );
      setapiselect(response.data);
      setDegree(response.data.main.temp);
      setLocation(response.data.name);
      seticon(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={{ backgroundImage: backgroundImage }}
      >
        <div class="container">
          {!degree ? (
            <>
              <div>
                <div class="word word-left">"Explore</div>
                <div class="word word-right">weather</div>
                <div class="word word-left">wonders.</div>
              </div>
              <div>
                {" "}
                <div class="word word-right">Enter</div>
                <div class="word word-left">your</div>
                <div class="word word-right">area</div>
                <div class="word word-left">to</div>
                <div class="word word-right">unlock</div>
                <div class="word word-left">a</div>
                <div class="word word-right">world</div>
                <div class="word word-left">of</div>
                <div class="word word-right">meteorological</div>
                <div class="word word-left">insights."</div>
              </div>
            </>
          ) : null}
        </div>

        <div className="card">
          <p style={{ fontSize: "60px" }}>
            {degree ? (
              <>
                {degree}
                <sup>
                  <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
                </sup>{" "}
              </>
            ) : null}

            <span style={{ marginLeft: "10px" }}>{location}</span>
            <p sx={{ fontSize: 50, marginLeft: "1px" }} className="cloud" />
            {icon === "Haze" ? (
              <WiSmoke size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Clouds" ? (
              <WiCloudy size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Clear" ? (
              <WiDaySunny
                size={50}
                color="#000"
                style={{ marginLeft: "6px" }}
              />
            ) : icon === "Thunderstorm" ? (
              <WiThunderstorm
                size={50}
                color="#000"
                style={{ marginLeft: "10px" }}
              />
            ) : icon === "Rain" ? (
              <WiRain size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Drizzle" ? (
              <WiSprinkle
                size={50}
                color="#000"
                style={{ marginLeft: "10px" }}
              />
            ) : icon === "Snow" ? (
              <WiSnow size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Mist" || icon === "Smoke" ? (
              <WiSmoke size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Dust" ? (
              <WiDust size={50} color="#000" style={{ marginLeft: "10px" }} />
            ) : icon === "Ash" || icon === "Squall" ? (
              <WiVolcano
                size={50}
                color="#000"
                style={{ marginLeft: "10px" }}
              />
            ) : icon === "Tornado" ? (
              <WiStrongWind
                size={50}
                color="#000"
                style={{ marginLeft: "10px" }}
              />
            ) : null}
          </p>
          <span id="datetime">{degree ? part.toString() : null}</span>
        </div>
      </div>
      <div className="right-div">
        <div className="search-bar">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="textfield"
          >
            <TextField
              id="standard-basic"
              value={userInput}
              label="Another Location"
              variant="standard"
              onChange={inputChanged}
              style={{ width: "339px", top: "0px", margin: "0px" }}
            />
          </Box>
          <button className="ctn-1" onClick={ahmedabad}>
            Ahmedabad
          </button>
          <button className="ctn-2" onClick={bombay}>
            Bombay
          </button>
          <button className="ctn-3" onClick={delhi}>
            Delhi
          </button>
          <button
            type="submit"
            className="ctn-button"
            onClick={fetchWeatherData}
          >
            <SearchSharpIcon />
          </button>{" "}
        </div>

        <div className="wheather1">
          {degree ? (
            <>
              <p> Weather Detail :)</p>
            </>
          ) : null}
        </div>
        {apiselect && (
          <div className="weather">
            <br></br>
            <br></br>
            &nbsp;&nbsp; Humidity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {apiselect.main.humidity}% <br></br>
            <br></br> &nbsp;&nbsp;&nbsp;WindSpeed : &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{" "}
            {apiselect.wind.speed}
            km/h <br></br>
            <br></br> &nbsp;&nbsp;&nbsp;Name :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {apiselect.name}
            <br></br>
            <br></br> &nbsp;&nbsp; Country :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{apiselect.sys.country}
          </div>
        )}
      </div>
    </>
  );
}

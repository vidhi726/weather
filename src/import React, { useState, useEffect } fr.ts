import React, { useState, useEffect } from "react";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const datePart = String(currentTime);
  const part = datePart.slice(0, 25);

  const sayHello = () => {
    alert("hello!");
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="card">
          <p style={{ fontSize: "60px" }}>
            08
            <sup>
              <TripOriginIcon sx={{ fontSize: " 80% ", height: "61px" }} />
            </sup>{" "}
            <span style={{ marginLeft: "10px" }}>London</span>
            <ThunderstormOutlinedIcon
              className="cloud"
              sx={{ fontSize: 50, marginLeft: "10px" }}
            />
          </p>
          <span id="datetime">{part}</span>
        </div>
      </div>
      <div className="right-div">
        <div className="search-bar">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, idth: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="textfield"
          >
            <TextField
              id="standard-basic"
              label="Another Location"
              variant="standard"
              style={{ width: "300px" }}
            />
          </Box>

          <button type="submit" className="ctn-button" onClick={sayHello}>
            <SearchSharpIcon />
          </button>
        </div>
      </div>
    </>
  );
}
























































import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const API_KEY = "1049d5e3007dfc2536c71cd58da06aa4";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (searchQuery) {
      fetchWeatherData();
    }
  }, [searchQuery]);

  const datePart = currentTime.toString();
  const part = datePart.slice(0, 25);

  let degree = "--";
  let weatherIcon = null;

  if (weatherData) {
    degree = Math.round(weatherData.main.temp - 273.15);
    const weatherId = weatherData.weather[0].id;

    if (weatherId < 300) {
      weatherIcon = <ThunderstormOutlinedIcon />;
    } else if (weatherId < 600) {
      weatherIcon = <CloudOutlinedIcon />;
    } else {
      weatherIcon = <CloudOutlinedIcon />;
    }
  }

  return (
    <>
      <div className="main-wrapper">
        <div className="card">
          <p style={{ fontSize: "60px" }}>
            {degree}
            <sup>
              <TripOriginIcon sx={{ fontSize: " 80% ", height: "61px" }} />
            </sup>{" "}
            <span style={{ marginLeft: "10px" }}>
              {weatherData?.name || "London"}
            </span>
            {weatherIcon}
          </p>
          <span id="datetime">{part}</span>
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
              label="Another Location"
              variant="standard"
              style={{ width: "300px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          <button type="submit" className="ctn-button">
            <SearchSharpIcon />
          </button>
        </div>
      </div>
    </>
  );
}


































const fetchWeatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=usa&appid=${key}`
    );
    const { main, wind, weather } = response.data;
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const rain = weather[0].main;
    const cloudy = weather[0].description;

    console.log("Humidity:", humidity);
    console.log("Wind Speed:", windSpeed);
    console.log("Rain:", rain);
    console.log("Cloudy:", cloudy);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};





































const fetchWeatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`
    );
    setapiselect(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};



































import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [apiselect, setapiselect] = useState("");
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

  const inputChanged = (event) => {
    setUserInput(event.target.value);
  };

  const fetchWeatherData = async () => {
    console.log(userInput);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`
      );
      setapiselect(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="card">
          <p style={{ fontSize: "60px" }}>
            08
            <sup>
              <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
            </sup>{" "}
            <span style={{ marginLeft: "10px" }}>London</span>
            <ThunderstormOutlinedIcon
              className="cloud"
              sx={{ fontSize: 50, marginLeft: "10px" }}
            />
          </p>
          <span id="datetime">{part}</span>
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
              style={{ width: "300px" }}
            />
          </Box>
          <button
            type="submit"
            className="ctn-button"
            onClick={fetchWeatherData}
          >
            <SearchSharpIcon />
          </button>{" "}
        </div>
      </div>
      <div className="wheather">
        <p> </p>
      </div>
    </>
  );
}























Humidity: {weatherRef?.current?.humidity}% Preasure:{" "}
{weatherRef?.current?.pressure}
windSpeed:{weatherRef?.current?.wind.speed}
























{apiselect && (
  <div className="weather">
    <br></br>
    <br></br>
    Humidity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {apiselect.main.humidity}% <br></br>
    <br></br> WindSpeed : &nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{" "}
    {apiselect.wind.speed}
    km/h <br></br>
    <br></br>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {apiselect.name}
    <br></br>
    <br></br> Country : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{apiselect.sys.country}
  </div>
)}



























const renderWeatherIcon = () => {
  switch (icon) {
    case "clouds":
      return <CloudOutlinedIcon className="weather-icon" />;
    case "Thunderstorm":
      return <ThunderstormOutlinedIcon className="weather-icon" />;
    case "Drizzle":
      return <FilterDramaOutlinedIcon className="weather-icon" />;
    case "Rain":
      return <FilterDramaOutlinedIcon className="weather-icon" />;
    case "Clear":
      return <WbSunnyOutlinedIcon className="weather-icon" />;
    default:
      return null;
  }
};




















import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [apiselect, setapiselect] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");

  const [icon, seticon] = useState("");
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
  const inputChanged = (event) => {
    setUserInput(event.target.value);
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








    <div className="main-wrapper">
        <div className="card">
          <p
            style={{
              fontSize: "60px",
            }}




          >
            {degree}
            <sup>
              <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
            </sup>{" "}
            <span style={{ marginLeft: "10px" }}>{location}</span>
            <ThunderstormOutlinedIcon
              className="cloud"
              sx={{ fontSize: 50, marginLeft: "10px" }}
            />
          </p>
          <span id="datetime">{part}</span>
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
              style={{ width: "300px" }}
            />
          </Box>
          <button
            type="submit"
            className="ctn-button"
            onClick={fetchWeatherData}
          >
            <SearchSharpIcon />
          </button>{" "}
        </div>

        <div className="wheather1">Weather Detail :)</div>
        {apiselect && (
          <div className="weather">
            <br></br>
            <br></br>
            Humidity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {apiselect.main.humidity}% <br></br>
            <br></br> WindSpeed : &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{" "}
            {apiselect.wind.speed}
            km/h <br></br>
            <br></br>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {apiselect.name}
            <br></br>
            <br></br> Country : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{apiselect.sys.country}
          </div>
        )}
      </div>
    </>
  );
}











































import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import SnowIcon from "@mui/icons-material/AcUnitOutlined";
import MistIcon from "@mui/icons-material/CloudQueueOutlined";
import FogIcon from "@mui/icons-material/CloudOutlined";
import DrizzleIcon from "@mui/icons-material/GrainOutlined";
import SmokeIcon from "@mui/icons-material/SmokingRoomsOutlined";
import DustIcon from "@mui/icons-material/BlurOnOutlined";
import SandIcon from "@mui/icons-material/BeachAccessOutlined";
import AshIcon from "@mui/icons-material/WhatshotOutlined";
import SquallIcon from "@mui/icons-material/FlagOutlined";
import TornadoIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [apiselect, setapiselect] = useState(null);
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");
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

  const inputChanged = (event) => {
    setUserInput(event.target.value);
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
      setIcon(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="card">
          {degree && (
            <p
              style={{
                fontSize: "60px",
              }}
            >
              {degree}
              {degree && (
                <sup>
                  <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
                </sup>
              )}
              {location && (
                <span style={{ marginLeft: "10px" }}>{location}</span>
              )}
              {icon === "Haze" || icon === "Clouds" ? (
                <CloudOutlinedIcon
                  sx={{ fontSize: 50, marginLeft: "10px" }}
                />
              ) : icon === "Clear" ? (
                <WbSunnyOutlinedIcon
                  sx={{ fontSize: 50, marginLeft: "10px" }}
                />
              ) : icon === "Thunderstorm" ? (
                <ThunderstormOutlinedIcon
                  sx={{ fontSize: 50, marginLeft: "10px" }}
                />
              ) : icon === "Rain" ? (
                <FilterDramaOutlinedIcon
                  sx={{ fontSize: 50, marginLeft: "10px" }}
                />
              ) : icon === "Snow" ? (
                <SnowIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
              ) : icon === "Mist" ? (
                <MistIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
              ) : (
                <></>
              )}
            </p>
          )}
          <Box className="search-box" sx={{ width: "300px" }}>
            <TextField
              id="standard-basic"
              label="Enter City Name"
              onChange={inputChanged}
            />
            <SearchSharpIcon
              className="search-icon"
              onClick={fetchWeatherData}
            />
          </Box>
        </div>
      </div>
    </>
  );
}
























@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

* {
  font-family: "PT Sans", sans-serif;
  color: #d9d9d9;
}

.main-wrapper {
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-size: cover;
  background-position: center;
  font-weight: bold;
  position: relative;
  padding-left: 20px;
}

#datetime {
  font-size: 25px;
  margin-left: 38px;
}

.zero {}

.london {}

p {
  margin: 0;
  display: flex;
  align-items: start;
  margin-left: 36px;
}

.default-bg {
  background-image: url("../fog.jpeg");
}

.thunderstorm-bg {
  background-image: url("../haze.jpeg");
}

.cloud {
  margin-left: 0px;
}

.left-div {}

.ctn-button {
  float: right;
  width: 25%;
  top: 0px;
  height: 62px;
  padding: 10px;
  align-items: center;
  background: #6b90ae;
  color: rgb(19, 19, 19);
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
}

.textfield {
  margin-right: 30px;
}

.textbox {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  border-bottom: 1px solid;
  background: #f1f1f1;
}

.card {
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  margin-right: 50px;
  margin-left: -19px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.right-div {
  background: rgba(0.1, 0.1, 0.1, 0.2);
  top: 372px;
  width: 411px;
  height: 100vh;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  backdrop-filter: blur(30px);
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: flex-end;
  align-items: flex-start;
}

.search-bar {
  align-items: center;
  display: flex;
  justify-content: end;
}

.ctn-2 {
  font-weight: bold;
  top: -121px;
  margin-top: 269px;
  font-size: 22px;
  position: absolute;
  margin-right: 298px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.ctn-3 {
  font-weight: bold;
  top: -93px;
  margin-top: 275px;
  font-size: 22px;
  position: absolute;
  margin-right: 324px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.ctn-1 {
  font-weight: bold;
  top: -147px;
  margin-top: 262px;
  font-size: 22px;
  position: absolute;
  margin-right: 260px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.wheather1 {
  font-weight: bold;
  top: 9px;
  color: rgb(244, 239, 239);
  margin-top: 262px;
  font-size: 28px;
  position: absolute;
  margin-right: 110px;
}

#standard-basic {
  color: aliceblue;
}

.weather {
  font-weight: bold;
  display: flex;
  top: 12px;
  margin-top: 304px;
  font-size: 25px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather span {
  margin-right: 1%;
}

.line {
  width: 1000000000000%;
  margin-top: 145px;
}






























import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import SnowIcon from "@mui/icons-material/AcUnitOutlined";
import MistIcon from "@mui/icons-material/CloudQueueOutlined";
import FogIcon from "@mui/icons-material/CloudOutlined";
import DrizzleIcon from "@mui/icons-material/GrainOutlined";
import SmokeIcon from "@mui/icons-material/SmokingRoomsOutlined";
import DustIcon from "@mui/icons-material/BlurOnOutlined";
import SandIcon from "@mui/icons-material/BeachAccessOutlined";
import AshIcon from "@mui/icons-material/WhatshotOutlined";
import SquallIcon from "@mui/icons-material/FlagOutlined";
import TornadoIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";

export default function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [apiselect, setapiselect] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [icon, seticon] = useState("");
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

  const inputChanged = (event) => {
    setUserInput(event.target.value);
  };

  const fetchWeatherData = async () => {
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
      <div className="main-wrapper">
        <div className="card">
          {degree ? (
            <p style={{ fontSize: "60px" }}>
              {degree}
              <sup>
                <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
              </sup>
            </p>
          ) : (
            <p style={{ fontSize: "60px" }}>{degree}</p>
          )}
          <span style={{ marginLeft: "10px" }}>{location}</span>
          <p sx={{ fontSize: 50, marginLeft: "10px" }} className="cloud" />
          {/* Weather icons */}
          {icon === "Haze" || icon === "Clouds" ? (
            <CloudOutlinedIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Clear" ? (
            <WbSunnyOutlinedIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Thunderstorm" ? (
            <ThunderstormOutlinedIcon
              sx={{ fontSize: 50, marginLeft: "10px" }}
            />
          ) : icon === "Rain" ? (
            <FilterDramaOutlinedIcon
              sx={{ fontSize: 50, marginLeft: "10px" }}
            />
          ) : icon === "Snow" ? (
            <SnowIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Mist" ? (
            <MistIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Fog" ? (
            <FogIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Drizzle" ? (
            <DrizzleIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Smoke" ? (
            <SmokeIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Dust" ? (
            <DustIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Sand" ? (
            <SandIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Ash" ? (
            <AshIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Squall" ? (
            <SquallIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Tornado" ? (
            <TornadoIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : icon === "Night" ? (
            <NightsStayOutlinedIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          ) : (
            <WbSunnyOutlinedIcon sx={{ fontSize: 50, marginLeft: "10px" }} />
          )}
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
              style={{ width: "300px" }}
            />
          </Box>
          <button
            type="submit"
            className="ctn-button"
            onClick={fetchWeatherData}
          >
            <SearchSharpIcon />
          </button>
        </div>

        <div className="wheather1">Weather Detail :)</div>
        {apiselect && (
          <div className="weather">
            <br />
            <br />
            Humidity: {apiselect.main.humidity}% <br />
            <br />
            WindSpeed: {apiselect.wind.speed} km/h <br />
            <br />
            Name: {apiselect.name} <br />
            <br />
            Country: {apiselect.sys.country}
          </div>
        )}
      </div>
    </>
  );
}






{degree ? (
  <>
    {degree}
    <TripOriginIcon  />
  </>
) : null}








{degree ? (
  <p style={{ fontSize: "60px" }}>
    {degree}
    <sup>
      <TripOriginIcon sx={{ fontSize: "80%", height: "61px" }} />
    </sup>{" "}
  </p>
) : null}























































import "./weather.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
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

const Weather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const datePart = String(currentTime);
  const part = datePart.slice(0, 25);
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const inputChanged = (event) => {
    setUserInput(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return (
          <WiDaySunny size={50} color="#000" style={{ marginLeft: "6px" }} />
        );
      case "Clouds":
        return (
          <WiCloudy size={50} color="#000" style={{ marginLeft: "10px" }} />
        );
      case "Rain":
        return <WiRain size={50} color="#000" style={{ marginLeft: "10px" }} />;
      case "Thunderstorm":
        return (
          <WiThunderstorm
            size={50}
            color="#000"
            style={{ marginLeft: "10px" }}
          />
        );
      case "Snow":
        return <WiSnow size={50} color="#000" style={{ marginLeft: "10px" }} />;
      case "Mist":
      case "Haze":
      case "Smoke":
        return <WiFog size={50} color="#000" style={{ marginLeft: "10px" }} />;
      case "Dust":
        return <WiDust size={50} color="#000" style={{ marginLeft: "10px" }} />;
      case "Volcano":
        return (
          <WiVolcano size={50} color="#000" style={{ marginLeft: "10px" }} />
        );
      case "Wind":
        return (
          <WiStrongWind size={50} color="#000" style={{ marginLeft: "10px" }} />
        );
      default:
        return (
          <WiSprinkle size={50} color="#000" style={{ marginLeft: "10px" }} />
        );
    }
  };

  const getBackgroundClass = () => {
    if (!weatherData) return "default-bg";
    const { main } = weatherData.weather[0];
    if (["Haze", "Mist", "Smoke"].includes(main)) {
      return "thunderstorm-bg";
    }
    return "default-bg";
  };

  return (
    <>
      <div className={`main-wrapper ${getBackgroundClass()}`}>
        <div className="left-div">
          <p id="datetime">{currentTime.toLocaleString()}</p>
          <p className="zero">
            {weatherData && (
              <>
                <TripOriginIcon
                  style={{ marginRight: "10px", marginTop: "8px" }}
                />
                {weatherData.name}
              </>
            )}
          </p>
          <p className="london">
            {weatherData && (
              <>
                {weatherData.weather[0].main}
                {getWeatherIcon(weatherData.weather[0].main)}
              </>
            )}
          </p>
        </div>
      </div>
      <div className="right-div">
        <div className="search-bar">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="textfield"
            style={{ marginLeft: "30px", marginTop: "15px" }}
          >
            <TextField
              id="standard-basic"
              variant="standard"
              label="Enter City Name"
              onChange={inputChanged}
              value={userInput}
              InputProps={{
                endAdornment: <SearchSharpIcon onClick={fetchWeatherData} />,
              }}
            />
          </Box>
        </div>
        <div className="weather">
          <span>{part}</span>
        </div>
      </div>
    </>
  );
};

export default Weather;






































@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

* {
  font-family: "PT Sans", sans-serif;
  color: #d9d9d9;
}

.main-wrapper {
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-size: cover;
  background-position: center;
  font-weight: bold;
  position: relative;
  padding-left: 20px;
}

#datetime {
  font-size: 25px;
  margin-left: 38px;
}

.zero {}

.london {}

p {
  margin: 0;
  display: flex;
  align-items: start;
  margin-left: 36px;
}

.default-bg {
  background-image: url("../fog.jpeg");
}

.thunderstorm-bg {
  background-image: url("../haze.jpeg");
}

.cloud {
  margin-left: 0px;
}

.left-div {}

.ctn-button {
  float: right;
  width: 25%;
  top: 0px;
  height: 62px;
  padding: 10px;
  align-items: center;
  background: #6b90ae;
  color: rgb(19, 19, 19);
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
}

.textfield {
  margin-right: 30px;
}

.textbox {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  border-bottom: 1px solid;
  background: #f1f1f1;
}

.card {
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  margin-right: 50px;
  margin-left: -19px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.right-div {
  background: rgba(0.1, 0.1, 0.1, 0.2);
  top: 372px;
  width: 411px;
  height: 100vh;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  backdrop-filter: blur(30px);
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: flex-end;
  align-items: flex-start;
}

.search-bar {
  align-items: center;
  display: flex;
  justify-content: end;
}

.ctn-2 {
  font-weight: bold;
  top: -121px;
  margin-top: 269px;
  font-size: 22px;
  position: absolute;
  margin-right: 298px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.ctn-3 {
  font-weight: bold;
  top: -93px;
  margin-top: 275px;
  font-size: 22px;
  position: absolute;
  margin-right: 324px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.ctn-1 {
  font-weight: bold;
  top: -147px;
  margin-top: 262px;
  font-size: 22px;
  position: absolute;
  margin-right: 260px;
  border: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

.wheather1 {
  font-weight: bold;
  top: 9px;
  color: rgb(244, 239, 239);
  margin-top: 262px;
  font-size: 28px;
  position: absolute;
  margin-right: 110px;
}

#standard-basic {
  color: aliceblue;
}

.weather {
  font-weight: bold;
  display: flex;
  top: 12px;
  margin-top: 304px;
  font-size: 25px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather span {
  margin-right: 1%;
}

.line {
  width: 1000000000000%;
  margin-top: 145px;
}

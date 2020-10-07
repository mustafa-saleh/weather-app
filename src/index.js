import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
    const getDaysWeather = (list) => {
    const days = [];
    let i,
      temp,
      chunk = 8, minList, maxList;
    for (i = 0; i < list.length; i += chunk) {
      temp = list.slice(i, i + chunk);
      minList = temp.map((item) => item.main.temp_min);
      maxList = temp.map((item) => item.main.temp_max);
      days.push({
        temp_min: Math.min(...minList),
        temp_max: Math.max(...maxList),
      });
    }

    return days;
  };

  const filterWeatherInfo = (data) => {
    let filteredData = { list: [] };
    filteredData.city = {
      name: data.city.name,
      country: data.city.country,
      timezone: data.city.timezone,
    };
    data.list.map((item) => {
      const newItem = {};
      newItem.dt = item.dt;
      newItem.main = {
        temp: item.main.temp,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        humidity: item.main.humidity,
      };
      newItem.weather = { description: item.weather[0].description };
      newItem.wind = { speed: item.wind.speed };
      newItem.visibility = item.visibility;

      filteredData.list.push(newItem);
    });
    filteredData.days = getDaysWeather(data.list);
    console.log("FD", filteredData);
  };
 */


 
  // async function fetchData(text) {
  //   setLoading(true);
  //   let query = "?q=" + text + "&appid=" + API_KEY + "&units=metric";
  //   const response = await fetch(API_URL + "forecast" + query);
  //   response
  //     .json()
  //     .then((result) => {
  //       if (response.ok) {
  //         console.log("5/3: ", result);
  //         query =
  //           "?lat=" +
  //           result.city.coord.lat +
  //           "&lon=" +
  //           result.city.coord.lon +
  //           "&appid=" +
  //           API_KEY +
  //           "&units=metric&exclude=minutely,hourly,alerts";
  //         fetch(API_URL + "onecall" + query)
  //           .then((res) => res.json())
  //           .then((res) => {
  //             // setOneCall(res);
  //             console.log("oneCall: ", res);
  //           });
  //         setWeather(result);
  //       } else console.log("ERR: ", result);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log("ERROR: ", err));
  // }

  /*
   size="lg", "6x" 
  <FontAwesomeIcon icon={faMapMarkedAlt} size="xs"/>
  <FontAwesomeIcon icon={faSearch} pull="right"/>
  <FontAwesomeIcon icon={faTimes} pull="right"/>

    <form id="search-form">
      <div className="form-card">
        <input
          value={searchText}
          onChange={handleChange}
          placeholder="search city"
          name="searchText"
          className="form-control"
        />
        {searchText.length ? (
          <button
            className="btn btn-light"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Clear"
            onClick={handleChange}
          >
            <IconContext.Provider value={{ size: "1.5em", color: "grey" }}>
              <BsX />
            </IconContext.Provider>
          </button>
        ) : null}
        <button
          type="submit"
          className="btn btn-light"
          data-toggle="tooltip"
          data-placement="bottom"
          name="search"
          onClick={(e) => {e.preventDefault();searchWeather(searchText)}}
        >
          <IconContext.Provider value={{ size: "1.3em", color: "#1287A5" }}>
            <BsSearch />
          </IconContext.Provider>
        </button>
      </div>
      <IconContext.Provider value={{ size: ".8em", color: "#767676" }}>
        <SiGooglemaps />
      </IconContext.Provider>
      <small onClick={hc}>use google maps</small>
    </form>
    */

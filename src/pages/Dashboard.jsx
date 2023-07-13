import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WeatherStatus from "../components/WeatherStatus";
import AirQualityStatus from "../components/AirQualityStatus";
import TomorrowWeather from "../components/TomorrowWeather";
import ForecastCard from "../components/ForcastCard";
import TemperatureCard from "../components/TemperatureCard";
import "./Dashboard.css";
import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherDetails,
  getForeCastDetails,
} from "../redux/features/weatherSlice";
import { tempConverter } from "../utils";

function Dashboard(props) {
  const [toggle, setToggle] = useState(false);
  const weatherData = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const getWeather = useCallback(
    (coordinates) => {
      dispatch(getWeatherDetails(coordinates));
    },
    [dispatch]
  );

  const getForeCast = useCallback(
    (coordinates) => {
      dispatch(getForeCastDetails(coordinates));
    },
    [dispatch]
  );

  useEffect(() => {
    const coordinates = {
      lat: props.latitude,
      lon: props.longitude,
    };
    getWeather(coordinates);
    getForeCast(coordinates);
  }, [getWeather, getForeCast, props.latitude, props.longitude]);

  const toggleTemp = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {weatherData?.data && (
        <Navbar
          place={weatherData?.data?.location?.name}
          degree={tempConverter(toggle, weatherData?.data?.current?.temp_c)}
        />
      )}

      <div className="toggle">
        <button onClick={toggleTemp}>TOGGLE TEMP</button>
      </div>

      <section className="dashboard_container">
        <div className="dashboard_container_item_1">
          {weatherData?.data && (
            <WeatherStatus
              pressure={weatherData?.data?.current?.pressure_mb}
              visibility={weatherData?.data?.current?.vis_km}
              humidity={weatherData?.data?.current?.humidity}
              temperature={tempConverter(
                toggle,
                weatherData?.data?.current?.temp_c
              )}
              weather_description={weatherData?.data?.current?.condition?.text}
              app_temp={tempConverter(
                toggle,
                weatherData?.data?.current?.feelslike_c
              )}
            />
          )}
          {weatherData?.data && (
            <AirQualityStatus
              aqi={weatherData?.data?.current?.air_quality?.["us-epa-index"]}
              uv={weatherData?.data?.current?.uv}
              wind_direction={weatherData?.data?.current?.wind_dir}
            />
          )}

          {weatherData?.forecast?.forecast && (
            <TemperatureCard
              morning_temp={tempConverter(
                toggle,
                weatherData?.forecast?.forecast?.forecastday[0].hour[8].temp_c
              )}
              afternoon_temp={tempConverter(
                toggle,
                weatherData?.forecast?.forecast?.forecastday[0].hour[12].temp_c
              )}
              evening_temp={tempConverter(
                toggle,
                weatherData?.forecast?.forecast?.forecastday[0].hour[16].temp_c
              )}
              night_temp={tempConverter(
                toggle,
                weatherData?.forecast?.forecast?.forecastday[0].hour[20].temp_c
              )}
            />
          )}
        </div>
        <div className="dashboard_container_item_2">
          {weatherData?.forecast?.forecast && (
            <TomorrowWeather
              temperature={tempConverter(
                toggle,
                weatherData?.forecast?.forecast?.forecastday[1].day.avgtemp_c
              )}
              condition={
                weatherData?.forecast?.forecast?.forecastday[1].day.condition
                  .text
              }
            />
          )}

          <ForecastCard toggle_status={toggle} />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;

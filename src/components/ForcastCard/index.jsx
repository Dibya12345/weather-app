import React from "react";
import WeatherBar from "../WeatherBar";
import WeatherPrediction from "../WeatherPrediction";
import "./ForecastCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { getForeCastDetails } from "../../redux/features/weatherSlice";
import { formatDateToWords } from "../../utils";
import { tempConverter } from "../../utils";

export default function ForecastCard(props) {
  const weatherForecastData = useSelector(
    (state) => state.weather?.forecast?.forecast?.forecastday
  );
  const [start_forecast, setStartForecast] = useState(0);
  const [end_forecast, setEndForecast] = useState(3);

  const dispatch = useDispatch();

  const getWeatherForecast = useCallback(() => {
    dispatch(getForeCastDetails());
  }, [dispatch]);

  useEffect(() => {
    getWeatherForecast();
  }, [getWeatherForecast]);

  const traverseWeatherForecast = () => {
    if (end_forecast < weatherForecastData.length) {
      setStartForecast(start_forecast + 3);
      setEndForecast(end_forecast + 3);
    } else {
      setStartForecast(0);
      setEndForecast(3);
    }
  };

  return (
    <div className="right_nav_container">
      <div className="right_nav_items">
        <div className="right_nav_item_1">
          {weatherForecastData && weatherForecastData[0]?.day?.uv && (
            <WeatherBar uvi={weatherForecastData[0]?.day?.uv} />
          )}
          <h2>Weather Prediction</h2>

          {weatherForecastData &&
            weatherForecastData
              .slice(start_forecast, end_forecast)
              .map((item, index) => {
                return (
                  <WeatherPrediction
                    key={index}
                    date={formatDateToWords(item.date)}
                    condition={item.day.condition.text}
                    high_temp={tempConverter(
                      props.toggle_status,
                      item.day.maxtemp_c
                    )}
                    low_temp={tempConverter(
                      props.toggle_status,
                      item.day.mintemp_c
                    )}
                  />
                );
              })}
          <button onClick={traverseWeatherForecast} className="btn">
            Next 5 days
          </button>
        </div>
      </div>
    </div>
  );
}

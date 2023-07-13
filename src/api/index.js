import axios from "axios";

export const getWeatherDetails = async (coordinates) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${coordinates.lat},${coordinates.lon}&aqi=yes
      `
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getForeCastDetails = async (coordinates) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${coordinates.lat},${coordinates.lon}&days=10&aqi=no&alerts=no
      `
    );
    return data;
  } catch (error) {
    throw error;
  }
};

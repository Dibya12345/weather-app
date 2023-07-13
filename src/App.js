import "./App.css";
import { useEffect, useState } from "react";
import LocationError from "./pages/LocationError";
import Dashboard from "./pages/Dashboard";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setIsGeolocationEnabled(true);
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setIsGeolocationEnabled(false);
          }
        );
      } else {
        setIsGeolocationEnabled(false);
      }
    };
    getLocation();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        {isGeolocationEnabled ? (
          <Dashboard latitude={latitude} longitude={longitude} />
        ) : (
          <LocationError />
        )}
      </div>
    </Provider>
  );
}

export default App;

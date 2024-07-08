import { useEffect, useState } from "react";

const useWeatherData = (location, useGeo) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (useGeo) {
      const handleSuccess = (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      };

      const handleError = () => {
        setError("Geolocation not supported or permission denied.");
        setLoading(false);
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      } else {
        setError("Geolocation not supported by this browser.");
        setLoading(false);
      }
    }
  }, [useGeo]);

  useEffect(() => {
    const getCityName = async () => {
      if (coords) {
        try {
          const response = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=pk.9fdc1490ae4d809ce9ece84b2c3bda46&lat=${coords.latitude}&lon=${coords.longitude}&format=json&accept-language=en`,
            { mode: 'cors' }
          );
          const data = await response.json();
          const cityName = data.address.city || data.address.village || null;
          if (cityName) {
            setCity(normalizeString(cityName));
          } else {
            throw new Error("City name not found in geolocation response.");
          }
        } catch (error) {
          setError("Failed to fetch city name.");
          setLoading(false);
        }
      }
    };

    getCityName();
  }, [coords]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      let apiUrl;

      if (city) {
        apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=b97a7289e4e24edbbb8101327242006&q=${city}&days=3&aqi=yes`;
      } else if (!useGeo) {
        apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=b97a7289e4e24edbbb8101327242006&q=${location}&days=3&aqi=yes`;
      } else {
        return;
      }

      try {
        const response = await fetch(apiUrl, { mode: "cors" });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setForecast(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, location, useGeo]);

  return { forecast, error, loading };
};

export default useWeatherData;

// Normalize special characters to ones used by the weather API
function normalizeString(str) {
    const iMap = {
      'ð': 'd',
      'ı': 'i',
      'Ł': 'L',
      'ł': 'l',
      'ø': 'o',
      'ß': 'ss',
      'ü': 'ue'
    };
    const iRegex = new RegExp(Object.keys(iMap).join('|'), 'g');
    return str
      .replace(iRegex, (m) => iMap[m])
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, '');
  }
  
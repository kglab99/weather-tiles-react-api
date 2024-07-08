import { useEffect, useState } from "react";

const FetchWithIP = (location = "auto:ip") => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=b97a7289e4e24edbbb8101327242006&q=${location}&days=3&aqi=yes`;

    setLoading(true); // Set loading state to true before fetching

    fetch(apiUrl, { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setForecast(data); // Update forecast state with fetched data
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        setError(error.message); // Set error state if fetch fails
        setForecast(null); // Clear forecast data on error
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after fetch completes
      });
  }, [location]); // Depend on 'location' state to re-run effect on change

  return { forecast, error, loading };
};

export default FetchWithIP;

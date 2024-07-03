import { useEffect, useState } from "react";

const FetchWithIP = () => {
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.weatherapi.com/v1/forecast.json?key=b97a7289e4e24edbbb8101327242006&q=auto:ip&days=8&aqi=yes", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setForecast(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    return { forecast, error, loading };
  };

  export default FetchWithIP
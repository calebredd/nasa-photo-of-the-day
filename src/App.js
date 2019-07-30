import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./Components/NasaCard";

function App() {
  const today = new Date();
  const day = today.getFullYear() + '-' + ("0"+(today.getMonth() + 1)).slice(-2) + '-' + ("0"+today.getDate()).slice(-2);
  const [url, setUrl] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [date, setDate] = useState([{day}]);

  useEffect(() => {
    axios
      // .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date={date}")
      .get("db.json")
      .then(api => {
        console.log(api.data);
        setTitle(api.data.title);
        setExplanation(api.data.explanation);
        return setUrl(api.data.url);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <NasaCard title={title} url={url} explanation={explanation} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./Components/NasaCard";
import DisplayCard from "./Components/DisplayCard";
import { Container } from "semantic-ui-react";

import "./App.css";
//import "semantic-ui-react/semantic.min.css";

function App() {
  const today = new Date();
  const day =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
  const [url, setUrl] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [copyright, setCopyright] = useState([]);
  const [date, setDate] = useState(day);
  const randomDate = () => {
    return (
      today.getFullYear() -
      Math.floor(Math.random() * Math.floor(10)) +
      "-" +
      ("0" + (Math.floor(Math.random() * Math.floor(12)) + 1)).slice(-2) +
      "-" +
      ("0" + (Math.floor(Math.random() * Math.floor(28)) + 1)).slice(-2)
    );
  };
  // console.log({date});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date)
      // .get("db.json")
      .then(api => {
        // console.log(api.data);
        setTitle(api.data.title);
        setExplanation(api.data.explanation);
        setUrl(api.data.url);
        setCopyright(api.data.copyright);
        if (api.data.url.slice(-3) !== "jpg") return setDate(randomDate());
        return;
      })
      .catch(err => console.log(err));
  }, [date]);
  return (
    <Container className="App" fluid={true}>
      <DisplayCard date={date} setDate={setDate} randomDate={randomDate} />

      <NasaCard
        title={title}
        url={url}
        explanation={explanation}
        copyright={copyright}
        date={date}
      />
    </Container>
  );
}

export default App;

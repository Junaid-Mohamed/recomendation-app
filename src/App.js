import { recomendationCollection } from "./recomendationCollection";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [selectedTopicButton, setTopicButton] = useState(0);
  const [selectedGenreButton, setGenreButton] = useState(0);
  const [selectedtopic, setTopic] = useState("Books");
  const [selectedGenre, setGenre] = useState("Javascript");
  // const [buttonColor, setColor] = useState("");

  // function handleSelectedButton(index) {
  //   setTopicButton(index);
  // }

  // console.log(selectedTopicButton);

  function handleTopicClicked(topic, index) {
    setTopicButton(index);

    setTopic(topic);
    if (topic === "Books") {
      setGenre("Javascript");
      setGenreButton(0);
    } else if (topic === "Travel") {
      setGenre("Ecotourism");
      setGenreButton(2);
    } else {
      setGenre("Indian");
      setGenreButton(0);
    }
    // console.log(recomendationCollection[topic]);
    // setGenre(recomendationCollection[topic][0]);
  }

  function handleClick(event) {
    console.log(event.target);
  }

  function handleGenreClicked(genre, index) {
    setGenreButton(index);
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Recomendation App</h1>
      <p>
        <small>Select a topic to be recomended</small>
      </p>
      {Object.keys(recomendationCollection).map((topic, index) => (
        <button
          // style={{ backgroundColor: buttonColor }}
          className="topicButton"
          style={{
            backgroundColor:
              selectedTopicButton === index ? "beige" : "aquamarine",
          }}
          key={topic}
          id={topic}
          onClick={() => {
            handleTopicClicked(topic, index);
          }}
        >
          {topic}
        </button>
      ))}
      <hr />
      {Object.keys(recomendationCollection[selectedtopic]).map(
        (genre, index) => (
          <button
            className="genreButton"
            style={{
              backgroundColor:
                selectedGenreButton === index ? "beige" : "aquamarine",
            }}
            key={genre}
            onClick={() => handleGenreClicked(genre, index)}
          >
            {genre}
          </button>
        ),
      )}
      <hr />
      {
        <div style={{ textAlign: "left" }}>
          {/* {console.log(recomendationCollection[selectedtopic][selectedGenre])} */}
          <ul className="list">
            {recomendationCollection[selectedtopic][selectedGenre].map(
              (item) => (
                <li key={item.name}>
                  <div style={{ fontSize: "large", margin: "0.5rem 0rem" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "small" }}>{item.ratings}</div>
                </li>
              ),
            )}
          </ul>
        </div>
      }
    </div>
  );
}

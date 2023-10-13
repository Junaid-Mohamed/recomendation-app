import { recomendationCollection } from "./recomendationCollection";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [selectedtopic, setTopic] = useState("Books");
  const [selectedGenre, setGenre] = useState("Javascript");
  // const [buttonColor, setColor] = useState("");

  function handleTopicClicked(topic) {
    // console.log(Object.keys(recomendationCollection[topic]));
    setTopic(topic);
    if (topic === "Books") {
      setGenre("Javascript");
    } else if (topic === "Travel") {
      setGenre("Ecotourism");
    } else {
      setGenre("food1");
    }
    // console.log(recomendationCollection[topic]);
    // setGenre(recomendationCollection[topic][0]);
  }

  function handleGenreClicked(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Recomendation App</h1>
      <p>
        <small>Select a topic to be recomended</small>
      </p>
      {Object.keys(recomendationCollection).map((topic) => (
        <button
          // style={{ backgroundColor: buttonColor }}
          className="topicButton"
          key={topic}
          onClick={() => handleTopicClicked(topic)}
        >
          {topic}
        </button>
      ))}
      <hr />
      {Object.keys(recomendationCollection[selectedtopic]).map((genre) => (
        <button
          className="genreButton"
          key={genre}
          onClick={() => handleGenreClicked(genre)}
        >
          {genre}
        </button>
      ))}
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
              )
            )}
          </ul>
        </div>
      }
    </div>
  );
}

// import memesData from "./memesData.js"; // this file is not being used anymore
import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  // const [memeImage, setMemeImage] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          {/* <label style={{ display: "block" }} htmlFor="top-text">
            Top Text
          </label> */}
          <input
            id="top-text"
            type="text"
            placeholder="Top Text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* <label style={{ display: "block" }} htmlFor="bottom-text">
            Bottom Text
          </label> */}
          <input
            id="bottom-text"
            type="text"
            placeholder="Bottom Text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;

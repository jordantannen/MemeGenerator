import React from "react";
import memesData from "../memesData";

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage(){
        const data = memesData.data.memes;
        setMemeImage(data[Math.floor(Math.random() * data.length)].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text"/>
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme--image" alt="" />
        </main>
    )
}
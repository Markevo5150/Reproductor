import React from "react"; 
import '../My stylesheet/Musicplayer.css';

function Musicplayer () {
    return (
        <div className="container-musicplayer">
            <img src= {require("../Album covers/albumcover-Come as you are.jpg")} alt="Album-Cover"/>
           <p className="track-name">Come as you are</p>
           <p className="artist-name">Nirvana</p>
           <div className="audio-controls">
            <audio controls></audio>
           </div>
           <div className="lyrics">
            Lyrics
           </div>
        </div>
    );
}

export default Musicplayer
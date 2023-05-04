import React from "react";
import "../My stylesheet/Musicplayer.css";
import { SlArrowDown } from "react-icons/sl";
import { AiFillFastBackward } from "react-icons/ai";
import { AiOutlineFastForward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

function Musicplayer() {
  return (
    <div className="container-musicplayer">
      <img
        src={require("../Album covers/albumcover-Come as you are.jpg")}
        alt="Album-Cover"
      />

      <p className="track-name">Come as you are</p>
      <p className="artist-name">Nirvana</p>

      <div className="audio-controls">
        <AiFillFastBackward size="2rem" className="buttonlyrics" />
        <BsFillPlayFill size="2rem" className="buttonlyrics" />
        <AiOutlineFastForward size="2rem" className="buttonlyrics" />
      </div>

      <div className="lyrics">Lyrics</div>
      <SlArrowDown size="2rem" className="buttonlyrics" />
    </div>
  );
}

export default Musicplayer;

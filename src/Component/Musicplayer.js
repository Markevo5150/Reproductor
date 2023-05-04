import React from "react";
import "../My stylesheet/Musicplayer.css";
import { SlArrowDown } from "react-icons/sl";
import { AiFillFastBackward } from "react-icons/ai";
import { AiOutlineFastForward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import DisplayTrack from "./DisplayTrack";

function Musicplayer() {
  return (
    <div className="container-musicplayer">
      <div>
        {/*Album cover*/}
        <img src={require("../Album covers/albumcover-Come as you are.jpg")}alt="Album-Cover"/>
        {/*Song tittle*/}
        <p className="track-name">Come as you are</p>
        <p className="artist-name">Nirvana</p>
        {/*Progress bar*/}
        <div className="progressbar" role="progressbar"></div>
        {/*Control audio*/}
        <DisplayTrack />
        {/*Lyrics*/}
        <div className="lyrics">Lyrics</div>
          <SlArrowDown size="2rem" className="buttonlyrics" />
      </div>
      
    </div>
  );
}

export default Musicplayer;

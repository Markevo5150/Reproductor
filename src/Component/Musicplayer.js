import React from "react";
import "../My stylesheet/Musicplayer.css";
import { SlArrowDown } from "react-icons/sl";
import { AiFillFastBackward } from "react-icons/ai";
import { AiOutlineFastForward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Lyrics from "./Lyrics";

import { useState } from "react";
import { tracks } from "../data/tracks";

function Musicplayer() {
  return (
    <div className="container-musicplayer">
      {/*Album cover*/}
      <img src={require("../data/albumcover-Come as you are.jpg")}alt="Album-Cover"/>
      {/*DisplayTrack*/}
      <DisplayTrack />
      {/*Progress bar*/}
      <ProgressBar />
      {/*Control audio*/}
      <Controls />
      {/*Lyrics*/}
      <div className="lyrics">Lyrics</div>
      <SlArrowDown size="2rem" className="buttonlyrics" />
      <Lyrics />
    </div>
  );
}

export default Musicplayer;

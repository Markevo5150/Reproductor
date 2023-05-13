import React from "react";
import "../My stylesheet/Musicplayer.css";
import { useState } from 'react';
import { tracks } from '../data/tracks';
//Componentes//
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Lyrics from "./Lyrics";


function Musicplayer() {
  const [currentTrack, setCurrentTrack] = useState (tracks[0]);
  
  return (
    <div className="container-musicplayer">
      <DisplayTrack currentTrack={currentTrack} />
      <ProgressBar />
      <Controls />
      <Lyrics />
    </div>
  );
}

export default Musicplayer;

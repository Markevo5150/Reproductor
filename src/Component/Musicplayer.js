import React from "react";
import "../My stylesheet/Musicplayer.css";
import { useState } from 'react';
import { tracks } from '../data/tracks';
//Componentes//
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Lyrics from "./Lyrics";
import AlbumCover from "./AlbumCover";



function Musicplayer() {
  const [currentTrack, setCurrentTrack] = useState (tracks[0]);
  return (
    <div className="container-musicplayer">
      <AlbumCover />
      <DisplayTrack />
      <ProgressBar />
      <Controls />
      <Lyrics />
    </div>
  );
}

export default Musicplayer;

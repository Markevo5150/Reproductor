import React from "react";
import "../My stylesheet/Musicplayer.css";
import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
//Componentes//
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Lyrics from "./Lyrics";


const Musicplayer = () =>{
    const [currentTrack, setCurrentTrack,] = useState (tracks[0]);
    const audioRef = useRef();
    return (
      <div className="container-musicplayer">
        <div className="inner">
          <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          />
          <Controls audioRef={audioRef}/>
          <ProgressBar/>
        </div>
      </div>
    );
  };

export default Musicplayer;

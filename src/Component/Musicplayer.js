import React from "react";
import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
import "../My stylesheet/Musicplayer.css";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

const Musicplayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div className="container-musicplayer">
      <div className="inner">
        <DisplayTrack
          currentTrack={ currentTrack }
          audioRef={ audioRef }
          setDuration={ setDuration }
          progressBarRef={ progressBarRef }
        />
        <Controls
          audioRef={ audioRef }
          progressBarRef={ progressBarRef }
          duration={ duration }
          tracks={ tracks }
          trackIndex={ trackIndex }
          setTimeProgress={ setTimeProgress }
          setTrackIndex={ setTrackIndex }
          setCurrentTrack={ setCurrentTrack }
        />
        <ProgressBar 
          progressBarRef={ progressBarRef }
          audioRef={ audioRef }
          timeProgress={ timeProgress }
          duration={ duration }
        />
      </div>
    </div>
  );
};

export default Musicplayer;

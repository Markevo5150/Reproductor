import { useState } from "react";
import { Icon } from "../Icon";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

//Awesome Icons//


const DisplayTrack = ({ 
    currentTrack, 
    audioRef,
    setDuration,
    progressBarRef,
}) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
      };

    return (
<div>
      <audio 
      src={currentTrack.src} 
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      />
      <div className="audio-info">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
              <Icon  css={icon} icon={faMusic}/>
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
    );
  };
  export default DisplayTrack;
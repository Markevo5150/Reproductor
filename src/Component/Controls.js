import "../My stylesheet/Musicplayer.css";
import { Icon } from "./icon";
import { useEffect, useRef, useState, useCallback } from 'react';
import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => { 
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  // Handle the next and previous track
  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;

  };
//next
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
//Back
const handlePrevious = () => {
  if (trackIndex === 0) {
    let lastTrackIndex = tracks.length - 1;
    setTrackIndex(lastTrackIndex);
    setCurrentTrack(tracks[lastTrackIndex]);
  } else {
    setTrackIndex((prev) => prev - 1);
    setCurrentTrack(tracks[trackIndex - 1]);
  }
};
  return (
    <div>
      <div className="volume">
      <button>
        <Icon css='icon' icon={faVolumeHigh} /> 
      </button>
      </div>
      <button className="button" onClick={skipBackward}>
        <Icon css='icon' icon={faBackwardStep} />
      </button>
      <button className="button" onClick={togglePlayPause}>
        {isPlaying ? <Icon css='icon' icon={faCirclePause} /> : <Icon css='icon' icon={faCirclePlay} />}
      </button>
      <button className="button" onClick={skipForward}>
        <Icon css='icon' icon={faForwardStep} />
      </button>
    </div>
  );
};

export default Controls;

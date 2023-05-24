import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

import {Icon} from '../Icon'
import { icon } from "@fortawesome/fontawesome-svg-core";
import { 
    faBackwardStep, 
    faForwardStep, 
    faPause, 
    faPlay, 
    faVolumeHigh, 
    faVolumeLow, 
    faVolumeXmark 
} from "@fortawesome/free-solid-svg-icons";

const Controls = ({ 
    audioRef,
    progressBarRef,
    duration,
    setTimeProgress,
    trackIndex,
    tracks,
    setTrackIndex,
    setCurrentTrack,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    // requestAnimationFrame API
    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            "--range-progress",
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

    // Play and Pause Effect
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    // Skip forward and backward
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

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
          audioRef.current.muted = muteVolume;
        }
      }, [volume, audioRef, muteVolume]);

    return (
        <div className="controls-wrapper">
            <div className="controls">
                <button onClick={handlePrevious}>
                    <Icon icon={faBackwardStep} />
                </button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? (
                        <Icon icon={faPause} />
                    ) : (
                        <Icon icon={faPlay} />
                    )}
                </button>
                <button onClick={handleNext}>
                    <Icon icon={faForwardStep} />
                </button>
            </div>
            <div className="volume">
            <button onClick={() => setMuteVolume((prev) => !prev)}>
                {muteVolume || volume < 5 ? (
                    <Icon icon={faVolumeXmark}/>
                        ) : volume < 40 ? (
                    <Icon icon={faVolumeLow}/>
                    ) : (
                    <Icon icon={faVolumeHigh}/>
                    )}
            </button>
                    <input
                       type="range"
                       min={0}
                       max={100}
                       value={volume}
                       onChange={(e) => setVolume(e.target.value)} 
                     />
            </div>
        </div>
    );
};

export default Controls;

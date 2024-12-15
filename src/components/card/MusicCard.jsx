import React, { useRef, useState } from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import "./MusicCard.scss";
import { EnglishMusicData } from '../../EnglishMusicData';

function MusicCard() {

    const musicLists = EnglishMusicData

    const [currentMusicDetails, setCurrentMusicDetails] = useState({
        songName: "Senorita",
        songArtist: "Shown",
        songSrc: "./src/assets/Track/Senorita.mp3",
        songPoster: "./src/assets/imgs/Senorita.jpg"
    })

    const [audioProgress, setAudioProgress] = useState(0)
    const [isAudioPlaying, setisAudioPlaying] = useState(false)
    const [musicIndex, setmusicIndex] = useState(0)
    const [musicTotalTime, setMusicTotalTime] = useState('00 : 00')
    const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00")

    const currentAudio = useRef()

    const handleMusicPrograssBar = (e) =>{
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }

    const handleAudioPlay = ()=>{
        if(currentAudio.current.paused){
            currentAudio.current.play();
            setisAudioPlaying(true)
        }
        else{
            currentAudio.current.pause();
            setisAudioPlaying(false)
        }
    }


    const handleNextSong = ()=>{
        if(musicIndex >= musicLists.length - 1){
            let setNumber = 0;
            setmusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber)
        }
        else{
            let setNumber = musicIndex + 1;
            setmusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber)
        }
    }

    const handlePrevSong = ()=>{
        if(musicIndex === 0){
            let setNumber = musicLists.length - 1;
            setmusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber)
        }
        else{
            let setNumber = musicIndex - 1;
            setmusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber)
        }
    }

    const handleMusicTitlePlay = (musicObj)=>{
        currentAudio.current.src = musicObj.songSrc;
        currentAudio.current.play()
        setCurrentMusicDetails(
            {
                songName: musicObj.songName,
                songArtist: musicObj.songArtist,
                songSrc: musicObj.songSrc,
                songPoster: musicObj.songPoster
            }
        )
        setisAudioPlaying(true)
    }

    const updateCurrentMusicDetails = (number)=>{
        let musicObject = musicLists[number]
        currentAudio.current.src = musicObject.songSrc;
        currentAudio.current.play()
        setCurrentMusicDetails(
            {
                songName: musicObject.songName,
                songArtist: musicObject.songArtist,
                songSrc: musicObject.songSrc,
                songPoster: musicObject.songPoster
            }
        )
        setisAudioPlaying(true)
    }

    const handleAudioUpdate = ()=>{
        let minutes = Math.floor(currentAudio.current.duration / 60);
        let seconds = Math.floor(currentAudio.current.duration % 60);

        let totalTime = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
        setMusicTotalTime(totalTime);


        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec = Math.floor(currentAudio.current.currentTime % 60);

        let currentTotalTime = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(currentTotalTime);

        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress)
    }
    return (
        <div className="container">
            <div className='left'>
                <div className="card">
                    <audio src="./src/assets/Track/Senorita.mp3" ref={currentAudio} onEnded={handleNextSong} 
                    onTimeUpdate={handleAudioUpdate}></audio>
                    <img className='poster' src={currentMusicDetails.songPoster} alt="Music Poster" />
                    <div className="bottom">
                        <h2 className='title'>{currentMusicDetails.songName}</h2>
                        <p className='artist'>{currentMusicDetails.songArtist}</p>
                        <Slider
                            className='progressBar'
                            aria-label="Progress"
                            value={audioProgress}
                            onChange={handleMusicPrograssBar}
                            style={{color: 'white'}}
                        />
                        <div className="durationContainer">
                            <p className='musicCurrentTime'>{musicCurrentTime}</p>
                            <p className='musicTotalTime'>{musicTotalTime}</p>
                        </div>
                        <div className="controls">
                            <SkipPreviousIcon className='icon' onClick={handlePrevSong}/>
                            {
                                isAudioPlaying ? <PauseIcon className='icon' onClick={handleAudioPlay}/> : <PlayArrowIcon className='icon' onClick={handleAudioPlay}/>
                            }
                            <SkipNextIcon className='icon' onClick={handleNextSong}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="musicLists">
                    {musicLists.map((music)=>{
                        return(
                            <>
                                <li key={Math.floor(Math.random() * 100)} onClick={()=>{
                                    handleMusicTitlePlay(music)
                                }}><img src={music.songPoster} alt="" />{music.songName} -{music.songArtist}</li>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MusicCard

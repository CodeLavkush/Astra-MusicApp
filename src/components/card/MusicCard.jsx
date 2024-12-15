import React, { useRef, useState } from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import "./MusicCard.scss";

function MusicCard() {

    const musicLists = [
        {
            songName: "Senorita",
            songArtist: "Shown",
            songSrc: "./src/assets/Track/Senorita.mp3",
            songPoster: "./src/assets/imgs/Senorita.jpg"
        },
        {
            songName: "Friends",
            songArtist: "Anne Marine",
            songSrc: "./src/assets/Track/Friends.mp3",
            songPoster: "./src/assets/imgs/Friends.jpg"
        },
        {
            songName: "Attention",
            songArtist: "Charlie Puth",
            songSrc: "./src/assets/Track/Attention.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273897f73256b9128a9d70eaf66"
        },
        {
            songName: "Believer",
            songArtist: "Imagine Dragons",
            songSrc: "./src/assets/Track/Believer.mp3",
            songPoster: "https://cdn-images.dzcdn.net/images/cover/feb7d661b14f4b4950cf8f0b9d433a03/0x1900-000000-80-0-0.jpg"
        },
        {
            songName: "Closer",
            songArtist: "Chainsmokers",
            songSrc: "./src/assets/Track/Closer.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453"
        },
        {
            songName: "Dance Monkey",
            songArtist: "Tones and I",
            songSrc: "./src/assets/Track/Dance Monkey.mp3",
            songPoster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dance_Monkey_by_Tones_and_I.jpg"
        },
        {
            songName: "Despacito - Remix",
            songArtist: "Justin Bieber, Luis Fonsi",
            songSrc: "./src/assets/Track/Despacito - Justin Bieber.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273a6a335d613d151c626895a83"
        },
        {
            songName: "Despacito",
            songArtist: "Luis Fonsi",
            songSrc: "./src/assets/Track/Despacito.mp3",
            songPoster: "https://upload.wikimedia.org/wikipedia/en/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png"
        },
        {
            songName: "Havana",
            songArtist: "Camila cabello",
            songSrc: "./src/assets/Track/Havana.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273d93cf4d07ba50d7b32ca7c44"
        },
        {
            songName: "How you like that",
            songArtist: "BlackPink",
            songSrc: "./src/assets/Track/How you like that.mp3",
            songPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6LhgYwaEVU0TxaQqaCPyXIb8TCyAaPwVyA&s"
        },
        {
            songName: "Ignite",
            songArtist: "K-391",
            songSrc: "./src/assets/Track/ignite.mp3",
            songPoster: "https://upload.wikimedia.org/wikipedia/en/2/21/K-391_-_Ignite.png"
        },
        {
            songName: "New Rules",
            songArtist: "Dua lipa",
            songSrc: "./src/assets/Track/new rules.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc"
        },
        {
            songName: "Standing by you",
            songArtist: "Nish",
            songSrc: "./src/assets/Track/Stading by you.mp3",
            songPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBC_jyFF_PhQ6_ROlsE2iyQ51kYLJNXXNAQg&s"
        },
        {
            songName: "Satisfya",
            songArtist: "Imarn Khan",
            songSrc: "./src/assets/Track/Satisfy.mp3",
            songPoster: "https://i1.sndcdn.com/artworks-hwnBmzdwWili28GY-sSiYvA-t500x500.jpg"
        },
        {
            songName: "Shape of you",
            songArtist: "Ed Sheeran",
            songSrc: "./src/assets/Track/Shape of you.mp3",
            songPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4u9vkd2RW6J8eRmDZ2EmIpP2Fhy2bWvhwpg&s"
        },
        {
            songName: "Someone Else",
            songArtist: "Rezz, Grabbitz",
            songSrc: "./src/assets/Track/someone else.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b2735f6da0bbb86a97c0870822ea"
        },
        {
            songName: "Sunflower",
            songArtist: "Post Malone and Swae Lee",
            songSrc: "./src/assets/Track/sunflower.mp3",
            songPoster: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
        },
        {
            songName: "Taki Taki",
            songArtist: "DJ Snake, Selena Gomez, Ozuna, Cardi B",
            songSrc: "./src/assets/Track/taki taki.mp3",
            songPoster: "https://m.media-amazon.com/images/M/MV5BYTUyMGQ5MjUtZDYxZi00ZTkyLTg4YWMtOTRhNzg0NTMzNzMzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            songName: "Warriors",
            songArtist: "Imagine Dragons",
            songSrc: "./src/assets/Track/warriors.mp3",
            songPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4pkF4WMndsAdhmc004SK6zT4QDzXXbyrBA&s"
        },
        {
            songName: "Wolves",
            songArtist: "Marshmello and Selena Gome",
            songSrc: "./src/assets/Track/wolves.mp3",
            songPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0FYBH7FtYUcPTGwqyK3FAcWZWfu-9TwSpQ&s"
        }
    
    ]

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

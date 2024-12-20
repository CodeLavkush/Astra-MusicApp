import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import EnglishSongs from "../../EnglishSongs.js"

function english() {
  return <MusicCard MusicDB={EnglishSongs} imgURL={"../../assets/imgs/bg.jpg"}/>
}

export default english

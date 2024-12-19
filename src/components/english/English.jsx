import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import EnglishSongs from "../../EnglishSongs.js"

function english() {
  return (
    <div>
      <MusicCard MusicDB={EnglishSongs} imgURL={"../../assets/imgs/bg.jpg"}/>
    </div>
  )
}

export default english

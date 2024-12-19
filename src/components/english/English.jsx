import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import EnglishSongs from "../../EnglishSongs.js"

function english() {
  return (
    <div>
      <MusicCard MusicDB={EnglishSongs}/>
    </div>
  )
}

export default english

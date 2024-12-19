import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import LoveSongs from "../../LoveSongs.js"

function love() {
  return (
    <div>
      <MusicCard MusicDB={LoveSongs} imgURL={"../../assets/imgs/bg_3.jpeg"}/>
    </div>
  )
}

export default love

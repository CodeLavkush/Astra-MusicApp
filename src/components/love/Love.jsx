import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import LoveSongs from "../../LoveSongs.js"

function love() {
  return <MusicCard MusicDB={LoveSongs} imgURL={"../../assets/imgs/bg_3.jpeg"}/>
}

export default love

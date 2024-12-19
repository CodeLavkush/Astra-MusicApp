import React from 'react'
import MusicCard from "../card/MusicCard.jsx"
import BhojpuriSongs from "../../BhojpuriSongs.js"

function bhojpuri() {
  return (
    <div>
      <MusicCard MusicDB={BhojpuriSongs} imgURL={"../../assets/imgs/bg_2.jpg"}/>
    </div>
  )
}

export default bhojpuri

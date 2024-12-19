import React from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'

function home() {
  return (
    <div className='home-container'>
        <div className="left">
        </div>
        <div className="right">
        </div>
        <div className="tracks">
            <div className="track-love track-bg">
                <Link to="/love">Love</Link>
                <img src="./assets/imgs/earbuds.svg" alt="" />
            </div>
            <div className="track-bhojpuri track-bg">
                <Link to="/bhojpuri">Bhojpuri</Link>
                <img src="./assets/imgs/headphone.svg" alt="" />
            </div>
            <div className="track-english track-bg">
                <Link to="/english">English</Link>
                <img src="./assets/imgs/earphone.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default home

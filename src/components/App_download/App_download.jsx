import React from 'react'
import './App-download.css'
import { assets } from '../../assets/assets'


const App_download = () => {
  return (
    <div className='App-download'>
        <p>
            Download the app now! <br />Food-hub app is available on <span>Play Store</span> and <span>App Store</span>
        </p>
        <div className="App-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default App_download
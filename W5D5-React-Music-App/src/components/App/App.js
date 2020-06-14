import React, { useState } from "react"
import Container from "../Container/Container"
import About from "./About"
import "./App.scss"

const App = (props) => {
  const [aboutOn, setAboutOn] = useState(false)
  const [containerOn, setContainerOn] = useState(true)

  const toggleAbout = () => {
    setContainerOn(false)
    setAboutOn(true)
  }

  const toggleMusicList = () => {
    setContainerOn(true)
    setAboutOn(false)
  }

  return (
    <div>
      <div className="header">
        <button onClick={() => toggleMusicList()}>MusicList</button>

        <button onClick={() => toggleAbout()}>About</button>
      </div>
      <div className={containerOn ? "ContainerOn" : "ContainerOff"}>
        <Container />
      </div>
      <div className={aboutOn ? "AboutOn" : "AboutOff"}>
        <About />
      </div>
    </div>
  )
}

export default App

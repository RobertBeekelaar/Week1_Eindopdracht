import React from "react"
import List from "./List"
// import './MusicList.scss'

const MusicList = (props) => {
  const { musicItems, removeMusicItem } = props

  return (
    <ul className="MusicList">
      <List 
      removeMusicItem={removeMusicItem}
      items={musicItems} />
    </ul>
  )
}

export default MusicList

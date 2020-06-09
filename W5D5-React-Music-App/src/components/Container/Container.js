import React, { useState } from "react"
import Form from "../Form/Form"
import MusicList from "../MusicList/Musiclist"

const Container = (props) => {
  const [musicItems, setMusicItems] = useState([
    {
      id: "1",
      title: "Changes",
      artist: "Tupac",
      genre: "Hiphop",
      rating: "3",
    },
    {
      id: "2",
      title: "I find it hard to say",
      artist: "Lauryn Hill",
      genre: "Hiphop",
      rating: "5",
    },
  ])

  const removeMusicItem = (item) => {
    setMusicItems(musicItems.filter(({ id }) => item.id !== id))
  }

  return (
    <>
      <div>
        <Form setMusicItems={setMusicItems} musicItems={musicItems} />
        <MusicList removeMusicItem={removeMusicItem} musicItems={musicItems} />
      </div>
    </>
  )
}

export default Container

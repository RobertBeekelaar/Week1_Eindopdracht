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
    {
      id: "3",
      title: "Isn't she lovely",
      artist: "Stevie Wonder",
      genre: "Soul",
      rating: "4",
    },
    {
      id: "4",
      title: "Love of my life",
      artist: "Erykah Badu",
      genre: "Hiphop",
      rating: "4",
    },
    {
      id: "5",
      title: "First of the Month",
      artist: "Bone Thugs",
      genre: "Hiphop",
      rating: "3",
    },
    {
      id: "6",
      title: "Block party",
      artist: "Chuck Brown",
      genre: "Soul",
      rating: "5",
    },
    {
      id: "7",
      title: "Man in the mirror",
      artist: "Michael Jackson",
      genre: "Pop",
      rating: "5",
    },
    {
      id: "8",
      title: "Sweetest taboo",
      artist: "Sade",
      genre: "Soul",
      rating: "4",
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

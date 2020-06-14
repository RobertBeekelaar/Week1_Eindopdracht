import React, { useState } from "react"
import "./Form.scss"
import "../MusicList/MusicList.scss"

const Form = (props) => {
  const { setMusicItems, musicItems } = props

  const [songTitle, setSongTitle] = useState("")
  const [songArtist, setSongArtist] = useState("")
  const [songGenre, setSongGenre] = useState("")
  const [songRating, setSongRating] = useState("")

  const addMusicItems = (ev) => {
    ev.preventDefault()

    if (!songTitle || !songArtist || !songGenre || !songRating) {
      alert("You have not added all the details")
      return
    }

    const item = {
      id: musicItems.length + 1,
      title: songTitle,
      artist: songArtist,
      genre: songGenre,
      rating: songRating,
    }
    setMusicItems(musicItems.concat(item))
    setSongTitle("")
    setSongArtist("")
    setSongGenre("")
    setSongRating("")
  }
  return (
    <form className="Form" onSubmit={addMusicItems}>
      <input
        placeholder="song-title"
        type="text"
        value={songTitle}
        name="title"
        onChange={(ev) => setSongTitle(ev.target.value)}
      />
      <input
        placeholder="artist-name"
        type="text"
        value={songArtist}
        name="artist"
        onChange={(ev) => setSongArtist(ev.target.value)}
      />
      <select
        value={songGenre}
        name="genre"
        onChange={(ev) => setSongGenre(ev.target.value)}
      >
        <option hidden disabled={songGenre !== ""}>
          Choose genre
        </option>
        <option value="Hiphop">Hiphop</option>
        <option value="Rock">Rock</option>
        <option value="Techno">Techno</option>
        <option value="House">House</option>
        <option value="Dub">Dub</option>
        <option value="Pop">Pop</option>
        <option value="Soul">Soul</option>
        <option value="Funk">Funk</option>
        <option value="Reggae">Reggae</option>
      </select>

      <select
        value={songRating}
        name="rating"
        onChange={(ev) => setSongRating(ev.target.value)}
      >
        <option hidden disabled={songRating !== ""}>
          Choose rating
        </option>
        <option value="★">1 star</option>
        <option value="★★">2 stars</option>
        <option value="★★★">3 stars</option>
        <option value="★★★★">4 stars</option>
        <option value="★★★★★">5 stars</option>
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

export default Form

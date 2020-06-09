import React from "react"

const ListItem = (props) => {
  const { item, handleRemoveMusicItem } = props
  const { artist, title, genre, rating, id, } = item

  return (


    <li
      className="ListItem"
      key={id}
      value={title}
    >
      <div class="title">{title}</div>
      <div class="artist">{artist}</div>
      <div>{genre}</div>
      <div>{rating}</div>
      <div><button onClick={() => handleRemoveMusicItem(item)}>remove</button></div>
    </li>
  )
}

export default ListItem
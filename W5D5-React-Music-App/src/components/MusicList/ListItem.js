import React from "react"

const ListItem = (props) => {
  const { item, handleRemoveMusicItem } = props
  const { artist, title, genre, rating, id } = item

  return (
    <li className="ListItem" key={id} value={title}>
      <div className="title">{title}</div>
      <div className="artist">{artist}</div>
      <div>{genre}</div>
      <div className="rating">{rating}</div>
      <div>
        <button onClick={() => handleRemoveMusicItem(item)}>
          <span role="img">✖️</span>
        </button>
      </div>
    </li>
  )
}

export default ListItem

import React from "react"
import ListItem from "./ListItem"

const List = (props) => {
  const { items, removeMusicItem } = props

  const listItems = items.map((item) => (
    <ListItem
      handleRemoveMusicItem={removeMusicItem}
      key={item.id}
      item={item}
    />
  ))

  return (
    <div className="List">
      <ul>{listItems}</ul>
    </div>
  )
}

export default List

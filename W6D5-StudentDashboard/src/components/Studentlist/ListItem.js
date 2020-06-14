import React from "react"
import "./Studentlist.scss"

const ListItem = (props) => {
  const { handleFilterStudent, item } = props

  return (
    <div className="ListItem">
      <button
        className="NameButton"
        value={item.naam}
        onClick={(ev) => handleFilterStudent(ev.target.value)}
      >
        {item.naam}
      </button>
    </div>
  )
}

export default ListItem

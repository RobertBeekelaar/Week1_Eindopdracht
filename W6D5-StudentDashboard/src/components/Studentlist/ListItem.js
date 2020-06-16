import React from "react"
import "./Studentlist.scss"
import { Link } from "react-router-dom"

const ListItem = (props) => {
  const { handleFilterStudent, handlefilterStudentInfo, item } = props

  const buttonFunction = (ev) => {
    handleFilterStudent(ev.target.value);
    handlefilterStudentInfo(ev.target.value)
  }

  return (
    <div className="ListItem">
      <Link to={`/${item.naam}`}>
        <button
          className="NameButton"
          value={item.naam}
          onClick={buttonFunction}
        >
          {item.naam}
        </button>
      </Link>
    </div>
  )
}

export default ListItem

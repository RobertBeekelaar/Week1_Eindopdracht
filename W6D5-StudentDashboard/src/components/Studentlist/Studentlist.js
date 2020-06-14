import React from "react"
import Students from "../Container/Students"
import ListItem from "./ListItem"
import "./Studentlist.scss"

const Studentlist = (props) => {
  const { filterStudent, allStudents, moeilijk } = props

  const nameArray = Array.from(new Set(Students.map((a) => a.naam))).map(
    (naam) => {
      return Students.find((a) => a.naam === naam)
    }
  )

  const studentNames = nameArray.map((item) => (
    <ListItem key={item.naam} handleFilterStudent={filterStudent} item={item} />
  ))

  return (
    <div>
      <div className="Title">Winc student dashboard<img src="../../favicon2.png"/></div>
      <div className="topbuttons">
        <button className="difficultyButton">Difficulty ratings</button>
        <button className="bothButton">Both ratings</button>
        <button className="funButton">Fun ratings</button>
      </div>
      <div className="Studentlist">
        <button onClick={() => allStudents()} className="NameButton ">
          Show all
        </button>
        {studentNames}
      </div>
    </div>
  )
}

export default Studentlist

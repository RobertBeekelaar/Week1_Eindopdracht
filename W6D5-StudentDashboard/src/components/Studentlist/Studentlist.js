import React from "react"
import Students from "../Container/Students"
import ListItem from "./ListItem"
import "./Studentlist.scss"
import { Link } from "react-router-dom"

const Studentlist = (props) => {
  const { filterStudent, filterStudentInfo } = props

  const nameArray = Array.from(new Set(Students.map((a) => a.naam))).map(
    (naam) => {
      return Students.find((a) => a.naam === naam)
    }
  )

  const studentNames = nameArray.map((item) => (
    <ListItem
      key={item.naam}
      handleFilterStudent={filterStudent}
      handlefilterStudentInfo={filterStudentInfo}
      item={item}
    />
  ))

  return (
    <div>
      <div className="Header">
        Winc student dashboard
        <img className="headerimage" src="./favicon2.png" />
        <div className="Studentlist">
          <Link to={`/`}>
            <button>Show all</button>
          </Link>
          {studentNames}
        </div>
      </div>
      <div className="Footer">© Robert Beekelaar | Winc Academy 2020</div>
    </div>
  )
}

export default Studentlist

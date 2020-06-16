import React, { useState } from "react"
import Dashboard from "../Dashboard/Dashboard"
import Studentlist from "../Studentlist/Studentlist"
import Students from "./Students"
import "./Container.scss"
import { BrowserRouter as Router, Route } from "react-router-dom"
import StudentRoute from "./StudentRoute"
import StudentInfo from "./StudentInfo"

const Container = () => {
  const [students, setStudents] = useState([])
  const [newStudentInfo, setNewStudentInfo] = useState([
    {
      voornaam: "",
      achternaam: "",
      telefoonnummer: "",
      emailadres: "",
      photo: "",
    },
  ])

  const filterStudent = (item) => {
    setStudents(Students.filter((array) => array.naam === item))
  }

  const filterStudentInfo = (item) => {
    setNewStudentInfo(StudentInfo.filter((array) => array.voornaam === item))
  }

  return (
    <Router>
      <div className="Container">
        <Studentlist
          filterStudent={filterStudent}
          filterStudentInfo={filterStudentInfo}
        />
        <Route
          path="/"
          exact
          render={(props) => <Dashboard {...props} Students={Students} />}
        />
        <Route
          path="/:naam"
          render={(props) => (
            <StudentRoute
              {...props}
              Students={Students}
              students={students}
              setStudents={setStudents}
              newStudentInfo={newStudentInfo}
              setNewStudentInfo={setNewStudentInfo}
            />
          )}
        />
      </div>
    </Router>
  )
}

export default Container

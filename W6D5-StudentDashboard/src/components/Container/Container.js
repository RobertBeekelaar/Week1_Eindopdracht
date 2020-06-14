import React, { useState, useEffect } from "react"
import Dashboard from "./Dashboard"
import Studentlist from "../Studentlist/Studentlist"
import Students from "./Students"
import './Container.scss'

const Container = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    setStudents(Students)
  }, [])

  const filterStudent = (item) => {
    setStudents(Students.filter((array) => array.naam === item))
  }
  console.log(students)

  const allStudents = () => {
    setStudents(Students)
  }

  const moeilijk = () => {
    setStudents(Students.forEach((array) => array.leuk = 0))
  }


  return (
    <div className="Container">
      <Studentlist
        filterStudent={filterStudent}
        students={students}
        allStudents={allStudents}
        moeilijk={moeilijk}
      />
      <Dashboard students={students} setStudents={setStudents} />
    </div>
  )
}

export default Container

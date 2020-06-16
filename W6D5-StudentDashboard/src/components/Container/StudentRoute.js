import React, { useState, useEffect } from "react"
import * as d3 from "d3"
import BarChart from "../Dashboard/BarChart"
import BarChartDifficult from "../Dashboard//BarChartDifficult"
import BarChartFun from "../Dashboard/BarChartFun"
import "./StudentRoute.scss"
import "../Dashboard/Dashboard.scss"
import Students from "./Students"
import StudentInfo from "./StudentInfo"

const StudentRoute = (props) => {
  const {
    match,
    students,
    setStudents,
    newStudentInfo,
    setNewStudentInfo,
  } = props

  const newInfo = newStudentInfo[0]

  useEffect(() => {
    setStudents(Students.filter((array) => array.naam === match.params.naam))
  }, [])

  useEffect(() => {
    setNewStudentInfo(
      StudentInfo.filter((array) => array.voornaam === match.params.naam)
    )
  }, [])

  console.log(newInfo)

  const [BothChartsOn, setBothChartsOn] = useState(true)
  const [DifficultChartOn, setDifficultChartOn] = useState(false)
  const [FunChartOn, setFunChartOn] = useState(false)

  const toggleBothCharts = () => {
    setBothChartsOn(true)
    setDifficultChartOn(false)
    setFunChartOn(false)
  }

  const toggleDifficultChart = () => {
    setBothChartsOn(false)
    setDifficultChartOn(true)
    setFunChartOn(false)
  }

  const toggleFunChart = () => {
    setBothChartsOn(false)
    setDifficultChartOn(false)
    setFunChartOn(true)
  }

  const data = d3
    .nest()
    .key((d) => {
      return d.opdrachtnummer
    })
    .rollup((v) => {
      return {
        moeilijk: d3.mean(v, function (d) {
          return d.moeilijk
        }),
        leuk: d3.mean(v, function (d) {
          return d.leuk
        }),
      }
    })
    .entries(students)
  // console.log(JSON.stringify(data))

  return (
    <div className="Dashboard">
      <div className="topbuttons">
        <button
          className="difficultyButton"
          onClick={() => toggleDifficultChart()}
        >
          Difficulty ratings
        </button>
        <button className="bothButton" onClick={() => toggleBothCharts()}>
          Both ratings
        </button>
        <button className="funButton" onClick={() => toggleFunChart()}>
          Enjoyment ratings
        </button>
      </div>
      <div
        className={DifficultChartOn ? "DifficultChartOn" : "DifficultChartOff"}
      >
        <BarChartDifficult data={data} />
      </div>
      <div className={BothChartsOn ? "BothChartsOn" : "BothChartsOff"}>
        <BarChart data={data} />
      </div>
      <div className={FunChartOn ? "FunChartOn" : "FunChartOff"}>
        <BarChartFun data={data} />
      </div>
      <div className="StudentInfo">
        <span>
          <img className="Profilepic" src={`${newInfo.photo}`} />
        </span>
        <div className="Info">
          More information about the student:
          <br /> <br />
          Name: &nbsp;
          {newInfo.voornaam}&nbsp;{newInfo.achternaam} <br />
          Phone: &nbsp;
          {newInfo.telefoonnummer} <br />
          Email: &nbsp;
          {newInfo.emailadres}
        </div>
      </div>
    </div>
  )
}

export default StudentRoute

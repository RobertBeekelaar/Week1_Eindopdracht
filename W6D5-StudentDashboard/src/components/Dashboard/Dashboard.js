import React, { useState } from "react"
import * as d3 from "d3"
import BarChart from "./BarChart"
import BarChartDifficult from "./BarChartDifficult"
import BarChartFun from "./BarChartFun"
import "./Dashboard.scss"

const Dashboard = (props) => {
  const { Students, match } = props

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
    .entries(Students)

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
      <div className="InfoMain">
        On this page you can see the avarage ratings of the students per
        assignment.
        <br />
        You can check how much they rated each assigment for difficulty and
        enjoyability.
        {match.params.naam}
      </div>
    </div>
  )
}

export default Dashboard

import React from "react"
import { VictoryBar } from "victory"

const BarChart = (props) => {
  const { data } = props

  return <VictoryBar data={data} x="" />
}

export default BarChart

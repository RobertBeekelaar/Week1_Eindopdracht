import React from "react"
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine
} from "victory"
import * as d3 from "d3"
// import BarChart from './BarChart'
import "./Dashboard.scss"

const Dashboard = (props) => {
  const { students } = props

  // const opdrachtGroepen = d3
  //   .nest()
  //   .key((d) => {
  //     return d.opdrachtnummer
  //   })
  //   .entries(students)
  // console.log(opdrachtGroepen)

  // const count = d3.nest().key((d)=> {return d.opdrachtnummer})
  // .rollup((v)=> {return v.length})
  // .entries(students)
  // console.log(JSON.stringify(count))

  // const avgMoeilijk = d3.nest().key((d) => {return d.opdrachtnummer})
  // .rollup((v) => {return d3.mean(v, function (d){return d.moeilijk})})
  // .entries(students)
  // console.log(JSON.stringify(avgMoeilijk))

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
  console.log(JSON.stringify(data))

  return (
    <div className="Dashboard">
      <VictoryChart
        width={1000}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          style={{ tickLabels: { angle: -90, fontSize: 12, padding: 20 } }}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup>
          <VictoryBar
            className="Moeilijk"
            alignment="end"
            data={data}
            x="key"
            y="value.moeilijk"
            barRatio={0.2}
            style={{
              data: {
                fill: "#ecba1e",
              },
            }}
          />
          <VictoryBar
            className="Leuk"
            alignment="start"
            data={data}
            x="key"
            y="value.leuk"
            barRatio={0.2}
            style={{
              data: {
                fill: "#4b90e2",
              },
            }}
          />
        </VictoryGroup>
      </VictoryChart>

      <VictoryChart 
      domainPadding={20}
      width={1000}
      theme={VictoryTheme.material}>
         <VictoryAxis
          style={{ tickLabels: { angle: -90, fontSize: 12, padding: 20 } }}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup>
        <VictoryLine
          style={{
            data: { stroke: "#ecba1e" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data}
          x="key"
          y="value.moeilijk"
        />
         <VictoryLine
          style={{
            data: { stroke: "#4b90e2" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data}
          x="key"
          y="value.leuk"
        />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default Dashboard

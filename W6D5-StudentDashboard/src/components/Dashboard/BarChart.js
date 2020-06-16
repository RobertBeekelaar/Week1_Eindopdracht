import React from "react"
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine,
} from "victory"
import "./Dashboard.scss"

const BarChart = (props) => {
  const { data } = props

  return (
    <div>
      <VictoryChart
        animate={{ duration: 600, easing: "linear" }}
        width={1000}
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          style={{ tickLabels: { angle: -90, fontSize: 12, padding: 20 } }}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup offset={1}>
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
        animate={{ duration: 600, easing: "linear" }}
        domainPadding={10}
        width={1000}
        theme={VictoryTheme.material}
      >
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
export default BarChart

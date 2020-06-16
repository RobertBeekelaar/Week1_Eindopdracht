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

const BarChartDifficult = (props) => {
  const { data } = props

  return (
    <div>
      <VictoryChart
        animate={{ duration: 1000, easing: "linear" }}
        width={1000}
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          style={{ tickLabels: { angle: -90, fontSize: 12, padding: 20 } }}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup>
          <VictoryBar
            className="Moeilijk"
            alignment="start"
            data={data}
            x="key"
            y="value.moeilijk"
            barRatio={0.3}
            style={{
              data: {
                fill: "#ecba1e",
                width: 4,
              },
            }}
          />
        </VictoryGroup>
      </VictoryChart>

      <VictoryChart
        animate={{ duration: 1000, easing: "linear" }}
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
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}
export default BarChartDifficult

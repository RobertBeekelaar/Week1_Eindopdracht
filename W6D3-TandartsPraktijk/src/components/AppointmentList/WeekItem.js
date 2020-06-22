import React from "react"
import "./WeekItem.scss"

const WeekItem = (props) => {
  const { items } = props

  const days = {
    monday: "Maandag",
    tuesday: "Dinsdag",
    wednesday: "Woensdag",
    thursday: "Donderdag",
    friday: "Vrijdag",
  }

  return (
    <div className="WeekItem">
      {Object.values(days).map((day) => (
        <div key={day} className="day">
          <p>{day}</p>
          {items
            .filter((item) => item.props.item.day === day.toLowerCase())
            .sort((a, b) => (a.props.item.time < b.props.item.time ? -1 : 1))}
        </div>
      ))}
    </div>
  )
}

export default WeekItem

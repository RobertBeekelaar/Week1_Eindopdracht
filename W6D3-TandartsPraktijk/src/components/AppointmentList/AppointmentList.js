import React from "react"
import ListItem from "./ListItem"
import WeekItem from "./WeekItem"
import "./AppointmentList.scss"

const AppointmentList = (props) => {
  const {
    appointments,
    removeAppointment,
    availability,
    setAvailability,
  } = props

  const listItems = appointments.map((item) => (
    <ListItem
      handleRemoveAppointment={removeAppointment}
      availability={availability}
      handleSetAvailability={setAvailability}
      key={item.id}
      item={item}
    />
  ))

  // const weeks = { week1: "1", week2: "2", week3: "3", week4: "4" }
  // const weekItems = (listItems) => {
  //   return listItems.props.item.week === weeks.value
  // }
  // console.log(weeks)

  // return (
  //   <div className="AppointmentList">
  //     {Object.entries(weeks).map((week, number) => (
  //       <div key={week}>
  //         <p>{week.key}</p>
  //         {listItems.filter((item) => item.props.item.week === number)}
  //         <WeekItem item={listItems}/>
  //       </div>
  //     ))}
  //   </div>
  // )
  const week1 = (listItems) => {
    return listItems.props.item.week === "1"
  }
  const listItemsWeek1 = listItems.filter(week1)

  const week2 = (listItems) => {
    return listItems.props.item.week === "2"
  }
  const listItemsWeek2 = listItems.filter(week2)

  const week3 = (listItems) => {
    return listItems.props.item.week === "3"
  }
  const listItemsWeek3 = listItems.filter(week3)

  const week4 = (listItems) => {
    return listItems.props.item.week === "4"
  }
  const listItemsWeek4 = listItems.filter(week4)

  return (
    <div className="AppointmentList">
      Week 1
      <div>
        <WeekItem items={listItemsWeek1} />
      </div>
      Week 2
      <div>
        <WeekItem items={listItemsWeek2} />
      </div>
      Week 3
      <div>
        <WeekItem items={listItemsWeek3} />
      </div>
      Week 4
      <div>
        <WeekItem items={listItemsWeek4} />
      </div>
    </div>
  )
}

export default AppointmentList

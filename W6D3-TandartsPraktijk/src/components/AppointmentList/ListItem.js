import React from "react"
import "./ListItem.scss"

const ListItem = (props) => {
  const {
    item,
    handleRemoveAppointment,
    availability,
    handleSetAvailability,
  } = props
  const { id, newpatient, dentist, time, assistent } = item

  const handleToggleAvailability = () => {
    availability.includes(dentist)
      ? handleSetAvailability(availability.filter((e) => e !== dentist))
      : handleSetAvailability(availability.concat(dentist))
  }

  return (
    <li className="ListItem" key={id} value={newpatient}>
      <div className={availability.includes(dentist) ? "timeOff" : "time"}>
        {time} {dentist}
      </div>
      <button className="unavailableButton" onClick={handleToggleAvailability}>
        Set {availability.includes(dentist) ? "available" : "unavailable"}
      </button>
      <div>{assistent}</div>
      <div>Patient: {newpatient}</div>
      <span>
        <button
          className={
            availability.includes(dentist) ? "removebuttonRed" : "removebutton"
          }
          onClick={() => handleRemoveAppointment(item)}
        >
          Afspraak verwijderen
        </button>
      </span>
    </li>
  )
}

export default ListItem

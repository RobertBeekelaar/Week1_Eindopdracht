import React from "react"
import PersonData from "./PersonData"

const PatientNameOption = (props) => {
  const { setNewPatient, newPatient } = props

  const sortedlist = PersonData.sort((a, b) => {
    return a.first_name < b.first_name ? -1 : 1
    // return 0;
  })

  console.log(sortedlist)

  fetch("https://tfkjvep6.api.sanity.io/v1/data/query/production?query=*")
    .then((res) => res.json())
    .then((res) => console.log("Sanity", res))

  const patientListOptions = sortedlist.map((item) => (
    <option key={item.id}>
      {item.first_name} {item.last_name}
    </option>
  ))

  return (
    <select
      name="patient"
      value={newPatient}
      onChange={(ev) => setNewPatient(ev.target.value)}
    >
      <option hidden disabled={newPatient !== ""}>
        kies patient
      </option>
      {patientListOptions}
    </select>
  )
}

export default PatientNameOption

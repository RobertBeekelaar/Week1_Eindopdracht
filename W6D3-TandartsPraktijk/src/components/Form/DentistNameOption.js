import React from "react"

const DentistNameOption = (props) => {
  const { dentists, setDentist, dentist } = props

  const nameListOptions = dentists.map((item) => (
    <option key={item.id}>{item.name}</option>
  ))

  return (
    <select
      name="dentist"
      value={dentist}
      onChange={(ev) => setDentist(ev.target.value)}
    >
      <option hidden disabled={dentist !== ""}>
        kies tandarts
      </option>
      {nameListOptions}
    </select>
  )
}

export default DentistNameOption

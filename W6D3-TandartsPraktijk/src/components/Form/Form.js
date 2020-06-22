import React, { useState } from "react"
import DentistNameOption from "./DentistNameOption"
import "./Form.scss"
import PatientNameOption from "./PatientNameOption"

const Form = (props) => {
  const { appointments, setAppointments, dentists } = props
  const { available } = appointments

  const [newpatient, setNewPatient] = useState("")
  const [dentist, setDentist] = useState("")
  const [assistent, setAssistent] = useState("")
  const [time, setTime] = useState("")
  const [day, setDay] = useState("")
  const [week, setWeek] = useState("")

  const addAppointment = (ev) => {
    ev.preventDefault()

    if (!newpatient || !dentist || !time || !day || !week) {
      alert("You have not added all the details")
      return
    } else if (available === false) {
      alert("This dentist is not available at the moment")
      return
    }

    const item = {
      id: appointments.length + 1,
      available: true,
      newpatient: newpatient,
      dentist: dentist,
      assistent: assistent,
      time: time,
      day: day,
      week: week,
    }
    setAppointments(appointments.concat(item))
    setNewPatient("")
    setDentist("")
    setAssistent("")
    setTime("")
    setDay("")
    setWeek("")
  }
  return (
    <form className="Form" onSubmit={addAppointment}>
      <PatientNameOption
        newpatient={newpatient}
        setNewPatient={setNewPatient}
      />
      <DentistNameOption
        dentists={dentists}
        dentist={dentist}
        setDentist={setDentist}
      />
      <select
        // value={assistent}
        name="assistent"
        onChange={(ev) => setAssistent(ev.target.value)}
      >
        <option>geen assistent</option>
        <option id="1">Quincy Jones</option>
        <option id="2">Truus Overbeek</option>
      </select>

      <select
        value={time}
        name="time"
        onChange={(ev) => setTime(ev.target.value)}
      >
        <option hidden disabled={time !== ""}>
          kies tijdstip
        </option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
      </select>

      <select value={day} name="day" onChange={(ev) => setDay(ev.target.value)}>
        <option hidden disabled={day !== ""}>
          kies dag
        </option>
        <option value="maandag">Maandag</option>
        <option value="dinsdag">Dinsdag</option>
        <option value="woensdag">Woensdag</option>
        <option value="donderdag">Donderdag</option>
        <option value="vrijdag">Vrijdag</option>
      </select>

      <select
        value={week}
        name="week"
        onChange={(ev) => setWeek(ev.target.value)}
      >
        <option hidden disabled={week !== ""}>
          kies week
        </option>
        <option value="1">week 1</option>
        <option value="2">week 2</option>
        <option value="3">week 3</option>
        <option value="4">week 4</option>
      </select>
      <button className="submitButton" type="submit">Add</button>
    </form>
  )
}

export default Form

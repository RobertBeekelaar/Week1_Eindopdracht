import React, { useState } from "react"
import Form from "../Form/Form"
import AppointmentList from "../AppointmentList/AppointmentList"
// import DentistList from '../Form/DentistList.js'

const Container = () => {
  // const [patient, setPatient] = useState([
  //   { firtname: "", lastname: "", phone: "", email: "", birthyear: "" },
  // ])

  const [availability, setAvailability] = useState([])
  console.log("currently availability", availability)

  const [dentists, setDentists] = useState([
    // DentistList
    {
      id: "1",
      name: "Johan Van Beek",
      phone: "0625674612",
      email: "j.vanbeek@tandartspraktijkbvt.nl",
      available: false,
    },
    {
      id: "2",
      name: "Isabella da Sol",
      phone: "0682376647",
      email: "I.dasol@tandartspraktijkbvt.nl",
      available: true,
    },
    {
      id: "3",
      name: "Birkan Kulêr",
      phone: "0673534653",
      email: "b.kuler@tandartspraktijkbvt.nl",
      availabe: false,
    },
    {
      id: "4",
      name: "Suzan Write",
      phone: "0687273278",
      email: "s.write@tandartspraktijkbvt.nl",
      available: true,
    },
  ])

  // const [assistent, setAssistent] = useState([
  //   {
  //     id: "1",
  //     firstname: "Truus",
  //     lastname: "Overbeek",
  //     phone: "0673345246",
  //     email: "t.overbeek@tandartspraktijkbvt.nl",
  //     sick: false,
  //   },
  //   {
  //     id: "2",
  //     firstname: "Quincy",
  //     lastname: "Jones",
  //     phone: "0653452243",
  //     email: "q.jones@tandartspraktijkbvt.nl",
  //     sick: false,
  //   },
  // ])

  const [appointments, setAppointments] = useState([
    {
      id: "1",
      newpatient: "Bob Naaktgeboren",
      dentist: "Birkan Kulêr",
      time: "10:00",
      day: "woensdag",
      week: "2",
      available: false,
    },
    {
      id: "2",
      newpatient: "Tim Rijs",
      dentist: "Johan Van Beek",
      time: "12:00",
      day: "dinsdag",
      week: "1",
      available: true,
    },
    {
      id: "3",
      newpatient: "Saar Beethoven",
      dentist: "Birkan Kulêr",
      time: "10:00",
      day: "donderdag",
      week: "4",
      available: true,
    },
    {
      id: "4",
      newpatient: "Robert Martijn",
      dentist: "Johan Van Beek",
      time: "12:00",
      day: "vrijdag",
      week: "3",
      available: true,
    },
    {
      id: "5",
      newpatient: "Bob de Bouwer",
      dentist: "Johan Van Beek",
      time: "10:00",
      day: "vrijdag",
      week: "3",
      available: true,
    },
  ])

  const removeAppointment = (item) => {
    setAppointments(appointments.filter(({ id }) => item.id !== id))
  }

  // const changeAvailable = (item) => {
  //   setAppointments(appointments.forEach((appointment) => {item.dentist === dentist ? available=false : available=false}

  return (
    <div className="Container">
      <div className="Header">Plan hier uw afspraak</div>
      <Form
        setAppointments={setAppointments}
        appointments={appointments}
        dentists={dentists}
        setDentists={setDentists}
      />
      <AppointmentList
        removeAppointment={removeAppointment}
        setAvailability={setAvailability}
        availability={availability}
        appointments={appointments}
      />
    </div>
  )
}

export default Container

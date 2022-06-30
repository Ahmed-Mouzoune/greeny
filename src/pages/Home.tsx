import React, { useState } from "react"
import HomePage from "../components/HomePage"
import IntroHome from "../components/IntroHome"

export default function Home() {
  const [step, setStep] = useState(0)
  const [title, setTitle] = useState("Où voulez vous louer ?")
  const [lieu, setLieu] = useState("Paris 11ème arrondissement")
  return (
    <>
      {step < 4 && <IntroHome step={step} setStep={setStep} />}
      {step >= 4 && <HomePage title={title} lieu={lieu} />}
    </>
  )
}

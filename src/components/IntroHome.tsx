import React, { useEffect } from "react"
import home_1 from "../assets/img/home_1.png"
import home_2 from "../assets/img/home_2.png"
import home_3 from "../assets/img/home_3.png"

export default function IntroHome({ step, setStep }: any) {
  const loader = () => {
    setTimeout(() => {
      setStep(step++)
    }, 2000)
  }
  const incrementStep = () => {
    console.log("increment")
    setStep(step + 1)
    console.log("step", step)
  }
  const chooseStep = (keyStep: number) => {
    setStep(keyStep)
  }

  useEffect(() => {
    loader()
  }, [])

  return (
    <>
      {step == 0 && (
        <div className="loader">
          <div>greeny'</div>
        </div>
      )}
      {step == 1 && (
        <div className="introPopin">
          <div className="header">
            <h1>
              ON SE DEPLACE !<br />
              <br />
              Laissez nous récupérez votre véhicule
            </h1>
          </div>
          <div className="body">
            <img src={home_1} alt="Background" width={"314px"} />
          </div>
          <div className="footer">
            <p>
              Laissez le véhicule dans un large choix de dépôt on s'en occupe !
            </p>
            <div className="stateStep">
              <div
                onClick={() => chooseStep(1)}
                className="indicateur active"
              ></div>
              <div onClick={() => chooseStep(2)} className="indicateur"></div>
              <div onClick={() => chooseStep(3)} className="indicateur"></div>
            </div>
            <div className="btn-cta" onClick={incrementStep}>
              Suivant
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="introPopin">
          <div className="header">
            <h1>Profitez de nos services PARTOUT en France</h1>
          </div>
          <div className="body">
            <img src={home_2} alt="Background" width={"277px"} />
          </div>
          <div className="footer">
            <p>greeny’ continue à se développer dans toute la France</p>
            <div className="stateStep">
              <div onClick={() => chooseStep(1)} className="indicateur"></div>
              <div
                onClick={() => chooseStep(2)}
                className="indicateur active"
              ></div>
              <div onClick={() => chooseStep(3)} className="indicateur"></div>
            </div>
            <div className="btn-cta" onClick={incrementStep}>
              Suivant
            </div>
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="introPopin">
          <div className="header">
            <h1>Pour particuliers ET professionnels !</h1>
          </div>
          <div className="body">
            <img src={home_3} alt="Background" width={"266px"} />
          </div>
          <div className="footer">
            <p></p>
            <div className="stateStep">
              <div onClick={() => chooseStep(1)} className="indicateur"></div>
              <div onClick={() => chooseStep(2)} className="indicateur"></div>
              <div
                onClick={() => chooseStep(3)}
                className="indicateur active"
              ></div>
            </div>
            <div className="btn-cta" onClick={incrementStep}>
              Suivant
            </div>
          </div>
        </div>
      )}
    </>
  )
}

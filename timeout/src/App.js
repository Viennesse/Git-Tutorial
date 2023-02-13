import { useState, useEffect } from "react"
import Refek from "./Refek"




function App() {


useEffect(() => {
  const odliczaj = setInterval(()=> {
    const difference = + new Date("2023-02-10 9:00") - +new Date();

    const d = Math.floor(difference/(1000 * 60 * 60 * 24))
    setDays(d)
    const h = Math.floor((difference/(1000 * 60 *60)) % 24)
    setHours(h)
    const m = Math.floor((difference/(1000 * 60)) % 60)
    setMinutes(m)
    const s = Math.floor((difference/(1000)) % 60)
    setSeconds(s)
    if(d <= 0 && h <= 0 && m <= 0 && s <= 0) {
      setPrzerwij(true);
    }

  }, 1000

)
return () => clearInterval(odliczaj);
}, [])

const [przerwij, setPrzerwij] = useState(false)
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)
const [hours, setHours] = useState(0)
const [days, setDays] = useState(0)




  return (
    <div className="App">
      <center>
        <h1>TIMER</h1>
        {przerwij? (
          <>
            <p>Koniec odliczania</p>
          </>
        ) : (
          <>
            <span>Days: {days} </span>
            <span>Hours: {hours} </span>
            <span>Minutes: {minutes} </span>
            <span>Seconds: {seconds}</span>
          </>
        )}
      </center>

      <Refek />
      
    </div>
  );
}

export default App;

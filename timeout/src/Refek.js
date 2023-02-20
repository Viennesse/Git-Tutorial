import { useEffect, useRef, useState } from "react"


const Refek = () => {

const ref = useRef()
const [count, setCount] = useState(0);

const usePrevious = (val) => {
    useEffect(() => {
        ref.current = val

    }, [count])

    return ref.current
}

const prevCount = usePrevious(count)

return(
    <div>
        <center>
            <h1>I am current: </h1>
            <h1>I am before: {prevCount}</h1>
        </center>
    </div>
)

}

export default Refek

//Komentarz dodany do wersji 3: custom hook usePrevious
//Robimy merging
//konflikt zalatwiony

//FEATURE1
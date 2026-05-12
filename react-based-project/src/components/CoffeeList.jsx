import CoffeeCard  from "./CoffeeCard"
import {useEffect , useState} from 'react'

function CoffeeList() {
  const [Coffee,setCoffee] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/Coffees')
    .then(res => res.json())
    .then (data => setCoffee(data))
  }, [])
}
  return (
    <div>
     {Coffee.map((Coffee) =>(
      <CoffeeCard key={Coffee.id} Coffee={Coffee}/>
     ))} 
    </div>
  )


export default CoffeeList
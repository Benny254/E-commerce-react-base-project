import CoffeeCard  from "./CoffeeCard"
import {useEffect , useState} from 'react'

function CoffeeList() {
  const [Coffee,setCoffee] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setCoffee(data))
      .catch(error => console.error('Fetch Error:', error));
  }, []);

  return (
    <ol>
     {Coffee.map((Coffee) =>(
      <CoffeeCard key={Coffee.id} Coffee={Coffee}/>
     ))} 
    </ol>
  )
}

export default CoffeeList
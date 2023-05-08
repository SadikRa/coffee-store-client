import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/CoffeeCard"
import { useState } from "react"

function App() {


  const loaddedData = useLoaderData()

  const [coffees , setCoffees] = useState(loaddedData)
  return (
    <div className="container mx-auto">
      <div className="flex gap-10">
      <Link className="mx-10" to="/updateCoffee">Update coffee</Link>
      <Link to="/addCoffee">Add coffee</Link>
      </div>
      <h1 className='text-4xl text-center'>Coffee Store</h1>
      
      <div className="grid md:grid-cols-2 gap-4 my-5"> 
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
      
    </div>
  )
}

export default App

import React from "react"
import { useState, useEffect } from "react";

import NavBar from './navigation/navbar';
import Footer from './components/footer';
import SearchBox from "./navigation/search-box";
import CardList from "./components/card-list/cardList";

function App() {

  const [searchField, setSearchField] = useState('')
  const [destination, setDestination] = useState([])
  const [filteredDestination, setFilteredDestination] = useState(destination)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=> Response.json())
    .then((users)=> setDestination(users))
  }, [])

  useEffect(() => {
    const newfilteredDestination = destination.filter((destination) => {
      return destination.name.toLocaleLowerCase().includes(searchField) 
  })

  setFilteredDestination(newfilteredDestination)
  }, [destination, searchField])

    const OnsearchChange = (event) =>{
      const searchFieldString = event.target.value.toLocaleLowerCase()
      setSearchField(searchFieldString)
    }

  return (
    <div className="App bg-[url('../public/bg_See2.png')] bg-cover">

      <header>
      <NavBar></NavBar>
      </header>

      <div className="container w-4/5 mx-auto bg-white rounded-xl shadow border p-10 m-10">
      <p className="text-3xl text-gray-800 font-bold mb-5">
        Welcome to SeeAhead!
      </p>
      <p className="text-gray-600 text-lg">
        Book your accommodation for the best prices in the market!
      </p>
      </div>
      
      <div className="relative flex h-16 w-auto items-center space-x-1 justify-center m-4">
        <SearchBox 
          className="text-black h-8 w-200 rounded"
          onChangeHandler={OnsearchChange} 
          placeholder= " Choose destination"
        />
          <p className="m-4">Check-in</p>
          <input type="date" className="rounded m-4"></input>

          <p className="m-4">Check-out</p>
          <input type="date" className="rounded m-4"></input>

      </div>

      <div className="Destination-cards w-auto h-auto">
      <CardList destination = {filteredDestination} />
      </div>
    
      
 

      <div className="Footer">  
      <Footer/>
      </div>

    </div>
  );
}
export default App;

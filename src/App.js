import React from "react"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './navigation/navbar';
import Footer from './components/footer';
import SearchBox from "./navigation/search-box";
import CardList from "./components/card-list/cardList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserDetails from "./components/UserDetails";

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
    <Router>
    <div className="App-container bg-[url('../public/bg_See2.png')] bg-cover">

      <NavBar></NavBar>

      <div className="container w-4/5 mx-auto bg-blue-400 rounded-xl shadow-md p-10 m-10">
      <p className="text-3xl text-gray-800 font-bold mb-5">
        Welcome to SeeAhead!
      </p>
      <p className="text-gray-600 text-lg">
        Book your accommodation for the best prices in the market!
      </p>
      </div>
      
      <div className="search-box relative flex h-16 w-auto items-center space-x-1 justify-center m-4">
        <SearchBox 
          className="text-black h-8 w-200 rounded shadow-xl"
          onChangeHandler={OnsearchChange} 
          placeholder= " Choose destination"
        />
          <p className="m-4 font-bold">Check-in</p>
          <input type="date" className="rounded m-4 shadow-xl"></input>

          <p className="m-4 font-bold">Check-out</p>
          <input type="date" className="rounded m-4 shadow-xl"></input>
          <button className="bg-blue-400 rounded-md text-white font-bold border-2 border-sky-600 w-40 h-8 m-4 shadow-xl">Search</button>

      </div>

      <div className="cards-container w-3/5 h-64 overflow-auto mx-auto bg-blue-400 rounded-xl shadow-md p-10 m-10">
      <div className="Destination-cards w-3/5">
      <CardList destination = {filteredDestination} />
      </div>
      </div>

      <SignIn/>

      <SignUp/>

      <UserDetails/>
      
      <div className="Footer">  
      <Footer/>
      </div>

    </div>
    </Router>
  );
}
export default App;

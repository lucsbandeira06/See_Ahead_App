import { useState, useEffect } from "react";
import SearchBox from "../search-box";
import CardList from "../../components/card-list/cardList";
import UserDetails from "../../components/UserDetails";
import { Menu } from "@headlessui/react";


export default function HotelHome(){

    const [searchField, setSearchField] = useState('')
    const [destination, setDestination] = useState([])
    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
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
        <div>

        <div className="container w-full h-80 mx-auto bg-blue-400 rounded-xl shadow-md p-10 mt-12">
        <p className="text-3xl text-gray-800 font-bold mb-5">
          Welcome to SeeAhead!
        </p>
        <p className="text-gray-600 text-lg">
          Book your accommodation for the best prices in the market!
        </p>
        </div>
        
        <div className="search-box flex h-24 w-9/12 mx-auto p-4 -mt-6 rounded-xl bg-orange-500 items-center space-x-1 justify-center m-4">
          
          <SearchBox 
            onChangeHandler={OnsearchChange} 
          />
            
            <div className="checks-container bg-white h-10 rounded-md flex shadow-lg text-slate-900 p-1">
            
            <label className="p-1 text-slate-600">Check in</label>
            <input type="date" className="rounded-md"
            ></input>
  
            <label className="p-1 text-slate-600">Check out</label>
            <input type="date" className="rounded-md"
            placeholder="check-out" onfocus="(this.type = 'date')"></input>
            </div>

           

            <div className="guests-rooms-container mx-auto w-2/12 bg-white rounded-md text-slate-900 border-2 font-bold border-orange-300 text-center w-40 h-10 shadow-xl">

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="focus:ring-4 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-orange-300 dark:focus:ring-orange-300" type="button">Guests and Rooms <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

            </div>

            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            </ul>
              </div>

            <button className="bg-blue-400 rounded-md text-white font-bold w-40 h-10 m-4 shadow-xl border-2 border-orange-300">Search</button>
  
        </div>

        <div className="cards-container w-3/5 h-80 overflow-auto mx-auto bg-blue-400 rounded-xl shadow-md p-10 m-10">
      <div className="Destination-cards w-3/5">
      <CardList destination = {filteredDestination} />
      </div>
      </div>

      <UserDetails/>

        </div>
    )
}


import { useState, Fragment } from "react";
import CardList from "../../components/card-list/cardList";
import UserDetails from "../../components/UserDetails";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GEO_API_URL, geoApiOptions } from "../../searchBarAPIconfig";
import { AsyncPaginate } from "react-select-async-paginate";



export default function HotelHome(){

    // const [searchField, setSearchField] = useState('')
    const [destinationSearch, setDestinationSearch] = useState();
    const [destination, setDestination] = useState([])
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [adultCount, setAdultCount] = useState(0)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(0)

    //TODO: Set filters for hotels
    const [filteredDestination, setFilteredDestination] = useState(destination)


    //TODO: Pass data to booking.com API and then render places accordingly
    const SearchEngineHandler = () => {
      console.log("check-in", checkIn)
      console.log("check-out", checkOut)
      console.log("number of adults", adultCount)
      console.log("number of children", childrenCount)
      console.log("number of rooms", roomsCount)
      console.log("destination", destinationSearch)
    }
    
    // Function to define a state for destination
    const searchHandleOnChange = (searchData) => {
      setDestinationSearch(searchData);
    };

    //Cities API fetch with minimum population of 15 thousand people. Input value = user input
    const loadOptions = (inputValue) => {
      return fetch(
          `${GEO_API_URL}/cities?minPopulation=15000&namePrefix=${inputValue}`,
          geoApiOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };

    // useEffect(()=> {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((Response)=> Response.json())
    //   .then((users)=> setDestination(users))
    // }, [])
  
    // useEffect(() => {
    //   const newfilteredDestination = destination.filter((destination) => {
    //     return destination.name.toLocaleLowerCase().includes(searchField) 
    // })
  
    // setFilteredDestination(newfilteredDestination)
    // }, [destination, searchField])

    // const OnsearchChange = (event) =>{
    //     const searchFieldString = event.target.value.toLocaleLowerCase()
    //     setSearch(searchFieldString)
    //   }

    return (

    <div>

        <div className="container w-full h-96 mx-auto bg-blue-400 rounded-xl shadow-md p-10 mt-2">
          <p className="text-3xl text-gray-800 font-bold mb-5">
          Welcome to SeeAhead!
          </p>
          <p className="text-gray-600 text-lg">
          Book your accommodation for the best prices in the market! 
          </p>
        </div>
        
        <div className="search-box flex h-20 w-11/12 mx-auto p-4 -mt-6     rounded-xl bg-orange-500 items-center space-x-1 justify-center m-4">
          
            {/* Calling Search box component that contains all API's */}
            <AsyncPaginate
              className="w-2/5 rounded-md h-auto shadow-lg border-2 border-orange-300"
              placeholder="What is your destination?"
              debounceTimeout={600}
              loadOptions={loadOptions}
              value={destinationSearch}
              onChange={searchHandleOnChange}
            />
            
            {/* check-in check-out container */}
            <div className="checks-container bg-white h-10 rounded-md flex shadow-lg text-slate-900 border-orange-300 border-2">
            
            <label className="p-1 pt-1.5 text-slate-600">Check in</label>
            <input type="date" className="rounded-md" value={checkIn} onChange={(e) => {setCheckIn(e.target.value)}}
            ></input>
            
  
            <label className="p-1 pt-1.5 text-slate-600">Check out</label>
            <input type="date" className="rounded-md" value={checkOut} onChange={(e) => {setCheckOut(e.target.value)}}></input>
            </div>

           {/* Guests and Rooms container  */}
            <div className="guests-rooms-container mx-auto w-2/12 bg-white rounded-md text-slate-900 border-2 font-bold border-orange-300 text-center font-bold h-10 shadow-xl hover:bg-gray-50">

            <Menu as="div" className="relative">
            <div>
           <Menu.Button className="inline-flex text-center justify-center px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none ">
            Guests, Rooms
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          >
          <Menu.Items className="z-10 mt-2 w-56 mx-auto origin-top-right rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none">
          
            <Menu.Item>
              {({ active }) => (
                
               <div className="inline-flex h-12 w-56 items-center text-gray-700 pl-2 pt-2 hover:bg-gray-100 hover:rounded-md">

               <p className="pr-20">Adults</p>
             
               <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto"
               onClick={() => setAdultCount(adultCount - 1)}>
                -
               </button>
               <p className="p-1">{adultCount}</p>
               <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" onClick={() => setAdultCount(adultCount + 1)}>
                 +
               </button>
             </div>
              )}
            </Menu.Item>

            <Menu.Item>
            {({ active }) => (
                
                <div className="inline-flex h-12 w-56 items-center text-gray-700 pl-2 mx-auto hover:bg-gray-100 hover:rounded-md">

                <p className="pr-16">Children</p>
              
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto"
                onClick={() => setChildrenCount(childrenCount - 1)}>
                  -
                </button>
                <p className="p-1">{childrenCount}</p>
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" onClick={() => setChildrenCount(childrenCount + 1)}>
                  +
                </button>
              </div>
               )}
            </Menu.Item>

            <Menu.Item>
            {({ active }) => (
                
                <div className="inline-flex h-12 w-56 justify-between items-center text-gray-700 pl-2 mx-auto hover:bg-gray-100 hover:rounded-md">

                <p className="pr-20">Rooms</p>
              
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto"
                onClick={() => setRoomsCount(roomsCount - 1)}>
                  -
                </button>
                <p className="p-1">{roomsCount}</p>
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" 
                onClick={() => setRoomsCount(roomsCount + 1)}>
                  +
                </button>
              </div>
               )}
            </Menu.Item>
            </Menu.Items>
            </Transition>
          </Menu>
        </div>
            <button className="bg-blue-400 rounded-md text-white font-bold w-40 h-10 m-4 shadow-xl border-2 border-orange-300" onClick={SearchEngineHandler}>Search</button>
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


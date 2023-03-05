import { useState, Fragment } from "react";
import Card from '../../components/card.component'
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { bookingSearchCityoptions, bookingSearchCityURL } from "../../searchBarAPIconfig";
import { AsyncPaginate } from "react-select-async-paginate";



export default function HotelHome(){
  
    // const [searchField, setSearchField] = useState('')
    const [destinationSearch, setDestinationSearch] = useState([])
    // const [destination, setDestination] = useState([])


    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [destId, setDestId] = useState("")
    const [destType, setDestType] = useState("")
    const [adultCount, setAdultCount] = useState(0)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(0)
    const [data, setData] = useState({})

    //TODO: Set filters for hotels
    // const [filteredDestination, setFilteredDestination] = useState(destination)


    //TODO: Pass data to booking.com API and then render places accordingly
    const SearchEngineHandler = () => {

      console.log("check-in", checkIn)
      console.log("check-out", checkOut)
      console.log("number of adults", adultCount)
      console.log("number of children", childrenCount)
      console.log("number of rooms", roomsCount)
      // console.log("destination", destinationSearch)
      console.log("destination_ID", destId)
      console.log("destination_Type", destType)
      const userPreferences = {
        checkIn: checkIn,
        checkOut: checkOut,
        adultCount: adultCount,
        childrenCount: childrenCount,
        roomsCount: roomsCount,
        destId: destId,
        destType: destType
      }
      setData(userPreferences)
        // console.log(userPreferences)
    }

    
    // Function to define a state for destination
    const searchHandleOnChange = (searchData) => {
      setDestId(searchData.dest_id)
      setDestType(searchData.dest_type)
      setDestinationSearch(searchData);
      
    }

    //Booking search cities where there are hotels API fetch. Input value = user input
    const loadOptions = (inputValue) => {
        return fetch(
          `${bookingSearchCityURL}?name=${inputValue}&locale=en-gb`, bookingSearchCityoptions)
        .then((response) => response.json()
        .then((data) => {
          console.log(data)
            return {
              options: data.map((city) => {
                return {
                  dest_id: `${city.dest_id}`,
                  dest_type: `${city.dest_type}`,
                  label: `${city.label}`,
                }
               
              })
              
            }
          }))
          .catch(err => console.error(err))
      }

  
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

    <Fragment>

       
        <div className="container w-full h-96 md:mx-auto bg-[url('https://media.istockphoto.com/id/636342562/photo/business-man-with-laptop-working-on-the-beach.jpg?b=1&s=170667a&w=0&k=20&c=Gfx1IHy_NcI4Ydgoa2co_QRGc7Iz_HAaZZt6T9xKIt4=')] overflow-hidden bg-no-repeat bg-cover shadow-md p-10">
       
          <h1 className="text-3xl text-gray-900 font-bold mb-4 mt-6 text-center">
          Welcome to SeeAhead!
          </h1>
          <p className="text-gray-700 text-lg text-center">
          Book your accommodation for the best prices in the market!  🛫
          </p>
          <h2 className="text-3xl text-sky-900 mt-8 font-bold mb-5 text-center">Know what to expect on your next trip!</h2>
          <p className="text-gray-700 text-lg text-center">
          While looking for a destination, you will also be able to check weather estimations for the place you want to visit based on the past 40 years weather history.
          </p>
        </div>
        
        <div className="search-box flex h-20 z-0 w-11/12 mx-auto p-4 -mt-6     rounded-xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-400 items-center space-x-1 justify-center m-4">
          
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
            
            <label className="p-1 pt-1.5 flex text-slate-600">Check in</label>
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
          <Menu.Items className="mt-2 w-56 mx-auto origin-top-right rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none">
          
            <Menu.Item>
              {({ active }) => (
                
               <div className="inline-flex h-12 w-56 items-center text-gray-700 pl-2 pt-2 hover:bg-gray-100 hover:rounded-md">

               <p className="pr-20">Adults</p>
             
               <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto"
               onClick={(event) => {event.preventDefault()
                setAdultCount(adultCount - 1)}}
               >
                -
               </button>
               <p className="p-1">{adultCount}</p>
               <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" onClick={(event) => {event.preventDefault()
                setAdultCount(adultCount + 1)}}
               >
                 +
               </button>
             </div>
              )}
            </Menu.Item>

            <Menu.Item>
            {({ active }) => (
                
                <div className="inline-flex h-12 w-56 items-center text-gray-700 pl-2 pt-2 hover:bg-gray-100 hover:rounded-md">

                <p className="pr-16">Children</p>
              
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto"
                onClick={(event) => {event.preventDefault()
                  setChildrenCount(childrenCount - 1)}}
                >
                  -
                </button>
                <p className="p-1">{childrenCount}</p>
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" onClick={(event) => {event.preventDefault()
                setChildrenCount(childrenCount + 1)}}
                >
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
                onClick={(event) => {event.preventDefault()
                  setRoomsCount(roomsCount - 1)}}
                >
                  -
                </button>
                <p className="p-1">{roomsCount}</p>
                <button className="rounded-2xl h-6 w-6 bg-orange-300 items-center text-white justify-center mx-auto" 
                onClick={(event) => {event.preventDefault()
                  setRoomsCount(roomsCount + 1)}}
                
                >
                  +
                </button>
              </div>
               )}
            </Menu.Item>
            <Menu.Item>
            <div>
                <button type="submit" 
                className="bg-orange-300 justify-center items-center rounded-md text-white font-bold border-2 border-orange-600 w-36 h-8 m-4 hover:bg-orange-600 shadow-xl"
                >Confirm</button>
                </div>
            </Menu.Item>
            </Menu.Items>
            </Transition>
          </Menu>
        </div>
            <button className="bg-blue-400 rounded-md text-white font-bold w-40 h-10 m-4 drop-shadow border-2 border-orange-300 hover:bg-blue-500 hover:border-blue-300" onClick={SearchEngineHandler}>Search</button>
        </div>

        {data.destId &&
        <div className="cards-container w-10/12 -z-10 h-full overflow-auto mx-auto bg-gradient-to-r from-orange-300 via-orange-400 to-orange-400 rounded-xl p-10 m-10">
          <div className="Destination-cards w-full h-72">
             <Card data= {data} />
          </div>
        </div>
        }

    </Fragment>
    )
}


import React, { useEffect, useState } from 'react';
import { BookingHoteloptions } from '../searchBarAPIconfig';

export default function Card({data}) {

    const [hotels, setHotels] = useState([])

    useEffect(()=> {
         fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=${data.roomsCount}&checkout_date=${data.checkOut}&dest_type=${data.destType}&dest_id=${data.destId}&adults_number=${data.adultCount}&locale=en-gb&checkin_date=${data.checkIn}&order_by=popularity&filter_by_currency=EUR&units=metric&page_number=1&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1`, BookingHoteloptions)
        .then(response => response.json())
        .then((dataPlaces) => {
            setHotels(dataPlaces)})  
        .catch(err => console.error(err))
        
      }, [])

      console.log(hotels)


    return(
        
        Object.values(hotels).map((hotels, position) => (
            
            <div className="Card-container inline-flex items-stretch w-full h-72 space-x-1 content-between m-2 mb-4 bg-white rounded-md drop-shadow-lg border-2 p-3" key={position}>

                <div className="h-auto w-2/5 border-2 bg-slate-200 shadow-lg  justify-items-start">
                <img src={`${hotels.main_photo_url}`}/>    
                </div>

                <div className="w-full font-bold h-full grid grid-cols-2 gap-4 place-content-between m-2 p-2">
                    <h2>Address:{`${hotels.address}`}</h2>
                    <p>City:{`${hotels.city_name}`}</p>
                    <p>Region:{`${hotels.city}`}</p>
                    <p>Price:{`${hotels.min_total_price}`}</p>
                </div>
            </div>
            )
          )
          
    )
    
    

}
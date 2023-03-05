import React, { useEffect, useState } from 'react';
import { BookingHoteloptions } from '../searchBarAPIconfig';
import { useNavigate, Link } from 'react-router-dom';


export default function Card({data}) {

    const navigate = useNavigate()

    const [hotels, setHotels] = useState({})  
     
    useEffect(() => {
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=${data.roomsCount}&checkout_date=${data.checkOut}&dest_type=${data.destType}&dest_id=${data.destId}&adults_number=${data.adultCount}&locale=en-gb&checkin_date=${data.checkIn}&order_by=popularity&filter_by_currency=EUR&units=metric&page_number=1&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1`, BookingHoteloptions)
        .then(response => response.json())
        .then((dataPlaces) => {
            setHotels(dataPlaces.result)
            console.log(hotels)
        })  
        .catch(err => console.error(err))
      }
    /* eslint-disable */
    ,[])
    /* eslint-disable */
    


    return(
        
        
        Object.values(hotels).map((hotels,position) => (
            
            <div className="Card-container flex w-full h-96 space-x-1 m-2 mb-4 bg-white rounded-md drop-shadow-lg border-2 p-3" key={position}>
                
                <div className="h-full w-full border-2 bg-slate-200 shadow-lg  justify-items-start">
                <h3 className="justify-center text-md  h-fit text-white font-semibold content-between text-center bg-gradient-to-r from-red-600 via-red-400 to-orange-400">{`${hotels.hotel_name}`}</h3>
                <img className="w-full h-80" alt="main-pic" src={`${hotels.max_photo_url}`}/>    
                </div>

             
                <div className="w-full relative gap-4 grid grid-cols-3 flex h-full place-content-between m-2 p-2">
                    <p>{`${hotels.address}`}</p>
                    <p >Check-in: {`${hotels.checkin.from}`}</p>
                    <p>Check-out:{`${hotels.checkout.until}`}</p>
                    <p>Price: {`${hotels.min_total_price}  ${hotels.currencycode}`}</p>
                    <p>Review Score: {`${hotels.review_score}`}</p>
                    <p>Review Score: {`${hotels.review_score_word}`}</p>
                </div>

                
                <Link to="/hotelFullDescription">
                <button type="submit" 
             
            className="bg-gradient-to-r from-red-600 via-red-400 mt-30 to-orange-400 rounded-lg text-white font-bold w-fit p-2 h-16 m-4 shadow-xl flex justify-center place-items-center justify-items-end items-center">Make a reservation</button>
            </Link>
               
            </div>
        ))

            )
    
    

}
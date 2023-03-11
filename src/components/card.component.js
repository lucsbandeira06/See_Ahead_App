import React, { useEffect, useState } from 'react';
import { BookingHoteloptions } from '../searchBarAPIconfig';
import { Link } from 'react-router-dom';


export default function Card({data}) {


    const [hotels, setHotels] = useState({})  
     

    useEffect(() => {
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?adults_number=${data.adultCount}&dest_type=${data.destType}&filter_by_currency=EUR&checkout_date=${data.checkOut}&checkin_date=${data.checkIn}&order_by=popularity&locale=en-gb&dest_id=${data.destId}&units=metric&room_number=${data.roomsCount}&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0`, BookingHoteloptions)
        .then(response => response.json())
        .then((dataPlaces) => {
            setHotels(dataPlaces.result)
        })  
        .catch(err => console.error(err))
      }
    /* eslint-disable */
    ,[])
    /* eslint-disable */
    

    return(
      
        
        Object.values(hotels).map((hotels,position) => (
            
            <div className="Card-container flex w-full h-fit space-x-1 m-2 mb-4 bg-white rounded-md drop-shadow-lg border-2 p-3" place-self-center key={position}>
                
                <div className="h-full w-3/5 border-2 bg-slate-200 shadow-lg  justify-items-start">
                <h3 className="justify-center text-md  h-fit text-white font-semibold content-between text-center bg-gradient-to-r from-red-600 via-red-400 to-orange-400">{`${hotels.hotel_name}`}</h3>
                <img className="w-full h-80" alt="main-pic" src={`${hotels.max_photo_url}`}/>    
                </div>

             
                <div className="w-full gap-6 grid grid-cols-3 content-between justify-between m-2 p-2">
                    <p><p className="font-bold">Address:</p>{`${hotels.address}`}</p>
                    <p><p className="font-bold">Score:</p> {`${hotels.review_score}`}</p>
                    <p><p className="font-bold">Check-in:</p>{`${hotels.checkin.from}`}</p>
                    <p><p className="font-bold">Total price:</p> {`${hotels.min_total_price}  ${hotels.currencycode}`}</p>
                 
                    <p><p className="font-bold">Review:</p> {`${hotels.review_score_word}`}</p>
                    <p><p className="font-bold">Check-out:</p>{`${hotels.checkout.until}`}</p>
                </div>

                
                <Link className="h-20 place-self-center" to="/Description">
             
                <button type="submit" 
                className="bg-gradient-to-r block from-red-600 via-red-400 to-orange-400 rounded-lg text-white font-bold p-2 font-bold w-40 h-18 m-2 shadow-xl place-self-center">Make a reservation</button>
                </Link>
               
            </div>
        ))

            )
    
}
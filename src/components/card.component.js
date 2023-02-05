import React from 'react';

export default function Card({destination}) {

    const {name, email, id} = destination;

    return(
    <div className="Card-container inline-flex items-stretch w-fit space-x-1 justify-center m-4 bg-white rounded-xl shadow border p-10" key={id}>
    <img alt={`destination ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />    
    <div className="">
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>
     ) ;

}
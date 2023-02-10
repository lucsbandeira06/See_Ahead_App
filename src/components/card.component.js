import React from 'react';

export default function Card({destination}) {

    const {name, email, id} = destination;

    return(
       
    <div className="Card-container inline-flex items-stretch w-4/5 space-x-1 justify-center content-between m-4 bg-white rounded-xl shadow border p-10" key={id}>
    <img alt={`destination ${name}`} src={`https://robohash.org/${id}?set=set2&size=160x160`}
    />    
    <div className="items-center justify-items-center m-12">
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
        </div>
     ) ;

}
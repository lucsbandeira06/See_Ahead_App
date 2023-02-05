import React from 'react';
import Card from '../card.component';


export default function CardList(props) {

    const { destination } = props;

 return(
    <div className='card-list'>
        {destination.map((destination) => {
            return(
                 <Card destination={destination}/>
                ); 
                })}        
    </div>
        )
}


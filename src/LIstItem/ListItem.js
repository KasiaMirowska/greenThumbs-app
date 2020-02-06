import React from 'react';


export default function ListItem(props) {
    return (
        <li key={props.id}>
            <h2>{props.name}</h2>
            <p>{props.location.address1}</p>
            <p>{props.location.city}</p>
            <p>{props.location.state}</p>
            <p>{props.location.zip_code}</p>
            <p>{props.phone}</p>
            <p>{props.price}</p>
            <img src={props.img} />
            <a href={`${props.website}`}><h2>Visit</h2></a>
            {props.rating}
            <button>Create ThumbsUP review</button>
        </li>
    )
}


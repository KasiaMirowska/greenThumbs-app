import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../Services/token-service';
import config from '../config';


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
                <a href ={`${props.website }`} target="_blank" rel='noopener noreferrer'><h2>Visit</h2></a>
                {props.rating}

                {(!TokenService.hasAuthToken(config.TOKEN_KEY))? <Link to={'/login'}><button>Create ThumbsUP review</button></Link> :
                <Link to={`/review/${props.id}`}><button>Create ThumbsUP review</button></Link>
                }
               
            </li>
        )
    
    
}


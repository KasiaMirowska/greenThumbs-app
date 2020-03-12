import React from 'react';
import TokenService from '../Services/token-service';
import config from '../config';

export default function Header(props) {
    return (
        <div>
            <h1>
                GREEN thumbsUP
            </h1>
            {(!TokenService.hasAuthToken(config.TOKEN_KEY))? <h3>Welcome to GREEN thumbsUP! A place where you can create a positive impact on local restaurant industry. Search for a place to eat and let us know if that place adheres to enviroment friendly practices. Let's stand together for the Earth and influance business owners to take steps that will significatly lower their ecological footprint !
                <br />
                To post a review and browse through details of other users reviews <a href={'/register'}>register </a> for the account or <a href={'/login'}>login </a>using username : 'demo', password: 'demo12345'. 
            </h3> : null
                }
           
        </div>
    )
}
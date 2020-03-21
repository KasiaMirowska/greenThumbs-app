import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../Services/token-service';
import config from '../config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


export default function Header(props) {

   
    return (
        <div>
            <h1 className='header'>
                <Link to='/'>
                    GREEN<span className='thumbs'>thumbs</span>UP
                {/* < FontAwesomeIcon icon={faThumbsUp} className='font' /> */}
                </Link>

                
            </h1>

            {(!TokenService.hasAuthToken(config.TOKEN_KEY)) ? <h3 className='h-text'>Welcome to GREEN thumbsUP! A place where you can create a positive impact on local restaurant industry. Search for a place to eat and let us know if that place adheres to enviroment friendly practices. Let's stand together for the Earth and influance business owners to take steps that will significatly lower their ecological footprint !
                <br />
                To post a review and browse through details of other user's reviews <a href={'/register'}>register </a> for the account or <a href={'/login'}>login to demo account </a>using <span>username : 'demo', password: 'demo12345'.</span>
            </h3> : null}
           
           
        </div>
    )
}
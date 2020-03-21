import React from 'react';
import TokenService from '../Services/token-service';
import config from '../config';
import './SearchBar.css';

export default function SearchBar(props) {

    const handleSearch = (e) => {
        e.preventDefault();
        props.history.push('/search')
    }

    return (
        <div>
            <div className='bar'>


                {(!TokenService.hasAuthToken(config.TOKEN_KEY)) ? null :
                    <button className='yelp' type='button' onClick={handleSearch}>To add new places to our records, CLICK HERE</button>}

            </div>
            {/* <div className='bar2'>


                {(!TokenService.hasAuthToken(config.TOKEN_KEY)) ? null :
                    <div>
                        <ul>
                            <h3>Ideas for further reserach:</h3>
                            <li></li>
                        </ul>
                    </div>}

            </div> */}
        </div>
    )
}
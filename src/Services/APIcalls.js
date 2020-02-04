import React from 'react';
import config from '../config';


const APIcalls = {
    getAllRestaurants: (term, location) => {
       
        const URL = config.API_ENDPOINT + `term=${term}` +'&'+ `location=${location}`+'&callback=myCallback';
        console.log(URL)
        return fetch(URL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${config.API_KEY}`
            },
        })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.log(err)
                            throw new Error(err.error.message)
                        })
                }
                console.log(res)
                return res;
            })
            .then(res => res.json())
    }
}
export default APIcalls;
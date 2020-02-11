import React from 'react';
import config from '../config';


const ProxyCalls = {
    getFromGreenThumbApi: (term, location) => {
        const URL = 'https://green-thumbs-up-api.herokuapp.com/' + `?` + `term=${term}` +'&'+ `location=${location}`;
        return fetch(URL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${config.API_KEY}`
            },
        }) 
        .then(res => {
            if(!res.ok) {
                return res.json()
                .then(err => {
                    console.log(err)
                    throw new Error(err.error.message)
                })
                
            }
            console.log(res, 'REALLY???????')
            return res
        })
        .then(res => res.json());
    },

}
export default ProxyCalls;
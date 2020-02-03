import React from 'react';



const APIcalls = {
    getAllRestaurants: () => {
        const URL = config.API_ENDPOINT 

        return fetch(URL, {
            headers: {
                'Authorization': `Bearer ${config.API_KEY}`
            },
        })
            .then(res => {
                if (!res.ok) {
                   return res.json()
                   .then(err=> {
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
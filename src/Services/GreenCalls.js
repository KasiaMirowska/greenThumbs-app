import config from '../config';
import TokenService from '../Services/token-service';

const GreenCalls = {
    getAllReviewedPlaces: () => {
        const URL = config.API_ENDPOINT + '/';
        console.log(URL)
        return fetch(URL)
        .then(res => {
            if(!res.ok) {
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
    },

    postNewReview: (placeId, newPlace) => {
        const URL = config.API_ENDPOINT + `/${placeId}/review`
        console.log(URL)
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newPlace),
        })
        .then(res => {
            if(!res.ok) {
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
    },

    getAllGreenPlacesByUser: () => {
        const URL = config.API_ENDPOINT + '/user';
        return fetch(URL, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
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
            return res;
        })
        .then(res => res.json())
    },

    getGreenPlaceById: (placeId) => {
        const URL = config.API_ENDPOINT + `/place/${placeId}`;
        return fetch(URL, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
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
                console.log(res)
                return res;
            })
            .then(res => res.json())
    
    },


    editGreenPlace: (placeId, updatedInfo) => {
        const URL = config.API_ENDPOINT + `/edit/${placeId}`;
        console.log(URL)
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedInfo),
        })
            .then(res => {
                if(!res.ok) {
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

export default GreenCalls;
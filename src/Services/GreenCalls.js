import config from '../config';

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
    }
}

export default GreenCalls;
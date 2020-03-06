
import config from '../config';


const ProxyCalls = {
    getThroughGreenThumbApi: (term, location) => {
        const URL = `http://localhost:8000/` + `?` + `term=${term}` +'&'+ `location=${location}`;
        console.log(URL, 'CLIENT')
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
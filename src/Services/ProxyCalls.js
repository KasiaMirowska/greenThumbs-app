import config from '../config';

const ProxyCalls = {
    getThroughGreenThumbApi: (term, location) => {
        const URL = `https://agile-bayou-12370.herokuapp.com/yelp/` + `?` + `term=${term}` +'&'+ `location=${location}`;
        
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
                    console.log(err);
                    throw new Error(err.error.message);
                });
                
            }
            return res;
        })
        .then(res => res.json());
    },

}
export default ProxyCalls;
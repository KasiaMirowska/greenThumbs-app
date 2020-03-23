import config from '../config';


const AuthCalls = {
    postLogin: (credentials) => {
        console.log(credentials, config.API_ENDPOINT)
        const URL = config.API_ENDPOINT + '/login';
        console.log(URL, JSON.stringify(credentials))
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(credentials),
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

    postNewUser: (user) => {
        console.log(user, '????????')
        const URL = config.API_ENDPOINT + '/register';
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(!res.ok) {
                return res.json()
                .then(err => {
                    console.log(err);
                    throw new Error(err.error.message)
                })
            }
            res.json();
        })
    }
};

export default AuthCalls;
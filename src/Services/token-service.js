import config from '../config';
import jwt from 'jsonwebtoken';


const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken();
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`);
    },
    verifyJWT(token) {
        console.log(token, 'TTTTTTTTT');
        return jwt.verify(token, config.JWT_SECRET, {algorithms: ['HS256']});
    },
}

export default TokenService;
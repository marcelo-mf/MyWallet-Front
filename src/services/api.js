import axios from "axios";

const BASE_URL = 'http://localhost:5000'

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/cadastro`, body)

    return promise;
}

function SignIn(body) {
    const promise = axios.post(`${BASE_URL}/`, body)

    return promise;
}

function Income(body) {
    const promise = axios.post(`${BASE_URL}/NovaEntrada`, body)

    return promise;
}

function Expense(body) {
    const promise = axios.post(`${BASE_URL}/NovaSaida`, body)

    return promise;
}



const api = {signUp, SignIn, Expense, Income}

export default api;
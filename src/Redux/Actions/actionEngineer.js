import axios from 'axios'

// const URL = "http://localhost:9000/engineer";

export const getAllEngineer = (URL) => {
    return {
        type: "GET_ALL_ENGINEER",
        payload: axios.get(URL)
    }
}



export const putEngineer = (URL, data) => {
    console.log('999', URL, data)
    return {
        type: "PUT_ENGINEER",
        payload: axios.put(URL, data)
    }
}




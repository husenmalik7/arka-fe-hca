import axios from 'axios'

// const URL = "http://localhost:9000/engineer";

export const getAllEngineer = (URL) => {
    return {
        type: "GET_ALL_ENGINEER",
        payload: axios.get(URL)
    }
}


export const searchEngineer = ()  => {
    return {
        type: "SEARCH_ENGINEER",
        payload: axios.get(URL)
    }
}



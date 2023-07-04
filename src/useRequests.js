import axios from "axios"

const API_KEY = "live_sjElN2uvnGQyVzS4fEHSFSgV4OcFHOty1CoqGr1EQHLD9FXTBISYjDGlhHjuA0te"
const API_URL = "https://api.thedogapi.com/v1"

export function getDogs(limit = 5, dogBreeds) {
    return axios.get(API_URL + `/images/search?limit=${limit}&breed_ids=${dogBreeds.length > 0 ? dogBreeds.join(",") : ""}`, {
        headers: {
            "x-api-key": API_KEY
        }
    })
}

export function getBreedDogs(limit = 6, randomBreed) {
    return axios.get(API_URL + `/breeds?limit=${limit}&page=${randomBreed}`, {
        headers: {
            "x-api-key": API_KEY
        }
    })
}
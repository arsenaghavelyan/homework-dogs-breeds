import { useState, useEffect } from "react"
import { getDogs } from "../useRequests.js"
import Reload from "./Reload.jsx"

export default function Dog({ dogBreeds }) {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        getDogs(10, dogBreeds).then((response) => {
            setDogs(response.data)
        })
    }, [dogBreeds])



    return (
        <div className=' flex flex-wrap  justify-center bg-purple-500 p-4 gap-4 mt-[20px] rounded-[10px]'>
            {dogs.length == 0 ? <Reload /> : ""}
            {
                dogs.map((el) => {
                    return (
                        <div key={el.id}>
                            <img src={el.url} className='w-[350px] ' />
                        </div>
                    )
                })
            }
        </div>
    )
}
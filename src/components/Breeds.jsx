import { useEffect, useState } from "react";
import { getBreedDogs } from "../useRequests"
import Reload from "./Reload";

export default function Breeds({ yntrvacBreeds }) {
    const [dogBreeds, setDogBreeds] = useState([])
    const [selectedBreeds, setSelectedBreeds] = useState([])

    useEffect(() => {
        const randomBreed = Math.round(Math.random() * 28)

        getBreedDogs(6, randomBreed).then((res) => {
            setDogBreeds(res.data)
        })
    }, [])

    useEffect(() => {
        yntrvacBreeds(selectedBreeds)
    }, [selectedBreeds])

    function haveBreed(x) {
        return selectedBreeds.includes(x)
    }

    function isSelected(id) {
        if (haveBreed(id)) {
            setSelectedBreeds(prev => prev.filter(el => el !== id))
        }
        else {
            setSelectedBreeds(prev => [...prev, id])
        }
    }

    return (
        <div className='flex justify-evenly bg-purple-500 p-4 rounded-[10px]'>
            {dogBreeds.length == 0 ? <Reload /> : ""}
            {
                dogBreeds.map((el) => {
                    return (
                        <div key={el.id} onClick={() => isSelected(el.id)} className={`${selectedBreeds.includes(el.id) ? "bg-white  rounded-[7px] p-1 hover:cursor-pointer" : "p-1 border-white rounded-[7px] text-white border-[1px] hover:bg-white hover:opacity-60 hover:text-black hover:cursor-pointer"}`}>
                            <p>{el.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
import { SearchIcon } from "@heroicons/react/outline";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { AnimalTypes } from "../utlis/interfaces";
import { AnimalView } from "./sharedComponents/HomeSharedComponents/AnimalsView";

export const HomeMiddle = (): JSX.Element => {
    const [animalApiData, setAnimalApiData] = useState<AnimalTypes[]>([]);
    const [searchQuery, setSearchQuery] = useState("")
    const fetchPetsData = (): void => {
        axios.get<AnimalTypes>("https://mocki.io/v1/ca4ae639-c97f-48fe-a15c-b06c650e53d6").then((res: AxiosResponse) => {
            setAnimalApiData(res.data);
        })
    }
    useEffect(() => {
        fetchPetsData();
    }, [])

    const PetsFilteredData = (): AnimalTypes[] => {
        if (searchQuery.length === 0) {
            return animalApiData
        } else {
            let filteredPets: AnimalTypes[] = [];
            // eslint-disable-next-line
            return filteredPets = searchQuery ?
                animalApiData.filter(element => element.root.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
                : []
        }
    }

    return (
        <div className="w-5/6 py-12 lg:ml-[16.666667%] mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold text-primary py-6 capitalize">these animals Are Waiting For, You Pick One And Come Now.</h1>
            <div className="relative  mx-auto max-w-xl flex items-center">
                <SearchIcon className="absolute right-4 text-primary w-6 h-6" />
                <input
                    placeholder="Search By Root..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="border-primary w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" />
            </div>
            <AnimalView
                animals={PetsFilteredData()} />
        </div >
    );
}
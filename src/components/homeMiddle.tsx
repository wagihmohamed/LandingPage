import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { AnimalTypes } from "../utlis/interfaces";
import { AnimalView } from "./sharedComponents/HomeSharedComponents/AnimalsView";

export const HomeMiddle = (): JSX.Element => {
    const [animalApiData, setAnimalApiData] = useState<AnimalTypes[]>([]);
    const fetchPetsData = (): void => {
        axios.get<AnimalTypes>("https://mocki.io/v1/8459f375-0388-49b6-89d0-363b1d55e90e").then((res: AxiosResponse) => {
            setAnimalApiData(res.data);
            console.log(res.data);

        })
    }
    useEffect(() => {
        fetchPetsData();
    }, [])
    return (
        <div className="w-5/6 py-12 lg:ml-[16.666667%] mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold text-primary py-6">These Animals Are Waiting For, You Pick One And Come Now.</h1>
            <AnimalView
                animals={animalApiData} />
        </div >
    );
}
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { AnimalTypes } from "../utlis/interfaces";
import { AnimalView } from "./sharedComponents/HomeSharedComponents/AnimalsView";

export const HomeMiddle = (): JSX.Element => {

    const [animalApiData, setAnimalApiData] = useState<AnimalTypes[]>([]);
    useEffect(() => {
        axios.get<AnimalTypes>("https://mocki.io/v1/8459f375-0388-49b6-89d0-363b1d55e90e").then((res: AxiosResponse) => {
            setAnimalApiData(res.data);
        })
    }, [])

    return (
        <div className="w-4/6 py-12 ml-[16.666667%] ">
            <h1 className="text-center text-4xl font-bold text-primary py-6">These Animals Are Waiting For You Pick One And Come Now.</h1>
            <AnimalView
                animals={animalApiData} />
        </div >
    );
}
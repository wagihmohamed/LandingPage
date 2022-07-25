import { animalData } from "../utlis/consts";
import { AnimalView } from "./sharedComponents/HomeSharedComponents/AnimalsView";

export interface AnimalDataType {
    name: string;
    id: number;
    animalImg: string;
    root: string;
    age: string;
}

export const HomeMiddle = (): JSX.Element => {
    return (
        <div className="w-4/6 py-12 ml-[16.666667%] ">
            <h1 className="text-center text-4xl font-bold text-primary py-6">These Animals Are Waiting For You Pick One And Come Now.</h1>
            <AnimalView
                animals={animalData} />
        </div >

    );
}
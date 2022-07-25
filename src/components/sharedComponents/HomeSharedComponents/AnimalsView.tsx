import { animalData } from "../../../utlis/consts";
import { AnimalDataType } from "../../homeMiddle";
import { AnimalCard } from "./AnimalCard";

interface AnimalViewProps {
    animals: AnimalDataType[]
}
export const AnimalView: React.FC<AnimalViewProps> = ({ animals }) => {
    return (
        <div className="max-w-5xl grid grid-cols-2 gap-8 px-8 mt-8 mx-auto ">
            {/* Animal Card */}
            {animalData.map((element) => (
                <AnimalCard
                    age={element.age}
                    animalImg={element.animalImg}
                    name={element.name}
                    root={element.root}
                    key={element.id}
                />
            ))}
        </div>
    );
}
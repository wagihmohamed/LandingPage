
import { AnimalTypes } from "../../../utlis/interfaces";
import { AnimalCard } from "./AnimalCard";

interface AnimalViewProps {
    animals: AnimalTypes[];
}
export const AnimalView: React.FC<AnimalViewProps> = ({ animals }) => {
    return (
        <div className="max-w-5xl grid md:grid-cols-2 gap-8 md:px-8 mt-8 mx-auto ">
            {/* Animal Card */}
            {animals.map((element) => (
                <AnimalCard
                    age={element.age}
                    animalImg={element.img}
                    name={element.name}
                    root={element.root}
                    key={element.id}
                />
            ))}
        </div>
    );
}
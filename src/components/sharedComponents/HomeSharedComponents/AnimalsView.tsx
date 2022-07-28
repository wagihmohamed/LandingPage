import { AnimalViewProps } from "../../../utlis/interfaces";
import { AnimalCard } from "./AnimalCard";

export const AnimalView: React.FC<AnimalViewProps> = ({ animals }) => {
    return (
        <div className="max-w-5xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto gap-8  mt-8">
            {/* Animal Card */}
            {animals.map((element) => (
                <AnimalCard
                    petType={element.petType}
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
interface AnimalCardProps {
    name: string;
    animalImg: string;
    root: string;
    age: string;
}


export const AnimalCard: React.FC<AnimalCardProps> = ({ age, animalImg, name, root }) => {
    return (
        <div className="bg-gray-500/5 shadow-lg rounded-lg border border-primary/20 flex flex-col transition-all hover:scale-sm">
            <img className="h-96 w-full object-cover rounded-lg" src={animalImg} alt="" />
            <div className="flex-1 px-3">
                <p className="font-bold text-2xl pt-4"><span className="text-primary pr-2">Name:</span> {name.toUpperCase()}</p>
                <p className="font-bold text-2xl py-4"><span className="text-primary pr-2">Age:</span>{age} years old</p>
                <p className="font-bold text-2xl"><span className="text-primary pr-2">Root:</span>{root.toUpperCase()}</p>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-300 mt-4 py-1 divide-x-2 divide-gray-300">
                <button className="p-3 font-medium text-sm hover:bg-gray-100">Adopt Now</button>
                <button className="p-3 font-medium text-sm hover:bg-gray-100">Adopt Now</button>
                <button className="p-3 font-medium text-sm hover:bg-gray-100">Adopt Now</button>
            </div>
        </div>
    );
}
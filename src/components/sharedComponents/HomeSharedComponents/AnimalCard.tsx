import { AnimalCardProps } from '../../../utlis/interfaces';
export const AnimalCard: React.FC<AnimalCardProps> = ({
  age,
  animalImg,
  name,
  petType,
  root,
}) => {
  return (
    <div className="bg-gray-500/5 shadow-lg rounded-lg border border-primary/20 flex flex-col transition-all cursor-pointer hover:scale-sm">
      <img
        className="h-70 md:h-96 w-full object-cover rounded"
        src={animalImg}
        alt=""
      />
      <div className="flex-1 space-y-4 flex flex-col items-start px-3">
        <p className="font-semibold text-primary text-2xl pt-4">
          Name:
          <span className="capitalize text-gray-800 pl-4">{name}</span>
        </p>
        <p className="font-semibold text-primary text-2xl">
          Age:
          <span className="text-gray-800 pl-4">{age} years old</span>
        </p>
        <p className="font-semibold text-2xl text-primary">
          Pet Type:
          <span className="capitalize text-gray-800 pl-4">{petType} </span>
        </p>
        <p className="font-semibold text-primary text-2xl">
          Pet Root:
          <span className="capitalize text-gray-800 pl-4">{root}</span>
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-gray-300 mt-4 py-1 divide-x-2 divide-gray-300">
        <button className="p-3 font-medium text-sm hover:bg-gray-200">
          Adopt Now
        </button>
        <button className="p-3 font-medium text-sm hover:bg-gray-200">
          Pet Info
        </button>
        <button className="p-3 font-medium text-sm hover:bg-gray-200">
          Details
        </button>
      </div>
    </div>
  );
};

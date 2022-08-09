import { SearchIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { getPets } from '../app/features/petSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AnimalTypes } from '../utlis/interfaces';
import { AnimalView } from './sharedComponents/HomeSharedComponents/AnimalsView';

export const HomeMiddle = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const petsArr = useAppSelector((state) => state.pet.pets);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('wasda');

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const PetsFilteredData = (): AnimalTypes[] => {
    if (searchQuery.length === 0) {
      return petsArr;
    } else {
      let filteredPets: AnimalTypes[] = [];
      // eslint-disable-next-line
      return (filteredPets = searchQuery
        ? petsArr.filter((element) =>
            element.root
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase())
          )
        : []);
    }
  };
  return (
    <div className="w-5/6 py-12 lg:ml-[16.666667%] flex flex-col text-center items-center mx-auto mt-12">
      <h1 className="text-4xl font-bold  text-primary py-6 capitalize">
        these animals Are Waiting For, You Pick One And Come Now.
      </h1>
      <h3 className="text-2xl font-medium py-6 capitalize">
        Currently there is{' '}
        <span className="text-primary px-2">{petsArr.length}</span>
        available for adoption
      </h3>
      <div className="relative drop-shadow-md w-full transition-all hover:scale-sm mx-auto max-w-xl flex items-center">
        <SearchIcon className="absolute right-4 text-primary w-6 h-6" />
        <input
          placeholder="Search By Root..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="border-primary w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
        />
      </div>
      <AnimalView animals={PetsFilteredData()} />
    </div>
  );
};

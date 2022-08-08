import { createSlice } from '@reduxjs/toolkit';
import { AnimalTypes } from '../../utlis/interfaces';

const initialState: AnimalTypes[] = [
  {
    id: 0,
    age: 0,
    img: '',
    name: '',
    petType: '',
    root: '',
  },
];

export const peteSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPets: (state, action) => {
      return (state = action.payload);
    },
    showDogsOnly: (state, action) => {
      return state.filter(
        (pet) =>
          pet.petType.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );
    },
  },
});

export const { addPets, showDogsOnly } = peteSlice.actions;

export default peteSlice.reducer;

// showDogsOnly: (state) => {
//   return state.filter((pet) => pet.petType.toLocaleLowerCase() === 'dog');
// },

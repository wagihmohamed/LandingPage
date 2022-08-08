import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AnimalTypes } from '../../utlis/interfaces';

interface PetState {
  pets: AnimalTypes[];
  status: any;
}
const initialState: PetState = {
  pets: [],
  status: null,
};

export const getPets = createAsyncThunk('pets/getPets', async () => {
  return await axios
    .get<AnimalTypes>(
      'https://mocki.io/v1/ca4ae639-c97f-48fe-a15c-b06c650e53d6'
    )
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
});

export const peteSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPets: (state, action: PayloadAction<AnimalTypes[]>) => {
      state.pets = action.payload;
    },
    showOnPetTypeOnly: (state, action) => {
      state.pets = state.pets.filter(
        (pet) => pet.petType === action.payload.toLocaleLowerCase()
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPets.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getPets.fulfilled, (state, action) => {
      state.status = 'success';
      state.pets = action.payload;
    });
    builder.addCase(getPets.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { addPets, showOnPetTypeOnly } = peteSlice.actions;

export default peteSlice.reducer;

import {  InitialCarsState } from './types';


const initialState: InitialCarsState = {
  isLoading: false,
  isFilter: false,
  filtersAdverts: [],
  error: null,
  adverts: [],
  favorites: [],
  page: 1,
  formData: {
    make: null,
  },
};

export default initialState;

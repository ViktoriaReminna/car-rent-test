interface FormData {
  make: string | null;
}
interface InitialCarsState {
  isLoading: boolean;
  isFilter: boolean;
  filtersAdverts: [];
  error: null;
  adverts: [];
  favorites: [];
  page: number;
  formData: FormData;
}

export type { InitialCarsState };

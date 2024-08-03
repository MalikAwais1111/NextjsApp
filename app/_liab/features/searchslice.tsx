import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchitem: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { searchitem } = SearchSlice.actions;
export default SearchSlice.reducer;

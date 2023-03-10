import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk(
  "search/getSearch",
  async (keyword) => {
    const response = await axios.get(
      process.env.REACT_APP_API_BACKEND + "product?search=" + keyword,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log("tes = ", response.data.data.data);
    return response.data.data.data;
  }
);

const searchEntity = createEntityAdapter({
  selectId: (search) => search.id,
});

const searchSlice = createSlice({
  name: "search",
  initialState: searchEntity.getInitialState,
  extraReducers: {
    [getSearch.fulfilled]: (state, action) => {
      searchEntity.setAll(state, action);
    },
  },
});

export const searchSelectors = searchEntity.getSelectors(
  (state) => state.search
);

export default searchSlice.reducer;

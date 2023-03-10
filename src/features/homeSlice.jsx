import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getHome = createAsyncThunk(
  "home/getHome",
  async (valueSenderSearch) => {
    const response = await axios.get(
      process.env.REACT_APP_API_BACKEND + "product?" + valueSenderSearch,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data.data;
  }
);

const homeEntity = createEntityAdapter({
  selectId: (home) => home.id,
});

const homeSlice = createSlice({
  name: "home",
  initialState: homeEntity.getInitialState,
  extraReducers: {
    [getHome.fulfilled]: (state, action) => {
      homeEntity.setAll(state, action);
    },
  },
});

export const homeSelectors = homeEntity.getSelectors((state) => state.home);

export default homeSlice.reducer;

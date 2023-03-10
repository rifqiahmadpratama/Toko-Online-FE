import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const postLogin = createAsyncThunk(
  "login/postLogin",
  async ({ email, password }) => {
    const response = await axios.post(
      process.env.REACT_APP_API_BACKEND + "user/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.data.statusCode === 201) {
      toast.success("Sign Up Success. wait a few seconds", {
        autoClose: 2000,
        toastId: "successLogin",
      });
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      localStorage.setItem("id", response.data.data.id);
      localStorage.setItem("name", response.data.data.name);
    } else {
      toast.warning(response.data.message, {
        autoClose: 2000,
        toastId: "warningLogin",
      });
    }
    return response.data;
  }
);

const loginEntity = createEntityAdapter({
  selectId: (login) => login.id,
});

const loginSlice = createSlice({
  name: "login",
  initialState: loginEntity.postInitialState,
  extraReducers: {
    [postLogin.pending]: (state) => {
      state.status = "loading";
    },
    [postLogin.fulfilled]: (state, action) => {
      state.status = "succeeded";
      loginEntity.addOne(state, action.payload);
    },
    [postLogin.pendirejectedng]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// export const registerSelector = registerEntity.postSelectors(
//   (state) => state.register
// );

export default loginSlice.reducer;

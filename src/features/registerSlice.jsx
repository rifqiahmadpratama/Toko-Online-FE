import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const postRegister = createAsyncThunk(
  "register/postRegister",
  async (userPenjual) => {
    const response = await axios.post(
      process.env.REACT_APP_API_BACKEND + "user/register-penjual",
      JSON.stringify(userPenjual),
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
        toastId: "successSignUp",
      });
    } else {
      toast.warning(response.data.message, {
        autoClose: 2000,
        toastId: "warningSignUp",
      });
    }
    return response.data;
  }
);

const registerEntity = createEntityAdapter({
  selectId: (register) => register.id,
});

const registerSlice = createSlice({
  name: "register",
  initialState: registerEntity.postInitialState,
  extraReducers: {
    [postRegister.pending]: (state) => {
      state.status = "loading";
    },
    [postRegister.fulfilled]: (state, action) => {
      state.status = "succeeded";
      registerEntity.addOne(state, action.payload);
    },
    [postRegister.pendirejectedng]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// export const registerSelector = registerEntity.postSelectors(
//   (state) => state.register
// );

export default registerSlice.reducer;

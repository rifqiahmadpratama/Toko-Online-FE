import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    process.env.REACT_APP_API_BACKEND + "user/profile",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("cek user = ", response.data.data[0]);
  return response.data.data[0];
});

export const putProfile = createAsyncThunk(
  "ProfileUser/putProfileUser",
  async (formData) => {
    const token = localStorage.getItem("token");
    const response = await axios
      .put(process.env.REACT_APP_API_BACKEND + "user/updateProfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Update Profile Success", { autoClose: 2500 });
      })
      .catch((err) => {
        // getProfileUser()
        console.log(err);
        toast.warning(err.response.data.message, { autoClose: 2500 });
        // alert(err);
      });

    return response;
  }
);
const profileEntity = createEntityAdapter({
  selectId: (profile) => profile[0],
});

const profileSlice = createSlice({
  name: "profile",
  initialState: profileEntity.getInitialState,
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      profileEntity.setAll(state, action);
    },
  },
});

export const profileSelector = profileEntity.getSelectors(
  (state) => state.profile
);

export default profileSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../components/share/BaseUrl";

export const getBasketFromServer = createAsyncThunk(
  "basket/getBasketFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeBasket = createAsyncThunk(
  "basket/removeBasket",
  async (id) => {
    return fetch(`${BaseUrl}/baskets/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getBasketFromServer.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(removeBasket.fulfilled, (state, action) => {
        const newBasket = state.filter(
          (item) => item._id !== action.payload.id
        );

        return newBasket;
      });
  },
});

export default slice.reducer;

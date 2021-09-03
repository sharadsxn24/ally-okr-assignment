import { createSlice } from "@reduxjs/toolkit";
import getOkrList from "./actions";

export const INITIAL_STATE = {
  filters: {
    category: '',
  },
  okrList: {
    loading: false,
    data: [],
    error: null,
  }
}

const okrSlice = createSlice({
  name: 'okr',
  initialState: INITIAL_STATE,
  reducers: {
    setOkrFilter(state, action) {
      state.filters = {
        ...state.filters,
        [action.payload.id]: action.payload.value
      }
    }
  },
  extraReducers: {
    [getOkrList.pending]: (state, action) => {
      state.okrList = {
        loading: true,
        data: [],
        error: null,
      }
    },
    [getOkrList.fulfilled]: (state, action) => {
      state.okrList = {
        loading: false,
        data: action.payload,
        error: null,
      };
    },
    [getOkrList.rejected]: (state, action) => {
      state.okrList = {
        loading: false,
        data: [],
        error: action.payload,
      }
    }
  }
})

const { actions, reducer } = okrSlice;

export const { setOkrFilter } = actions

export default reducer;
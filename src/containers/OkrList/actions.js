import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOkrs } from "../../services/OkrService";

const getOkrList = createAsyncThunk('okr/okrListLoading', async () => {
  const response = await fetchOkrs();
  return response.data.data;
});

export default getOkrList;

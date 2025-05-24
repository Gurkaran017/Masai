// src/redux/actions.js
import axios from 'axios';

export const fetchCoffees = (sortBy = "") => async (dispatch) => {
  dispatch({ type: "FETCH_REQUEST" });

  try {
    const response = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee${sortBy ? `?sort=price&order=${sortBy}` : ""}`
    );
    dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "FETCH_FAILURE" });
  }
};

import axios from "axios";

export const fetchMatches = () => async (dispatch) => {
  dispatch({ type: "FETCH_MATCHES_REQUEST" });
  try {
    const response = await axios.get("https://jsonmock.hackerrank.com/api/football_matches?page=2");
    const matches = response.data.data.map((match, index) => ({
      ...match,
      id: `${match.team1}-${match.team2}-${index}` // unique id
    }));
    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: matches });
  } catch (error) {
    dispatch({ type: "FETCH_MATCHES_FAILURE" });
  }
};

export const toggleFavorite = (match) => ({
  type: "TOGGLE_FAVORITE",
  payload: match
});

import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  INCREMENT_SCORE,
  NEXT_QUESTION,
} from "./actionTypes";

const initState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  error: null,
};

export const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, error: action.payload };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case NEXT_QUESTION:
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      return state;
  }
};

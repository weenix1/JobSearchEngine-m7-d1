import { initialState } from "../store";
import { GET_JOBS, GET_JOBS_ERROR, TOGGLE_LOADER } from "../actions";

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from every case is the SAME
// as the initialValue you're providing to it

// a PURE FUNCTION never mutates its arguments

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;

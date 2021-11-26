import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favoriteReducer from "../reducers/favorite";
import jobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    jobs: [],
    error: "",
  },

  jobs: {
    jobList: [],
    isError: false,
    isLoading: true,
  },
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,

  jobs: jobsReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;

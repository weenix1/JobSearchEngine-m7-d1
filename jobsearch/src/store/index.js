import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favoriteReducer from "../reducers/favorite";
import jobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
// our storage currently points to the localStorage

import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,

  jobs: jobsReducer,
});

const persistedBigReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedBigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default configureStore;

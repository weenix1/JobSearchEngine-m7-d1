export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS = "GET_JOBS";
export const TOGGLE_LOADER = "TOGGLE_LOADER";

// in this file we're going to export our actions
// what

// this is called an ACTION CREATOR
// a function that returns an action (a JS object)

export const addToFavoriteAction = (jobToAdd) => ({
  type: ADD_TO_FAVORITE,
  payload: jobToAdd, // this is going to be the book we intend to add to the cart
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

export const removeFromFavoriteAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
});

// the function returns an object, so you can dispatch it INSTEAD of dispatching the object

export const getJobsAction = (text) => {
  return async (dispatch) => {
    // if you're trying to dispatch something that is NOT an action WITHOUT thunk
    // everything will crash!
    // BUT if you have redux-thunk in the flow, the function you'll eventually dispatch
    // is going to be given by redux-thunk a DISPATCH function as the first argument
    console.log("Hello! this is a thunk action creator");
    // ...you can do whatever you want here
    // let's do a fetch!
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${text.text}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        let newData = data.data;
        // now it's time do to the dispatch
        dispatch({
          type: GET_JOBS,
          payload: newData,
        });
        setTimeout(() => {
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          });
        }, 1000);
      } else {
        console.log("Houston, we got an error :(");
        // we can also dispatch ANOTHER action here for the error!
        dispatch({
          type: GET_JOBS_ERROR,
        });
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
      });
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      });
    }
  };
};

export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

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

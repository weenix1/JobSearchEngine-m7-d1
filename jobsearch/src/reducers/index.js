import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,

          jobs: [...state.favorite.jobs, action.payload], // <- just my preference
        },
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          jobs: state.favorite.jobs.filter((el, i) => i !== action.payload), // <- it works!
          //   content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)],
          // this also works, slightly more complex... :)
        },
      };

    default:
      return state;
  }
};

export default mainReducer;

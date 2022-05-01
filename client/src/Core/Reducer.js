// initial state
const intialState = {
  allRecipes: [],
  recipesByKeyword: [],
  detailsRecipe: [],
  typesDiet: [],
};

// build reducer
const recipeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_RECIPES":
      return {
        ...state,
        allRecipes: payload,
      };

    case "GET_RECIPES_BY_KEYWORD":
      return {
        ...state,
        recipesByKeyword: payload,
      };

    case "GET_DETAILS_RECIPE":
      return {
        ...state,
        detailsRecipe: payload,
      };

    case "POST_RECIPE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

// export reducer
export default recipeReducer;

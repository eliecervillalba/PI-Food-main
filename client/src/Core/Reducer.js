// initial state
const intialState = {
  allRecipes: [],
  Recipes: [],
  recipesByKeyword: [],
  detailsRecipe: [],
  typesDiet: [],
  diet: "",
};

// build reducer
const recipeReducer = (state = intialState, { type, payload, diet }) => {
  // case actons
  switch (type) {
    case "GET_ALL_RECIPES":
      return {
        ...state,
        allRecipes: payload,
        Recipes: payload,
      };

    case "GET_RECIPES_BY_KEYWORD":
      return {
        ...state,
        Recipes: payload,
        recipesByKeyword: payload,
      };

    case "GET_DETAILS_RECIPE":
      return {
        ...state,
        detailsRecipe: payload,
      };

    case "GET_TYPES_DIET":
      return {
        ...state,
        typesDiet: payload,
      };

    case "FILTER_TYPES_DIET":
      return {
        ...state,
        Recipes: payload,
        diet: diet,
      };

    case "SORT_BY_NAME":
      return {
        ...state,
        Recipes: payload,
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

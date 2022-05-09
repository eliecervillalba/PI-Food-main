// initial state
const intialState = {
  allRecipes: [],
  Recipes: [],
  detailsRecipe: [],
  typesDiet: [],
  order: false,
};

// build reducer
const rootReducer = (state = intialState, { type, payload }) => {
  console.log(type, payload);
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
        Recipes:
          payload.dietName === "all"
            ? payload.recipes
            : payload.recipes?.filter((e) => {
                return e.diets.includes(payload.dietName);
              }),
      };

    case "SORT_BY_NAME":
      return {
        ...state,
        Recipes:
          payload.typeOrder === "asc"
            ? payload.recipes.sort((f, s) => (f.title > s.title ? 1 : -1))
            : payload.typeOrder === "des"
            ? payload.recipes.sort((f, s) => (f.title > s.title ? -1 : 1))
            : payload.recipes,
        order: payload.order,
      };

    case "SORT_BY_SCORE":
      return {
        ...state,
        Recipes:
          payload.typeOrder === "low"
            ? payload.recipes.sort((f, s) =>
                f.spoonacularScore > s.spoonacularScore ? 1 : -1
              )
            : payload.typeOrder === "high"
            ? payload.recipes.sort((f, s) =>
                f.spoonacularScore > s.spoonacularScore ? -1 : 1
              )
            : payload.recipes,
        order: payload.order,
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
export default rootReducer;

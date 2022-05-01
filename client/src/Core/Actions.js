import axios from "axios";
axios.defaults.baseURL = `http://localhost:3001`;

// GET ALL RECIPES: get all recipes
export function getAllRecipes() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes`);
      //console.warn(response);
      return dispatch({
        type: "GET_ALL_RECIPES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET RECIPES BY KEYWORD: get all recipes searching by keyword
export function getRecipeByWord(keyWord) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes?name=${keyWord}`);
      return dispatch({
        type: "GET_RECIPES_BY_KEYWORD",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET DETAILS RECIPE: get recipe searching by id
export function getDetailsRecipe(idRecipe) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes/${idRecipe}`);
      return dispatch({
        type: "GET_DETAILS_RECIPE",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET TYPES DIET: get all types diet
export function getTypesDiet() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/types}`);
      return dispatch({
        type: "GET_TYPES_DIET",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// Create Recipe (POST)
export function postRecipe(payload) {
  return async (dispatch) => {
    return await axios.post(`/recipe`, payload);
  };
}

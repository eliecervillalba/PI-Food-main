// import libraries
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import recipeReducer from "./Reducer";

const store = createStore(
  recipeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export redux store
export default store;

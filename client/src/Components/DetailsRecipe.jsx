/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
// import libraries
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { getDetailsRecipe } from "../Core/Actions";

// import styles
import "./DetailsRecipe.css";

// create DetailsRecipe component
function DetailsRecipe() {
  // destructuring and asignations
  const dispatch = useDispatch();
  const { idRecipe } = useParams();
  const Recipe = useSelector((state) => state.detailsRecipe);

  // useEffect for details recipe
  useEffect(() => {
    dispatch(getDetailsRecipe(idRecipe));
  }, []);

  // render component
  return (
    <div>
      {Recipe ? (
        Recipe.map((recipe) => {
          return (
            <React.Fragment key={recipe.id}>
              <h1>Details Recipe</h1>
              <h4>Tilte recipe: {recipe.title}</h4>
              <img src={recipe.image} alt="" />
              <h4>Types Diet: {recipe.diets?.join(", ")}</h4>
              <h4>Sumary:</h4>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <h4>Score: {recipe.spoonacularScore}</h4>
              <h4>Health Score: {recipe.healthScore}</h4>
              <h4>Instructions to prepare the recipe:</h4>
              {recipe.analyzedInstructions ? (
                recipe.analyzedInstructions.map((inst) => {
                  return (
                    <li key={inst.number}>
                      {inst.step}
                      <br></br>
                      <br></br>
                    </li>
                  );
                })
              ) : (
                <h4>Instructions not found!</h4>
              )}
            </React.Fragment>
          );
        })
      ) : (
        <h4>Details Recipe not found!</h4>
      )}
      <div>
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

// export component
export default DetailsRecipe;

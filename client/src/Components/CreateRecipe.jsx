// import libraries, hooks and styles
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypesDiet, postRecipe } from "../Core/Actions";

//import components
import NavBar from "./NavBar";

// error validation on form inputs
function validateError(inputs) {
  let objError = {};
  if (!inputs.title) return (objError.name = "Name is required!");
  if (!inputs.summary) return (objError.summary = "Summary is required!");
  if (!inputs.spoonacularScore < 0 || !inputs.spoonacularScore > 100)
    return (objError.spoonacularScore =
      "The score cannot be below 0 or above 100.");
  if (!inputs.healthScore < 0 || !inputs.healthScore > 100)
    return (objError.healthScore =
      "The Healthscore cannot be below 0 or above 100.");
  return objError;
}

// build component
function CreateRecipe() {
  const typesDiet = useSelector((state) => state.typesDiet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypesDiet());
  }, [dispatch]);

  // create local states for the inputs and error validation
  const [inputs, setInputs] = useState({
    title: "",
    summary: "",
    diets: [],
    spoonacularScore: 0,
    healthScore: 0,
    analyzedInstructions: [],
    image: "",
    createOwnner: true,
  });

  const [error, setError] = useState({});

  // build handle submit function
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(inputs));
    setInputs({
      title: "",
      summary: "",
      diets: [],
      spoonacularScore: 0,
      healthScore: 0,
      analyzedInstructions: [],
      image: "",
      createOwnner: true,
    });
    alert("Recipe saved succesfully");
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setError(validateError({ ...inputs, [e.target.name]: e.target.value }));
  }

  function handleAddSelect(e) {
    setInputs({ ...inputs, diets: [...inputs.diets, e.target.value] });
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1>Create your own recipe</h1>
        </div>
        <div>
          <p>Title:</p>
          <input
            type="text"
            value={inputs.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          {error.name && <p>{error.name}</p>}

          <p>Summary:</p>
          <textarea
            type="textarea"
            value={inputs.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
          {error.summary && <p>{error.summary}</p>}

          <p>Types Diet:</p>
          <select onChange={(e) => handleAddSelect(e)}>
            <option value="null">{"- Select -"}</option>

            {typesDiet?.map((diet) => {
              return (
                <option key={diet.name} value={diet.name}>
                  {diet.name}
                </option>
              );
            })}
          </select>

          <p>Score:</p>
          <input
            type="number"
            value={inputs.spoonacularScore}
            name="spoonacularScore"
            onChange={(e) => handleChange(e)}
          />
          {error.spoonacularScore && <p>{error.spoonacularScore}</p>}

          <p>HealthScore:</p>
          <input
            type="numer"
            value={inputs.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
          {error.healthScore && <p>{error.healthScore}</p>}

          <p>Intructions:</p>
          <textarea
            type="textarea"
            placeholder={`Step 1:          Step 2:`}
            value={inputs.analyzedInstructions}
            name="analyzedInstructions"
            onChange={(e) => handleChange(e)}
          />

          <p>Add image:</p>
          <input
            type="text"
            value={inputs.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}

// export component
export default CreateRecipe;

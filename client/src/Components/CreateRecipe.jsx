// import libraries, hooks and styles
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe } from "../Core/Actions";
import "./CreateRecipe.css";

// build component
function CreateRecipe() {
  const typesDiet = useSelector((state) => state.typesDiet);
  const dispatch = useDispatch();

  // create state local for the inputs
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
  }

  function handleAddSelect(e) {
    setInputs({ ...inputs, diets: [...inputs.diets, e.target.value] });
  }

  return (
    <div>
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

          <p>Summary:</p>
          <textarea
            type="textarea"
            value={inputs.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />

          <p>Types Diet:</p>
          <select onChange={(e) => handleAddSelect(e)}>
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

          <p>HealthScore:</p>
          <input
            type="numer"
            value={inputs.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />

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
      </form>
    </div>
  );
}

// export component
export default CreateRecipe;

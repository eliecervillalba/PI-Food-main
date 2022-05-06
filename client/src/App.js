/* importar React */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* importar componentes */
import Main from "./Components/Main";
import Home from "./Components/Home";
import DetailsRecipe from "./Components/DetailsRecipe";
import CreateRecipe from "./Components/CreateRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/recipes/:idRecipe" element={<DetailsRecipe />} />
        <Route exact path="/recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;

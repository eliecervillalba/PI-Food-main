// import libraries
import React from "react";
import { Link } from "react-router-dom";

import "./CardRecipe.css";

function CardRecipe({ id, image, title, diets }) {
  return (
    <div className="card">
      <div className="card-body">
        <Link to={`/recipes/${id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Types Diet:</p>
            {/* {diets?.map((e) => {
              return <p key={e}>{e}</p>;
            })} */}
            <p>{diets.toString()}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={image}
              width="200"
              height="200"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export component
export default CardRecipe;

import React, { useState } from "react";
import Tutorial from "./Modals/Tutorial.js";
import Game from "./Modals/Game.js";

function Modals(props) {
  const { data, step, handleModal, type } = props;
  const typeTest = type === "tutorial";
  return (
    <div className="modal-container">
      <div className="modal">
        {typeTest ? (
          <Tutorial data={data} step={step} handleModal={handleModal} />
        ) : (
          <h1>hello hell</h1>
        )}
      </div>
    </div>
  );
}

export default Modals;

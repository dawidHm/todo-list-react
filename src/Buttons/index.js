import React from "react";
import "./style.css";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="section__filterButtonsContainer">
        {tasks.length > 0 && (
            <React.Fragment>
                <button onClick={toggleHideDone} className="section__filterButton">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    onClick={setAllDone}
                    className="section__filterButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;
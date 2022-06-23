import React from "react";
import "./style.css";


const Buttons = ({ tasks, hideDone }) => (
    <div className="section__filterButtonsContainer">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__filterButton">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
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
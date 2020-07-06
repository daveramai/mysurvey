import React from "react";

// destructure passed as the param Vs. passing props
const NavBar = ({ completedQuestions, totalQues, onSubmit }) => {
  const styles = {
    color: "green",
    fontWeight: "bold",
  };

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000">
        <span style={styles}>My Survey</span>{" "}
        <span className="badge badge-pill badge-primary">
          {completedQuestions + " of " + totalQues + " questions answered"}
        </span>
      </a>
      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => onSubmit(completedQuestions)}
        className="button btn btn-primary"
      >
        Submit
      </button>
    </nav>
  );
};

export default NavBar;

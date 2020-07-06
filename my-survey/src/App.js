import React from "react";
import Cards from "./components/cards";
import NavBar from "./components/navbar";
import Results from "./components/results";
import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  options = {
    a: "Yes",
    b: "No",
    c: "Maybe",
    d: "No response",
  };

  state = {
    questions: [
      {
        id: 1,
        subject: "Do you know ReactJS?",
        options: this.options,
        response: "",
      },
      {
        id: 2,
        subject: "Is JSX easy to learn?",
        options: this.options,
        response: "",
      },
      {
        id: 3,
        subject: "Would you recommend Javascript?",
        options: this.options,
        response: "",
      },
    ],
    output: [],
    display: "d-none",
    variant: "",
    header: "",
  };

  handleUpdate = (e, question) => {
    question.response = e.target.value; //set object response to the value selected
    const questions = [...this.state.questions]; //clone questions state object
    const index = questions.indexOf(question); //find index of question in cloned object
    questions[index] = { ...question }; //update cloned value for that index
    this.setState({ questions: questions, display: "d-none" });
    // console.log(questions);
  };

  handleSubmit = (completedQues) => {
    const totalQues = this.state.questions.length;
    const output = [];
    let variant = "";
    let header = "";
    if (completedQues !== totalQues) {
      output.push("Please answer all the questions before submitting.");
      variant = "warning";
      header = "Survey incomplete :(";
    } else {
      this.state.questions.map((q, i) => {
        return output.push(
          i + 1 + ") " + q.subject + " - " + this.options[q.response]
        );
      });
      variant = "success";
      header = "Thank you for completing :)";
    }
    this.setState({
      output: output,
      display: "d-block",
      variant: variant,
      header: header,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onSubmit={this.handleSubmit}
          totalQues={this.state.questions.length}
          completedQuestions={
            this.state.questions.filter((q) => q.response !== "").length
          }
        />
        <main className="container">
          <div>
            <h1>Survey</h1>
            &nbsp;
            <Alert className={this.state.display} variant={this.state.variant}>
              <Results payload={this.state.output} header={this.state.header} />
            </Alert>
            <Cards
              questions={this.state.questions}
              onUpdate={this.handleUpdate}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

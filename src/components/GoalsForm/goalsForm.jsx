import React, { Component } from "react";
import "./goalsForm.css";

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGoalContent: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeGoal = this.writeGoal.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      newGoalContent: e.target.value,
    });
    console.log("input", e.target.value);
  }

  writeGoal() {
    // this.props.newGoalDescription(this.state.newGoalContent);
    this.props.postGoal(this.state.newGoalContent);

    // Set newNoteContent back to an empty string.
    this.setState({
      newGoalContent: "",
    });
    this.props.handleClose();
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="goalInput"
          placeholder="Write a new goal..."
          value={this.state.newGoalContent}
          onChange={this.handleUserInput}
        />
        <br />
        <button className="goalButton" onClick={this.writeGoal}>
          Submit
        </button>
      </div>
    );
  }
}

export default GoalForm;

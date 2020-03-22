import React, { Component } from 'react';
import './goalsForm.css';

class GoalForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newGoalContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeGoal = this.writeGoal.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newGoalContent: e.target.value, // the value of the text input
        })
    }

    writeGoal(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addGoal(this.state.newGoalContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newGoalContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="goalInput"
                placeholder="Write a new goal..."
                value={this.state.newGoalContent} 
                onChange={this.handleUserInput} />
                <button className="goalButton"
                onClick={this.writeGoal}>Add Goal</button>
            </div>
        )
    }
}

export default GoalForm;
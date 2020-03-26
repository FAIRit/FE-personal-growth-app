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

    handleUserInput(e){
        this.setState({
            newGoalContent: e.target.value,
        })
    }

    writeGoal(){
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
                onClick={this.writeGoal}>+</button>
            </div>
        )
    }
}

export default GoalForm;
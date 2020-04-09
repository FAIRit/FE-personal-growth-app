import React, { Component } from 'react';
import './goals.css';
import CheckboxesTags from '../Category/category';
import GitHubLabel from '../Labels/labels';

class Goal extends Component{

    constructor(props){
        super(props);
        this.goal = props.goalContent; 
        this.goalId = props.goalId; 
        this.handleRemoveGoal = this.handleRemoveGoal.bind(this);
    }

    handleRemoveGoal(id){
        this.props.removeGoal(id);
    }

    render(){
        return(
            <div className="goal fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveGoal(this.goalId)}>
                      &times;
                </span>
                <p className="goalContent">{ this.goal }</p>
                <CheckboxesTags />
                <GitHubLabel />
            </div>
        )
    }
}

export default Goal;
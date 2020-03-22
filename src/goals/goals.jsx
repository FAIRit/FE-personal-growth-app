import React, { Component } from 'react';
import './goals.css';
import PropTypes from 'prop-types';

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
                <p className="goalContent">{ this.goalContent }</p>
            </div>
        )
    }
}

Goal.propTypes = {
    goalContent: PropTypes.string
}

export default Goal;
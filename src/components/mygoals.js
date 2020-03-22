import React, { Component, Fragment } from 'react';
import Goals from '../goals/goals';
import { Grid } from 'react-mdl';
import GoalsForm from '../goalsForm/goalsForm';
import fire from '../firebase/firebase';

class MyGoals extends Component {

  constructor(props){
    super(props);
    this.addGoal = this.addGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);

    this.app = fire;
    this.database = this.app.database().ref().child('goals');

    // We're going to setup the React state of our component
    this.state = {
      goals: [],
    }
  }

  componentWillMount(){
    const previousGoals = this.state.goals;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousGoals.push({
        id: snap.key,
        goalContent: snap.val().goalContent,
      })

      this.setState({
        goals: previousGoals
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousGoals.length; i++){
        if(previousGoals[i].id === snap.key){
          previousGoals.splice(i, 1);
        }
      }

      this.setState({
        goals: previousGoals
      })
    })
  }

  addGoal(goal){
    this.database.push().set({ goalContent: goal});
  }

  removeGoal(goalId){
    console.log("from the parent: " + goalId);
    this.database.child(goalId).remove();
  }

  render() {
    return (
    <Fragment>
        <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="mygoals-grid">
        <div className="goalsWrapper">
            <div className="goalsHeader">
            <div className="heading">My Goals List for time :</div>
            </div>
            <div className="goalsBody">
            {
                this.state.goals.map((goal) => {
                return (
                    <Goals goalContent={goal.goalContent} 
                    goalId={goal.id} 
                    key={goal.id} 
                    removeGoal ={this.removeGoal}/>
                )
                })
            }
            </div>
            <div className="goalsFooter">
            <GoalsForm addGoal={this.addGoal} />
            </div>
        </div>
        </Grid>
        </div>
    </Fragment>
    );
  }
}

export default MyGoals;
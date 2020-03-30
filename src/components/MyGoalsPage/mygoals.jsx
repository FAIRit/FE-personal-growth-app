import React, { Component, Fragment } from 'react';
import Goals from '../Goals/goals';
import GoalsForm from '../GoalsForm/goalsForm';
import fire from '../../firebase/firebase';
import PrimarySearchAppBar from '../HomePage/home.jsx'

class MyGoals extends Component {

  constructor(props){
    super(props);
    let user = fire.auth().currentUser;
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
        userId: snap.val().userId,
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
    this.database.push().set({ goalContent: goal, userId: fire.auth().currentUser.uid });
  }

  removeGoal(goalId){
    console.log("from the parent: " + goalId);
    this.database.child(goalId).remove();
  }

  render() {
    return (
      <Fragment>
        <PrimarySearchAppBar />
        <div className="goalsWrapper">
            <div className="goalsHeader">
            <div className="heading">My Goals List :</div>
            </div>
            <div className="goalsBody">
            {
                this.state.goals.map((goal) => {
                if (goal.userId == fire.auth().currentUser.uid) {
                  return (
                      <Goals goalContent={goal.goalContent} 
                      goalId={goal.id} 
                      key={goal.id} 
                      userId={fire.auth().currentUser.uid}
                      removeGoal ={this.removeGoal}/>
                  )} 
                else { 
                  return null
                  }
                })
            }
            </div>
            <div className="goalsFooter">
            <GoalsForm addGoal={this.addGoal} />
            </div>
        </div>
      </Fragment>
    );
  }
}

export default MyGoals;
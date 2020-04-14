import React, { Component } from "react";
import { Grid } from "react-mdl";
import MyGoals from "../MyGoals/mygoals";
import PrimarySearchAppBar from "../Layouts/headerHome";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <PrimarySearchAppBar />
        <Grid className="dashboard-grid">
          <MyGoals />
        </Grid>
      </div>
    );
  }
}
export default Dashboard;

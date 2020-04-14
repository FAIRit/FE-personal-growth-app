import React, { Component } from "react";
import { Grid } from "react-mdl";
import "./mission.css";

class Mission extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="mission-grid">
          <h1>Our Mission</h1>
          <h3>
            Our mission is to promote the right balance between work and
            personal life. Believers that this is possible thanks to appropriate
            organization. The personal growth app will help you manage your time
            and responsibilities. If you want to take care of your personal
            development and achieve your goals - you should use the personal
            growth app!
          </h3>
        </Grid>
      </div>
    );
  }
}
export default Mission;

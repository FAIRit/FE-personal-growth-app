import React from 'react';


const Myheader = (props) => {
    return(
      <div>
         <button onClick={() => props.whatToClick('BlogPage')}>BlogPage</button>
         <button onClick={() => props.whatToClick('ContactPage')}>AboutPage</button>
         <button onClick={() => props.whatToClick('MissionPage')}>MissionPage</button>

      </div>
    )
  }

export default Myheader;
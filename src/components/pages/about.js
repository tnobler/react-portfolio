import React from 'react';
import profilePicture from "../../../static/assets/images/bio/profilePic.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Born and reared in Lubbock, Texas, I have only lived outside of Lubbock for the 4 years of College I spent at Abilene Christian University.  My beautiful wife Kami and daughter Finley are the lights of my life and we are looking forward to having Gracie Jane join our family in March 2020! 
        <br />
        <br />
        I am a Principal at <a href="https://rebuscap.com" className="about-link" target="_blank">Rebus Capital</a> and at <a href="https://ascentpetro.com" className="about-link" target="_blank">Ascent Petroleum</a>, where my roles are focused on Business Develpment, Strategic Planning and Strategic Relationship Management.
        <br />
        <br />
        I am an Enneagram 7 and a life long learner.  Hence, my hobbies change often.  But I always enjoy spending time with Friends and Family, Golf, Sports, Building things from woodworking to legos, and anything Technology.  I am currently expanding my knowledge of coding to include AI and ML.  
      </div>
    </div>
  );
}

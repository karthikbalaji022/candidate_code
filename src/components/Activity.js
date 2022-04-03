import React from "react";
import './activity.css'
 import job from '../images/activity/briefcase.png'
 import internet from '../images/activity/internet.png'
function Activity(){
    return(
        <div className="activityContainer">
            <div className="activityLeft">
                <img src={job} className="jobImage"/>
                <p> Jobs &gt; Full-stack Engineer</p>
                <div className="jobDetail">
                    View Job Details
                </div>
            </div>
            <div className="activityRight">
                <div className="addCandidateButton">
                Add Candidate
                <select className="dropDownActivity">
                    <option></option>
                    </select>
                </div>
                <div className="published">
                    <img src={internet} className="internet"/>
                    Published
                    <select className="dropDownActivity">
                    <option></option>
                    </select>
                </div>
            </div>
        </div>        
    )
}

export default Activity;
import React from "react";
import './activity.css'
 import job from '../images/activity/briefcase.png'
 import internet from '../images/activity/internet.png'
function Activity(){
    return(
        <div style={{width: "100%",display: "flex",justifyContent: "space-between",backgroundColor: "rgba(216, 214, 214, 0.226)",height: "60px"}}>
            <div style={{ display: "flex",alignItems: "center",paddingLeft: "20px",gap: "10px",color: "rgba(119, 113, 113)"}}>
                <img src={job} style={{width:"20px",height:"20px"}}/>
                <p> Jobs &gt; Full-stack Engineer</p>
                <div style={{ border: "1px solid rgba(119, 113, 113, 0.5)",padding: "4px",borderRadius: "3px",fontSize: "0.8rem"}}>
                    View Job Details
                </div>
            </div>
            <div style={{display: "flex",gap: "40px",paddingRight: "40px",alignItems: "center"}}>
                <div className="addCandidateButton">
                Add Candidate
                <select className="dropDownActivity" style={{color: "black",borderLeft: "1px solid rgba(0,0,0,.4)",height: "100%",width: "20px"}}>
                    <option></option>
                    </select>
                </div>
                <div className="published">
                    <img src={internet} style={{width:"20px",filter: "brightness(0) invert(1)"}}/>
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
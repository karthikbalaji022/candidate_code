import React,{useContext} from "react";
import gifts from "../images/head/gifts.png";
import account from "../images/head/account.png";
import search from "../images/head/search.png";
import "./head.css";
import {AppContext} from '../App'
function Head() {
    const {state,dispatch}=useContext(AppContext);
  return (
    <div style={{width:"100%",display: "flex",justifyContent: "space-between",height:"70px"}}>
      <div className="left" style={{display:"flex",justifyContent: "center",alignItems:"center",gap:"20px",padding: "20px"}}>
        <div className="accountImageContainer">
          <div className="accountImagedesign"></div>
          <img src={account} style={{ width:"20px",zIndex: 2,filter: "brightness(0) invert(1)",borderRadius: "100%"}} />
        </div>
        <h1 style={{fontSize:"1.5rem",fontWeight: "400",color: "rgb(105, 103, 103)"}}>iamneo.ai Talent Center</h1>
      </div>

      <div style={{  display: "flex",flex: "4",justifyContent: "flex-end",alignItems: "center"}}>
        <div style={{display: "flex",borderBottom: "1px solid rgba(192, 171, 171, 0.5)",gap:"10px"}}>
          <img src={search} style={{width:"20px",height: "20px"}} />
          <input
            style={{ outline: 0,border: 0,width:"200px"}} type="text" id="searchBar" placeholder="Search"
            onChange={e=>dispatch({type:'SearchChange',data:e.target.value})}
          />
        </div>
        <input type="button" value={"+Add New"} className="addNew" />
        <img src={gifts} style={{width:"50px",height:"40px",marginLeft: "40px",padding:"3px"}} />
        <div className="userLogin">S</div>
      </div>
    </div>
  );
}

export default Head;

import React,{useContext} from "react";
import gifts from "../images/head/gifts.png";
import account from "../images/head/account.png";
import search from "../images/head/search.png";
import "./head.css";
import {AppContext} from '../App'
function Head() {
    const {state,dispatch}=useContext(AppContext);
    const changeValue=(e)=>{
        dispatch({type:'SearchChange',data:e})
    };
  return (
    <div className="headContainer">
      <div className="left">
        <div className="accountImageContainer">
          <div className="accountImagedesign"></div>
          <img src={account} className="accountImage" />
        </div>
        <h1>iamneo.ai Talent Center</h1>
      </div>

      <div className="right">
        <div className="search">
          <img src={search} className="searchIcon" />
          <input
            className="searchContainer"
            type="text"
            id="searchBar"
            placeholder="Search"
            onChange={e=>changeValue(e.target.value)}
          />
        </div>
        <input type="button" value={"+Add New"} className="addNew" />
        <img src={gifts} className="gifts" />
        <div className="userLogin">S</div>
      </div>
    </div>
  );
}

export default Head;

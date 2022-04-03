import React from "react";
import filter from '../../images/sortIcon/filter.png'
import list from '../../images/sortIcon/list.png'
import upload from '../../images/sortIcon/upload.png'
import './head.css'
function Head(){
    return(
        <div className="headStatus">
        <div className="sortLeft">
            <div className="activeStatus">
                <p>All candidates - </p>
                <select className="candidateSelect">
                    <option value="Active">Active</option>
                    <option value="Not Active">Not Active</option>
                </select>
            </div>
            <div className="sortStatus">
            <p className="sortName">Sort by </p>
            <select className="candidateSort">
                    <option value="Last Updated">Last Updated</option>
                    <option value="Stage">Stage</option>
                </select>
            </div>
            </div>
            <div className="sortRight">
                <img src={filter} className="sortIcon"/>
                <img src={list} className="sortIcon"/>
                <img src={upload} className="sortIcon"/>
            </div>
        </div>
    )
}

export default Head;
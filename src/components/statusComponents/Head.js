import React from "react";
import filter from '../../images/sortIcon/filter.png'
import list from '../../images/sortIcon/list.png'
import upload from '../../images/sortIcon/upload.png'
function Head(){
    return(
        <div style={{  width:"100%",height:"50px",display: "flex",alignItems: "center",position: "fixed",backgroundColor: "rgb(216, 216, 216)"}}>
        <div style={{flex:"85%",display: "flex",gap:"5px"}}>
            <div style={{display: "flex",alignItems: "center",padding: "5px",width:"250px",gap:"10px",fontWeight: "600",marginRight: "40px"}}>
                <p>All candidates - </p>
                <select style={{backgroundColor: "transparent",border: "0",width:"fit-content",color:"rgb(83, 80, 80)",fontWeight:" 500",fontSize: "14px"}}>
                    <option value="Active">Active</option>
                    <option value="Not Active">Not Active</option>
                </select>
            </div>
            <div style={{    display: "flex",alignItems: "center",marginLeft:"40px",padding: "5px",width:"250px",gap:"10px",fontWeight:" 600",color: "rgb(90, 86, 86)"}}>
            <p className="sortName">Sort by </p>
            <select style={{backgroundColor: "transparent",border: 0,width:"fit-content",color:"rgb(37, 35, 63)",fontWeight: "600",fontSize: "14px"}}>
                    <option value="Last Updated">Last Updated</option>
                    <option value="Stage">Stage</option>
                </select>
            </div>
            </div>
            <div style={{flex:"15%",display: "flex",gap:"5px",alignItems: "center"}}>
                <img src={filter} style={{ width:"22px",height:"22px",margin:"10px"}}/>
                <img src={list} style={{ width:"22px",height:"22px",margin:"10px"}}/>
                <img src={upload} style={{ width:"22px",height:"22px",margin:"10px"}}/>
            </div>
        </div>
    )
}
export default Head;
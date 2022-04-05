import React from "react";
import star from '../../images/card/star.png'
import dots from '../../images/card/threedots.png'
function Card({name,company}){
return(
<div style={{width:"100%",minHeight: "100px",display: "flex",flexDirection: "column"}}>
    <div style={{ flex: "90%",padding: "10px",display: "flex",flexDirection: "column",gap:"4px"}}>
    <h1 style={{ color:"rgb(34, 96, 124)",fontSize: "1.3rem",textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden",fontWeight: "500"}}>{name}</h1>
    <p style={{color: "rgb(133, 120, 120)",textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden",fontWeight: "500",fontSize: ".9rem"}}>{company}</p>
    </div>
    <div style={{flex:"0%",display: "flex",justifyContent: "space-between",alignItems: "Inter","backgroundColor": "rgba(206, 205, 205,.3)",maxHeight: "40px",padding: "0 5px 0 5px"}}>
        <div className="dropCardStar">
            <img src={star} style={{width: "15px",height: "15px"}}/>
            <img src={star} style={{width: "15px",height: "15px"}}/>
            <img src={star} style={{width: "15px",height: "15px"}}/>
            <img src={star} style={{width: "15px",height: "15px"}}/>
            <img src={star} style={{width: "15px",height: "15px"}}/>
        </div>
            <img src={dots} style={{width:"15px"}}/>
    </div>
</div>
);
}
export default Card;
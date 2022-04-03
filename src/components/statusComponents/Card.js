import React from "react";
import star from '../../images/card/star.png'
import dots from '../../images/card/threedots.png'

function Card({name,company}){
return(
<div className="CardContainer">
    <div className="dropCardTop">
    <h1 className="dropCardName">{name}</h1>
    <p className="dropCardCompany">{company}</p>
    </div>
    <div className="dropCardBottom">
        <div className="dropCardStar">
            <img src={star} className="dropstar"/>
            <img src={star} className="dropstar"/>
            <img src={star} className="dropstar"/>
            <img src={star} className="dropstar"/>
            <img src={star} className="dropstar"/>
        </div>
            <img src={dots} className="dropdots"/>
    </div>
</div>
);
}

export default Card;
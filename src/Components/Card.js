import React from "react";

export default function Cards(props){
    return (
            <div className="card">
                <img className="card-img" src={props.img} alt="" />
                <div className="card-content">
                    <div>
                        <img className="star-icon" src="Images/Star 1.png" alt="" />
                        <span className="rating"> {props.rating}</span>
                        <span className="review"> ({props.review}).</span>
                        <span className="country">USA</span>
                    </div>
                    <div>
                        <p className="description">{props.description}</p>
                    </div>
                    <div>
                        <span><b>From $</b></span>
                        <span className="price">{props.price} </span>
                        <span className="">/ person</span>
                    </div>
                </div>
            </div>
    )
} 
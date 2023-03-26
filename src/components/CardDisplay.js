// import { useState } from "react";

const CardDisplay = (props) => {

    return (
        <div>
            <figure className="cardDisplay">
                <img src={props.photoUrl} alt={props.altText}/>
            </figure>
        </div>
    )
}

export default CardDisplay;
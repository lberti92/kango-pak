import React from "react";
import { GoCheck } from "react-icons/go";

const ItineraryItem = props => {
    return(
        <li>
        {props.title}
        {props.notes}
        {props.date}
        </li> 
    )
}

export default ItineraryItem;
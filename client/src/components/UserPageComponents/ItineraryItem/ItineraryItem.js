import React from "react";
import { GoCheck } from "react-icons/go";
import Moment from 'react-moment';
// import _ from "lodash"
// import moment from "moment"

const ItineraryItem = props => {

    return(
        <li>
        <Moment date={props.date} format="LLLL"/>
        {props.data.title}
        {props.data.notes}
        </li> 
    )
}

export default ItineraryItem;
import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import Questions from "../Questions/Questions";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { coldWomenQuery } from '../../utils/queries';
import { useQuery } from "@apollo/react-hooks";


class ClothingList extends Component {
  state = {
      items: [],
      weight: 0
  }

  handleClick = (e) => {
    e.preventDefault();
    let item = e.target.id;
    let itemWeight = e.target.value;
    console.log(itemWeight);
    console.log(item);
    this.setState({
      weight: this.state.itemWeight + itemWeight,
      items: this.state.items.concat(item)
    })
  }

  displayClothes() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading clothes...</div>);
    } else {
      // return data.cold.mens.map(men => {
        return data.cold.womens.map(women => {
        return (
         <ol>
          {/* <button>{men.name}</button> */}
          <button onClick={this.handleClick} id={women.name} value={women.weight}>{women.name}</button>
         </ol>
          )
        })
      }
    }
    render(){
      // console.log(this.props);
    return (
      <div>
        <ul className = "clothes-list">
          {this.displayClothes()}
        </ul>
        </div>
      )
    }
  }
  
  export default graphql(coldWomenQuery) (ClothingList);
  
  
// climate = useState.climate
//     const initialState = { default: false };
//     function reducer(state, action) {
//         switch (action.type) {
//             case "men":
//                 return { Men };
//             case "women":
//                 return { Women };
//             case "neutral":
//                 return { Neutral };
//             default:
//                 throw new Error();
//         }
//     }
// }
// let data = 

// switch (data.trip.) {
//   case mens:
//       if (climate = "cold")
//         return data = coldMenQuery
//       else if (climate = "desert")  
//         return desertMenQuery
//       else if (climate = "tropical")
//         return tropicalMenQuery
//       else if (climate = "warm")
//         return warmMenQuery
//       else (climate = "seasonal")
//         return seasonalMenQuery;
//   case womens:
//       if (climate = "cold")
//       return coldWomenQuery
//     else if (climate = "desert")  
//       return desertWomenQuery
//     else if (climate = "tropical")
//       return tropicalWomenQuery
//     else if (climate = "warm")
//       return warmWomenQuery
//     else (climate = "seasonal")
//       return seasonalWomenQuery;

//   case neutrals:
//       if (climate = "cold")
//         return coldNeutralQuery
//       else if (climate = "desert")  
//         return desertNeutralQuery
//       else if (climate = "tropical")
//         return tropicalNeutralQuery
//       else if (climate = "warm")
//         return warmNeutralQuery
//       else (climate = "seasonal")
//         return seasonalNeutralQuery;
// }




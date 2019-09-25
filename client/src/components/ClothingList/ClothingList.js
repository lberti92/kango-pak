import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./ClothingList.scss";
import { graphql } from 'react-apollo';
import {coldWomenQuery } from '../../utils/queries'


class ClothingList extends Component {

  state = {
    bagWeight: 0
  }
  
  displayClothes() {

    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading clothes...</div>);
    } else {
      // return data.cold.mens.map(men => {
        return data.cold.womens.map(women => {
        return (
        <>
          {/* <button>{men.name}</button> */}
          <Button id="clothes-btn" key = {women.name} value={women.weight} onClick={() => console.log(women.weight)}>{women.name}</Button>
         </>
          )
        })
      }
    }


    render(){
      // console.log(this.props);
    return (
      <div className="scroll-box">
        <div className="clothes-list">
        <h6 className="tips">Click an item to add it to your list</h6>
        <ButtonGroup vertical>
          {this.displayClothes()}
        </ButtonGroup>
        </div>
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




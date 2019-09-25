// import React, { useState } from "react";
// import { Container, Form } from "react-bootstrap";
// import "./ClothingList.scss";
// import ListGroup from "react-bootstrap/ListGroup";
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';


// const getMens = gql`
// query Men {
//     mens {
//         name
//         weight
//    }
// }
// `;

// const getColdMens = gql`
// query Cold {
//     cold {
//         mens {
//             name
//             weight
//         }
//    }
// }
// `;

// const ClothingList = props => {

// let mensItems;
// const { loading, error, data } = useQuery(getColdMens);
// if (loading) console.log('Loading...')
// if (error) console.log(error.message)
// if (data) {
//     // mensItems = data.cold.mens.map(Men => <li>{data.cold.mens.props}</li>);
//     console.log(data.cold.mens[0]);
// }

//     return (
//         <>
//             <Container className="container-fluid">
//                 <Form>
//                     <ListGroup>
//                         <ListGroup.Item action variant="info">Men</ListGroup.Item>
//                         <ListGroup.Item action variant="info">Women</ListGroup.Item>
//                         <ListGroup.Item action variant="info">Neutral</ListGroup.Item>
//                     </ListGroup>
//                 </Form>
//             </Container>
//         </>
//     );
// }


// export default ClothingList;

import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import Questions from "../Questions/Questions";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {coldWomenQuery } from '../../utils/queries'


class ClothingList extends Component {
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
          <button>{women.name}</button>
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
// switch () {
//   case mens:
//       if (climate = "cold")
//         return coldMenQuery
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
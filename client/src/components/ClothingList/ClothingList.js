import React from "react";
import { Container, Form } from "react-bootstrap";
// import Questions from "../Questions/Questions";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// import {coldWomenQuery } from '../../utils/queries'


const GET_CLOTHINGLIST = gql`
    query getClothing($apparel: String!, $climate: String) {
        clothing(apparel: $apparel, climate: $climate) {
            name 
            weight
      } 
  `;

const ClothingList = props => {
  const { loading, error, data } = useQuery(GET_CLOTHINGLIST, {
    variables: {apparel: props.apparel, climate: props.climate  }
   });
if (loading) console.log('Loading...')
if (error) console.log(error.message)
if (data) data.clothing.map(item => console.log(item.name, item.weight))

return (
  <div>
    <ol>
     <li>hi</li>
    </ol>
  </div>
)

}

export default ClothingList;


// class ClothingList extends Component {
//   state = {
//       items: [],
//       weight: 0
//   }

//   handleClick = (e) => {
//     e.preventDefault();
//     let item = e.target.id;
//     let itemWeight = e.target.value;
//     console.log(itemWeight);
//     console.log(item);
//     this.setState({
//       weight: this.state.itemWeight + itemWeight,
//       items: this.state.items.concat(item)
//     })
//   }

//   displayClothes() {
//     let data = this.props.data;
//     if (data.loading) {
//       return (<div>Loading clothes...</div>);
//     } else {
//       // return data.cold.mens.map(men => {
//         return data.cold.womens.map(women => {
//         return (
//          <ol>
//           {/* <button>{men.name}</button> */}
//           <button onClick={this.handleClick} id={women.name} value={women.weight}>{women.name}</button>
//          </ol>
//           )
//         })
//       }
//     }
//     render(){
//       // console.log(this.props);
//     return (
//       <div>
//         <ul className = "clothes-list">
//           {this.displayClothes()}
//         </ul>
//         </div>
//       )
  




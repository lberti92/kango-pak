import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Button, ButtonGroup } from "react-bootstrap";
import "./ClothingList.scss";;



const GET_CLOTHINGLIST = gql`
    query getClothing($apparel: String!, $climate: String) {
        clothing(apparel: $apparel, climate: $climate) {
            name 
            weight
      } 
    }
`;
 
  
// function displayClothes() {

//     if (data.loading) {
//       return (<div>Loading clothes...</div>);
//     } else {
//       // return data.cold.mens.map(men => {
//         return data.cold.womens.map(women => {
//         return (
//         <>
//           {/* <button>{men.name}</button> */}
//           <Button id="clothes-btn" key = {women.name} value={women.weight} onClick={() => console.log(women.weight)}>{women.name}</Button>
//          </>
//           )
//         })
//       }
//     }


const ClothingList = props => {
  const { loading, error, data, refetch } = useQuery(GET_CLOTHINGLIST, {
    variables: {apparel: props.apparel, climate: props.climate  }
   });
if (loading) console.log('Loading...')
if (error) console.log(error.message)
if (data) data.clothing.map(item => console.log(item.name, item.weight))

return (
  <div className="scroll-box">
  <div className="clothes-list">
  <h6 className="tips">Click an item to add it to your list</h6>
  <ButtonGroup vertical>
  </ButtonGroup>
  </div>
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
  




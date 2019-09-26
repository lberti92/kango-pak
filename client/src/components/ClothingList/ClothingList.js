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
//           <button>{women.name}</button>
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
//     }
//   }
  
//   export default graphql(coldWomenQuery) (ClothingList);
  
  
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




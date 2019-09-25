import React, { useState } from "react";
import ClothingList from "../../components/ClothingList";
import Packed from "../Packed";



export const TravelType=["Hacker-Packer", "Holy-Roller", "What-If", "Super-Souvenir"];
export const Size=[15, 25, 35, 50];

//function to fetch clothing items from API

//function to decrease weight if someone takes something out

//function to add options to final packing list

//function to add clothing items

//function to create total weight and alert when overweight 
function WeightAllotment() {
    const [weight, setWeight] = useState(0);

    return (
      <div>
        <button onClick={() => setWeight(weight + 1)}> Pretend Clothing Item </button>
  
        <Packed></Packed>
      </div>
    )
  //if TraveLType (set Hackerpacker to 15-17lbs, Holy Roller to 25lbs, What-If packer to 40lbs and Super Souvenir to 50lbs)
  //Empty bag weights are 3lbs, 5lbs, 9lbs, 11lbs on average 

  //set default to just their bag choice and same weights as above

}

export default WeightAllotment;
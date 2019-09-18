import React, { useState } from "react";
import Questions from "../Questions/Questions";

//function to fetch clothing items from API

//function to get User's choices from the DB with a switch case to set totalWeightAllowed

//function to delete clothing items (decrease weight)

//function to add clothing items (increment weight)

//function to create total weight and alert when overweight 
const Luggage = () => {
  const [weight, setWeight] = useState([
    { location: "Iceland", id: 2, length: 7, traveler: "Holy-Roller", climate: "Seasonal", luggage: "Wheeled Carry-On", apparel: "female" },
    { location: "Seychelles", id: 3, length: 12, traveler: "Holy-Roller", climate: "Tropical", luggage: "Medium Checked Bag", apparel: "gender-neutral" }
  ]);

  let weightAllowed = 0;

  function handleClick(e, { weight }) {
    e.preventDefault();
    let travelType = weight.traveler;
    //switch case for setting weight 
    //assume bag and what an empty bag weighs figured in 
    switch (travelType) {
      case "Hacker-Packer":
        //assuming a travel backpack (all weight is in kg) that weighs 3lbs empty
        return weightAllowed = 7.71;
      case "Holy-Roller":
        //assuming a wheeled carry on that weighs 6lbs empty
        return weightAllowed = 10.88;
      case "What-If":
      //assuming a medium checked bag that weighs 9lbs empty 
      return weightAllowed = 14;
      case "Super-Souvenir":
      //assumiing a large checked bag that weighs 12lbs empty 
      return weightAllowed = 20.5
      default:
        console.log("Not a Hacker");
        break;
    }

  }

  return (
    <div>
      <ul>
        {weight.map(weight => {
          return (<li key={weight.id}>{weight.traveler} {weight.kilograms}</li>)
        })}
      </ul>
      <button onClick={e => handleClick(e, { weight })}> Pretend </button>
    </div>
  )
  //if TraveLType (set Hackerpacker to 15-17lbs, Holy Roller to 25lbs, What-If packer to 40lbs and Super Souvenir to 50lbs)
  //Empty bag weights are 3lbs, 5lbs, 9lbs, 11lbs on average 

  //set default to just their bag choice and same weights as above

}

export default Luggage;
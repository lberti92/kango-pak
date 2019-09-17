import React, {useState } from "react";
import "./Questions.scss";
// import { Formik, Field } from "formik";

export default function Questions (props) { 
    
    const [location, setLocation] = useState("");
    const [length, setLength] = useState("");
    const [climate, setClimate] = useState("");
    const [traveler, setTraveler] = useState("");
    const [luggage, setLuggage] = useState("");
    const [apparel, setApparel] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

        return (
            <div>
            <form onSubmit={handleSubmit}>
                <h1>Tell us about your trip:</h1>
                <input type="text" placeholder="location" onChange={e => setLocation(e.target.value)} value={location} />
                <input type="text" placeholder="length of stay" onChange={e => setLength(e.target.value)} value={length}/>
                <p>Describe the climate will you be visiting (select below):</p>
                <select onChange={e => setClimate(e.target.value)} value={climate}>
                    <option value="cold">Cold</option>
                    <option value="warm">Warm</option>
                    <option value="variable">Variable</option>
                    <option value="desert">Desert</option>
                    <option value="tropical">Tropical</option>
                </select>  
                <p>What type of traveler are you (select below)?</p>
                <select onChange={e => setTraveler(e.target.value)} value={traveler}>
                    <option value="hacker packer">Hacker Packer</option>
                    <option value="holy roller">Holy Roller</option>
                    <option value="what-if">What-If?</option>
                    <option value="super souvenir">Super Souvenir</option>
                </select> 
                <p>How much luggage will you be bringing (select below)?</p>
                <select onChange={e => setLuggage(e.target.value)} value={luggage}>
                    <option value="travel backpack">Travel Backpack</option>
                    <option value="wheeled carry-on">Wheeled Carry-On</option>
                    <option value="medium checked bag">Medium Checked Bag (24-25")</option>
                    <option value="large checked bag">Large Checked Bag (25-29")</option>
                </select> 
                <p>What type of apparel do you prefer to bring (select below)?</p>
                <select onChange={e => setApparel(e.target.value)} value={apparel}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="gender neutral">Gender Neutral</option>
                </select>         
                <button>Get Packing!</button>         
            </form>
            </div>
        )
};

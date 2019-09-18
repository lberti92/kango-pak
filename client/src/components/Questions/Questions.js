import React, {useState } from "react";
import "./Questions.scss";
import { Formik, Field } from "formik";

class Questions extends React.Component { 
    state = {
        location: "",
        length: "",
        climate: "",
        traveler: "",
        luggage: "",
        apparel: ""
    }

    handleLocationChange = (event) => {
        let input = event.target.value;
        this.setState({
            location: input
        })
    }

    handleLengthChange = (event) => {
        let input = event.target.value;
        this.setState({
            length: input
        })
    }

    handleClimateChange = (event) => {
        let input = event.target.value;
        this.setState({
            climate: input
        })
    }

    handleTravelerChange = (event) => {
        let input = event.target.value;
        this.setState({
            traveler: input
        })
    }

    handleLuggageChange = (event) => {
        let input = event.target.value;
        this.setState({
            luggage: input
        })
    }

    handleApparelChange = (event) => {
        let input = event.target.value;
        this.setState({
            apparel: input
        })
    }

    render() {
        return (
            <div>
            <form>
                <h1>Tell us about your trip:</h1>
                <input type="text" placeholder="location" onChange={this.handleLocationChange} />
                <input type="text" placeholder="length of stay" onChange={this.handleLengthChange} />
                <p>Describe the climate will you be visiting (select below):</p>
                <select onChange={this.handleClimateChange}>
                    <option value="cold">Cold</option>
                    <option value="warm">Warm</option>
                    <option value="variable">Variable</option>
                    <option value="desert">Desert</option>
                    <option value="tropical">Tropical</option>
                </select>  
                <p>What type of traveler are you (select below)?</p>
                <select onChange={this.handleTravelerChange}>
                    <option value="hacker packer">Hacker Packer</option>
                    <option value="holy roller">Holly Roller</option>
                    <option value="what-if">What-If?</option>
                    <option value="super souvenir">Super Souvenir</option>
                </select> 
                <p>How much luggage will you be bringing (select below)?</p>
                <select onChange={this.handleLuggageChange}>
                    <option value="travel backpack">Travel Backpack</option>
                    <option value="wheeled carry-on">Wheeled Carry-On</option>
                    <option value="medium checked bag">Medium Checked Bag (24-25")</option>
                    <option value="large checked bag">Large Checked Bag (25-29")</option>
                </select> 
                <p>What type of apparel do you prefer to bring (select below)?</p>
                <select onChange={this.handleApparelChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="gender neutral">Gender Neutral</option>
                </select>         
                <button>Get Packing!</button>         
            </form>
            </div>
        )
    }
};

export default Questions;
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/kango-pak"
);

const clothingSeed = [
    {
        name: "Bra",
        weight: ".2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Sports Bra",
        weight: ".02",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Lingerie",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Dress Socks",
        weight: ".1",
        weather: ["cold", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Spanx",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Swimsuit",
        weight: ".7",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Underwear",
        weight: ".2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Belt",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Light Gloves",
        weight: ".04",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        weather: ["cold"],
        gender: "women"
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        weather: [ "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Sun Hat",
        weight: ".3",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weather: ["cold"],
        gender: "women"
    },
    {
        name: "Jewelry",
        weight: "2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "women"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        weather: ["cold"],
        gender: "women"
    },
    {
        name: "Sunglasses",
        weight: ".045",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Toiletries",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        weather: ["warm"],
        gender: "women"
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Flats",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Heels",
        weight: ".7",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Running Shoes",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Sandals",
        weight: ".35",
        weather: [ "desert", "tropical", "warm"],
        gender: "women"
    },
    {
        name: "Slippers",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Watershoes",
        weight: "1",
        weather: ["tropical", "warm"],
        gender: "women"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Evening Dress",
        weight: "2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Sundress",
        weight: ".5",
        weather: ["desert", "tropical", "warm"],
        gender: "women"
    },
    {
        name: "Cardigan",
        weight: ".8",
        weather: ["cold", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weather: ["warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weather: ["tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Winter Jacket",
        weight: "3",
        weather: ["cold"],
        gender: "women"
    },
    {
        name: "Vest",
        weight: ".5",
        weather: ["cold", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Pajamas",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Capris",
        weight: ".4",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Casual Pants",
        weight: ".4",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Jeans",
        weight: "1",
        weather: ["cold", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Leggings",
        weight: ".3",
        weather: ["cold", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Blouse",
        weight: ".25",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Tank Top",
        weight: ".085",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "T-shirt",
        weight: ".18",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Turtleneck",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "women"
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "women"
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Light Sweater",
        weight: ".5",
        weather: ["warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "women"
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        weather: ["cold"],
        gender: "women"
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "women"
    },
    {
        name: "Athletic Socks",
        weight: ".15",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Dress Socks",
        weight: ".15",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Swimsuit",
        weight: ".8",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Undershirt",
        weight: ".15",
        weather: ["cold", "tropical",  "seasonal"],
        gender: "men"
    },
    {
        name: "Underwear",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".5",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Belt",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Light Gloves",
        weight: ".25",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Wool Gloves",
        weight: ".15",
        weather: ["cold"],
        gender: "men"
    },
    {
        name: "Baseball cap",
        weight: ".3",
        weather: [ "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Sun Hat",
        weight: ".4",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weather: ["cold"],
        gender: "men"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Winter Scarf",
        weight: ".3",
        weather: ["cold"],
        gender: "men"
    },
    {
        name: "Sunglasses",
        weight: ".05",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Tie",
        weight: ".1",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Toiletries",
        weight: "1.0",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Hiking Boots",
        weight: "2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Casual Sneakers",
        weight: ".9",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Flip-flops",
        weight: ".4",
        weather: [ "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Loafers",
        weight: "1",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Running Shoes",
        weight: ".6",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Sandals",
        weight: ".45",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "Slippers",
        weight: ".4",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Watershoes",
        weight: "1.7",
        weather: ["tropical", "warm"],
        gender: "men"
    },
    {
        name: "Cardigan",
        weight: "1",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weather: ["warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Winter Jacket",
        weight: "2",
        weather: ["cold"],
        gender: "men"
    },
    {
        name: "Vest",
        weight: ".5",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Pajamas",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Casual Pants",
        weight: ".8",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Dress Pants",
        weight: ".9",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Hiking Pants",
        weight: ".7",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Jeans",
        weight: "1.7",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Flannel Shirt",
        weight: ".5",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "Tank Top",
        weight: ".2",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "T-shirt",
        weight: ".25",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Turtleneck",
        weight: ".4",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        weather: ["cold", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Casual Shorts",
        weight: ".5",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "Dress Shorts",
        weight: ".5",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "Hiking Shorts",
        weight: ".5",
        weather: ["desert", "tropical", "warm"],
        gender: "men"
    },
    {
        name: "Light Sweater",
        weight: ".6",
        weather: ["warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".8",
        weather: ["cold", "seasonal"],
        gender: "men"
    },
    {
        name: "Winter Sweater",
        weight: "1",
        weather: ["cold"],
        gender: "men"
    },
    {
        name: "Workout Clothes",
        weight: "3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "men"
    },
    {
        name: "Bra",
        weight: ".2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sports Bra",
        weight: ".02",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Lingerie",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Socks",
        weight: ".1",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Spanx",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Swimsuit",
        weight: ".7",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Undershirt",
        weight: ".15",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Underwear",
        weight: ".2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Belt",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Light Gloves",
        weight: ".04",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        weather: ["cold"],
        gender: "neutral"
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sun Hat",
        weight: ".3",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weather: ["cold"],
        gender: "neutral"
    },
    {
        name: "Jewelry",
        weight: "2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        weather: ["codl"],
        gender: "neutral"
    },
    {
        name: "Sunglasses",
        weight: ".045",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Tie",
        weight: ".2",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Toiletries",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        weather: ["warm"],
        gender: "neutral"
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Flats",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Heels",
        weight: ".7",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Loafers",
        weight: "1",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Running Shoes",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sandals",
        weight: ".35",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Slippers",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Watershoes",
        weight: "1",
        weather: ["tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Evening Dress",
        weight: "2",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"    
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sundress",
        weight: ".5",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Cardigan",
        weight: ".8",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weather: ["warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weather: ["tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Winter Jacket",
        weight: "3",
        weather: ["cold"],
        gender: "neutral"
    },
    {
        name: "Vest",
        weight: ".5",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Pajamas",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Capris",
        weight: ".4",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Casual Pants",
        weight: ".4",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Pants",
        weight: ".9",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Jeans",
        weight: "1",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Leggings",
        weight: ".3",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Blouse",
        weight: ".25",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Tank Top",
        weight: ".085",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "T-shirt",
        weight: ".18",
        weather: ["desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Turtleneck",
        weight: ".3",
        weather: ["cold", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        weather: ["desert", "tropical", "warm"],
        gender: "neutral"
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        weather: ["cold", "warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Light Sweater",
        weight: ".5",
        weather: ["warm", "seasonal"],
        gender: "neutral"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        weather: ["cold","seasonal"],
        gender: "neutral"
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        weather: ["cold"],
        gender: "neutral"
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        weather: ["cold", "desert", "tropical", "warm", "seasonal"],
        gender: "neutral"
    }
];

db.Clothing
.remove({})
.then(() => db.Clothing.collection.insertMany(clothingSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});

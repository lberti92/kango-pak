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
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sports Bra",
        weight: ".02",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Lingerie",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Dress Socks",
        weight: ".1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Spanx",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Swimsuit",
        weight: ".7",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Underwear",
        weight: ".2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Belt",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Light Gloves",
        weight: ".04",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        climate: ["cold"],
        apparel: "women"
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        climate: [ "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sun Hat",
        weight: ".3",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        climate: ["cold"],
        apparel: "women"
    },
    {
        name: "Jewelry",
        weight: "2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        climate: ["cold"],
        apparel: "women"
    },
    {
        name: "Sunglasses",
        weight: ".045",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Toiletries",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        climate: ["warm"],
        apparel: "women"
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Flats",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Heels",
        weight: ".7",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Running Shoes",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sandals",
        weight: ".35",
        climate: [ "desert", "tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Slippers",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Watershoes",
        weight: "1",
        climate: ["tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Evening Dress",
        weight: "2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sundress",
        weight: ".5",
        climate: ["desert", "tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Cardigan",
        weight: ".8",
        climate: ["cold", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        climate: ["warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        climate: ["tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Winter Jacket",
        weight: "3",
        climate: ["cold"],
        apparel: "women"
    },
    {
        name: "Vest",
        weight: ".5",
        climate: ["cold", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Pajamas",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Capris",
        weight: ".4",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Casual Pants",
        weight: ".4",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Jeans",
        weight: "1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Leggings",
        weight: ".3",
        climate: ["cold", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Blouse",
        weight: ".25",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Tank Top",
        weight: ".085",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "T-shirt",
        weight: ".18",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Turtleneck",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "women"
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Light Sweater",
        weight: ".5",
        climate: ["warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "women"
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        climate: ["cold"],
        apparel: "women"
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "women"
    },
    {
        name: "Athletic Socks",
        weight: ".15",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dress Socks",
        weight: ".15",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Swimsuit",
        weight: ".8",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Undershirt",
        weight: ".15",
        climate: ["cold", "tropical",  "seasonal"],
        apparel: "men"
    },
    {
        name: "Underwear",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".5",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Belt",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Light Gloves",
        weight: ".25",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Wool Gloves",
        weight: ".15",
        climate: ["cold"],
        apparel: "men"
    },
    {
        name: "Baseball cap",
        weight: ".3",
        climate: [ "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Sun Hat",
        weight: ".4",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        climate: ["cold"],
        apparel: "men"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Winter Scarf",
        weight: ".3",
        climate: ["cold"],
        apparel: "men"
    },
    {
        name: "Sunglasses",
        weight: ".05",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Tie",
        weight: ".1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Toiletries",
        weight: "1.0",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Hiking Boots",
        weight: "2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Casual Sneakers",
        weight: ".9",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Flip-flops",
        weight: ".4",
        climate: [ "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Loafers",
        weight: "1",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Running Shoes",
        weight: ".6",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Sandals",
        weight: ".45",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Slippers",
        weight: ".4",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Watershoes",
        weight: "1.7",
        climate: ["tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Cardigan",
        weight: "1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        climate: ["warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Winter Jacket",
        weight: "2",
        climate: ["cold"],
        apparel: "men"
    },
    {
        name: "Vest",
        weight: ".5",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Pajamas",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Casual Pants",
        weight: ".8",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dress Pants",
        weight: ".9",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Hiking Pants",
        weight: ".7",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Jeans",
        weight: "1.7",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Flannel Shirt",
        weight: ".5",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Tank Top",
        weight: ".2",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "T-shirt",
        weight: ".25",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Turtleneck",
        weight: ".4",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        climate: ["cold", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Casual Shorts",
        weight: ".5",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Dress Shorts",
        weight: ".5",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Hiking Shorts",
        weight: ".5",
        climate: ["desert", "tropical", "warm"],
        apparel: "men"
    },
    {
        name: "Light Sweater",
        weight: ".6",
        climate: ["warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".8",
        climate: ["cold", "seasonal"],
        apparel: "men"
    },
    {
        name: "Winter Sweater",
        weight: "1",
        climate: ["cold"],
        apparel: "men"
    },
    {
        name: "Workout Clothes",
        weight: "3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "men"
    },
    {
        name: "Bra",
        weight: ".2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sports Bra",
        weight: ".02",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Lingerie",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Socks",
        weight: ".1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Spanx",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Swimsuit",
        weight: ".7",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Undershirt",
        weight: ".15",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Underwear",
        weight: ".2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Belt",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Light Gloves",
        weight: ".04",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        climate: ["cold"],
        apparel: "neutral"
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sun Hat",
        weight: ".3",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        climate: ["cold"],
        apparel: "neutral"
    },
    {
        name: "Jewelry",
        weight: "2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        climate: ["codl"],
        apparel: "neutral"
    },
    {
        name: "Sunglasses",
        weight: ".045",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Tie",
        weight: ".2",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Toiletries",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        climate: ["warm"],
        apparel: "neutral"
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Flats",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Heels",
        weight: ".7",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Loafers",
        weight: "1",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Running Shoes",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sandals",
        weight: ".35",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Slippers",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Watershoes",
        weight: "1",
        climate: ["tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Evening Dress",
        weight: "2",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"    
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sundress",
        weight: ".5",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Cardigan",
        weight: ".8",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        climate: ["warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        climate: ["tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Winter Jacket",
        weight: "3",
        climate: ["cold"],
        apparel: "neutral"
    },
    {
        name: "Vest",
        weight: ".5",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Pajamas",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Capris",
        weight: ".4",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Casual Pants",
        weight: ".4",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Pants",
        weight: ".9",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Jeans",
        weight: "1",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Leggings",
        weight: ".3",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Blouse",
        weight: ".25",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Tank Top",
        weight: ".085",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "T-shirt",
        weight: ".18",
        climate: ["desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Turtleneck",
        weight: ".3",
        climate: ["cold", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        climate: ["desert", "tropical", "warm"],
        apparel: "neutral"
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        climate: ["cold", "warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Light Sweater",
        weight: ".5",
        climate: ["warm", "seasonal"],
        apparel: "neutral"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        climate: ["cold","seasonal"],
        apparel: "neutral"
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        climate: ["cold"],
        apparel: "neutral"
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        climate: ["cold", "desert", "tropical", "warm", "seasonal"],
        apparel: "neutral"
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

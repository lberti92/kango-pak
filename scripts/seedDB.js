const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/kango-pak"
);

const womenSeed = [
    {
        name: "Bra",
        weight: ".2",
        weatherId: [1,2,3,4,5]
        
    },
    {
        name: "Sports Bra",
        weight: ".02",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        weatherId: [1,5]
    },
    {
        name: "Lingerie",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Dress Socks",
        weight: ".1",
        weatherId: [1,4,5]
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weatherId: [1,5]
    },
    {
        name: "Spanx",
        weight: ".5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Swimsuit",
        weight: ".7",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Underwear",
        weight: ".2",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        weatherId: [1,5]
    },
    {
        name: "Belt",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Light Gloves",
        weight: ".04",
        weatherId: [1,5]
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        weatherId: [1]
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        weatherId: [2,3,4,5]
    },
    {
        name: "Sun Hat",
        weight: ".3",
        weatherId: [2,3,4,5]
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weatherId: [1]
    },
    {
        name: "Jewelry",
        weight: "2",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        weatherId: [1,5]
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weatherId: [1,5]
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        weatherId: [1]
    },
    {
        name: "Sunglasses",
        weight: ".045",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Toiletries",
        weight: "1.5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        weatherId: [4]
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Flats",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        weatherId: [2,3,4,5]
    },
    {
        name: "Heels",
        weight: ".7",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Running Shoes",
        weight: ".5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Sandals",
        weight: ".35",
        weatherId: [2,3,4]
    },
    {
        name: "Slippers",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Watershoes",
        weight: "1",
        weatherId: [3,4]
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Evening Dress",
        weight: "2",
        weatherId: [1,4,5]
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Sundress",
        weight: ".5",
        weatherId: [2,3,4]
    },
    {
        name: "Cardigan",
        weight: ".8",
        weatherId: [1,4,5]
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weatherId: [4,5]
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weatherId: [3,4,5]
    },
    {
        name: "Winter Jacket",
        weight: "3",
        weatherId: [1]
    },
    {
        name: "Vest",
        weight: ".5",
        weatherId: [1,4,5]
    },
    {
        name: "Pajamas",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Capris",
        weight: ".4",
        weatherId: [2,3,4,5]
    },
    {
        name: "Casual Pants",
        weight: ".4",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Jeans",
        weight: "1",
        weatherId: [1,4,5]
    },
    {
        name: "Leggings",
        weight: ".3",
        weatherId: [1,4,5]
    },
    {
        name: "Blouse",
        weight: ".25",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        weatherId: [1,5]
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        weatherId: [1,5]
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        weatherId: [2,3,4,5]
    },
    {
        name: "Tank Top",
        weight: ".085",
        weatherId: [2,3,4]
    },
    {
        name: "T-shirt",
        weight: ".18",
        weatherId: [2,3,4,5]
    },
    {
        name: "Turtleneck",
        weight: ".3",
        weatherId: [1,5]
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Light Sweater",
        weight: ".5",
        weatherId: [4,5]
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        weatherId: [1,5]
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        weatherId: [1]
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        weatherId: [1,2,3,4,5]
    }
];

const menSeed = [
    {
        name: "Athletic Socks",
        weight: ".15",
        weatherId: [1, 2, 3 , 4, 5],
        gender: "men"
    },
    {
        name: "Dress Socks",
        weight: ".15",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Swimsuit",
        weight: ".8",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Undershirt",
        weight: ".15",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Underwear",
        weight: ".3",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".5",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Belt",
        weight: ".3",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Light Gloves",
        weight: ".25",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Wool Gloves",
        weight: ".15",
        weatherId: [1],
        gender: "men"
    },
    {
        name: "Baseball cap",
        weight: ".3",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Sun Hat",
        weight: ".4",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weatherId: [1],
        gender: "men"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Winter Scarf",
        weight: ".3",
        weatherId: [1],
        gender: "men"
    },
    {
        name: "Sunglasses",
        weight: ".05",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Tie",
        weight: ".1",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Toiletries",
        weight: "1.0",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Hiking Boots",
        weight: "2",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Casual Sneakers",
        weight: ".9",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Flip-flops",
        weight: ".4",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Loafers",
        weight: "1",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Running Shoes",
        weight: ".6",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Sandals",
        weight: ".45",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "Slippers",
        weight: ".4",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Watershoes",
        weight: "1.7",
        weatherId: [3,4],
        gender: "men"
    },
    {
        name: "Cardigan",
        weight: "1",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weatherId: [4,5],
        gender: "men"
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weatherId: [3,4,5],
        gender: "men"
    },
    {
        name: "Winter Jacket",
        weight: "2",
        weatherId: [1],
        gender: "men"
    },
    {
        name: "Vest",
        weight: ".5",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Pajamas",
        weight: ".5",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Casual Pants",
        weight: ".8",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Dress Pants",
        weight: ".9",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Hiking Pants",
        weight: ".7",
        weatherId: [1,2,3,4,5],
        gender: "men"
    },
    {
        name: "Jeans",
        weight: "1.7",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Flannel Shirt",
        weight: ".5",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "Tank Top",
        weight: ".2",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "T-shirt",
        weight: ".25",
        weatherId: [2,3,4,5],
        gender: "men"
    },
    {
        name: "Turtleneck",
        weight: ".4",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        weatherId: [1,4,5],
        gender: "men"
    },
    {
        name: "Casual Shorts",
        weight: ".5",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "Dress Shorts",
        weight: ".5",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "Hiking Shorts",
        weight: ".5",
        weatherId: [2,3,4],
        gender: "men"
    },
    {
        name: "Light Sweater",
        weight: ".6",
        weatherId: [4,5],
        gender: "men"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".8",
        weatherId: [1,5],
        gender: "men"
    },
    {
        name: "Winter Sweater",
        weight: "1",
        weatherId: [1],
        gender: "men"
    },
    {
        name: "Workout Clothes",
        weight: "3",
        weatherId: [1,2,3,4,5],
        gender: "men"
    }
];

const neutralSeed = [
    {
        name: "Bra",
        weight: ".2",
        weatherId: [1,2,3,4,5],
        gender: ""neutral""
    },
    {
        name: "Sports Bra",
        weight: ".02",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Lingerie",
        weight: ".3",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Athletic Socks",
        weight: ".1",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Dress Socks",
        weight: ".1",
        weatherId: [1,4,5],
        gender: "neutral"
    },
    {
        name: "Wool Socks",
        weight: ".3",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Spanx",
        weight: ".5",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Swimsuit",
        weight: ".7",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Undershirt",
        weight: ".15",
        weatherId: [1,4,5],
        gender: "neutral"
    },
    {
        name: "Underwear",
        weight: ".2",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Belt",
        weight: ".3",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Light Gloves",
        weight: ".04",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Wool Gloves",
        weight: ".1",
        weatherId: [1],
        gender: "neutral"
    },
    {
        name: "Baseball Hat",
        weight: ".2",
        weatherId: [2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Sun Hat",
        weight: ".3",
        weatherId: [2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35",
        weatherId: [1],
        gender: "neutral"
    },
    {
        name: "Jewelry",
        weight: "2",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3",
        weatherId: [2,4,3],
        gender: "neutral"
    },
    {
        name: "Light Scarf",
        weight: ".15",
        weatherId: [1,5],
        gender: "neutral"
    },
    {
        name: "Winter Scarf",
        weight: ".15",
        weatherId: [1],
        gender: neutral
    },
    {
        name: "Sunglasses",
        weight: ".045",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Tie",
        weight: ".2",
        weatherId: [1,4,5],
        gender: "neutral"
    },
    {
        name: "Toiletries",
        weight: "1.5",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Ankle Boots",
        weight: "1.2",
        weatherId: [4],
        gender: "neutral"
    },
    {
        name: "Hiking Boots",
        weight: "1.5",
        weatherId: [1,2,3,4,5],
        gender: neutral
    },
    {
        name: "Casual Sneakers",
        weight: ".6",
        weatherId: [1,2,3,4,5],
        gender: "neutral"
    },
    {
        name: "Dress Shoes",
        weight: "1",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Flats",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Flip-Flops",
        weight: ".3",
        weatherId: [2,3,4,5]
    },
    {
        name: "Heels",
        weight: ".7",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Loafers",
        weight: "1",
        weatherId: [2,3,4,5]
    },
    {
        name: "Running Shoes",
        weight: ".5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Sandals",
        weight: ".35",
        weatherId: [2,3,4]
    },
    {
        name: "Slippers",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Watershoes",
        weight: "1",
        weatherId: [3,4]
    },
    {
        name: "Cocktail Dress",
        weight: "1.2",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Evening Dress",
        weight: "2",
        weatherId: [1,4,5]
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Sundress",
        weight: ".5",
        weatherId: [2,3,4]
    },
    {
        name: "Cardigan",
        weight: ".8",
        weatherId: [1,4,5]
    },
    {
        name: "Dinner Jacket",
        weight: "2.5",
        weatherId: [1,4,5]
    },
    {
        name: "Light Jacket",
        weight: ".5",
        weatherId: [4,5]
    },
    {
        name: "Rain Jacket",
        weight: ".5",
        weatherId: [3,4,5]
    },
    {
        name: "Winter Jacket",
        weight: "3",
        weatherId: [1]
    },
    {
        name: "Vest",
        weight: ".5",
        weatherId: [1,4,5]
    },
    {
        name: "Pajamas",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Capris",
        weight: ".4",
        weatherId: [2,3,4,5]
    },
    {
        name: "Casual Pants",
        weight: ".4",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Dress Pants",
        weight: ".9",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Hiking Pants",
        weight: ".5",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Jeans",
        weight: "1",
        weatherId: [1,4,5]
    },
    {
        name: "Leggings",
        weight: ".3",
        weatherId: [1,4,5]
    },
    {
        name: "Blouse",
        weight: ".25",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5",
        weatherId: [2,3,4,5]
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6",
        weatherId: [1,5]
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6",
        weatherId: [1,5]
    },
    {
        name: "Flannel Shirt",
        weight: ".4",
        weatherId: [1,5]
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3",
        weatherId: [1,5]
    },
    {
        name: "Polo Shirt",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25",
        weatherId: [2,3,4,5]
    },
    {
        name: "Tank Top",
        weight: ".085",
        weatherId: [2,3,4]
    },
    {
        name: "T-shirt",
        weight: ".18",
        weatherId: [2,3,4,5]
    },
    {
        name: "Turtleneck",
        weight: ".3",
        weatherId: [1,5]
    },
    {
        name: "Casual Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Dress Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Hiking Shorts",
        weight: ".3",
        weatherId: [2,3,4]
    },
    {
        name: "Casual Skirt",
        weight: ".3",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Dress Skirt",
        weight: ".4",
        weatherId: [1,2,3,4,5]
    },
    {
        name: "Suit/Tuxedo",
        weight: "3",
        weatherId: [1,4,5]
    },
    {
        name: "Light Sweater",
        weight: ".5",
        weatherId: [4,5]
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6",
        weatherId: [1,5]
    },
    {
        name: "Winter Sweater",
        weight: ".75",
        weatherId: [1]
    },
    {
        name: "Workout Clothes",
        weight: "1.5",
        weatherId: [1,2,3,4,5]
    }
];

const coldSeed = [
    {
        name: "Bra"
    },
    {
        name: "Sports Bra"
    },
    {
        name: "Hosiery/Tights"
    },
    {
        name: "Lingerie"
    },
    {
        name: "Athletic Socks"
    },
    {
        name: "Dress Socks"
    },
    {
        name: "Wool Socks"
    },
    {
        name: "Spanx"
    },
    {
        name: "Swimsuit"
    },
    {
        name: "Undershirt"
    },
    {
        name: "Underwear"
    },
    {
        name: "Long Underwear/Thermals"
    },
    {
        name: "Belt"
    },
    {
        name: "Light Gloves"
    },
    {
        name: "Wool Gloves"
    },
    {
        name: "Wool Knit Hat"
    },
    {
        name: "Jewelry"
    },
    {
        name: "Pashmina/Wrap"
    },
    {
        name: "Light Scarf"
    },
    {
        name: "Winter Scarf"
    },
    {
        name: "Sunglasses"
    },
    {
        name: "Tie"
    },
    {
        name: "Toiletries"
    },
    {
        name: "Hiking Boots"
    },
    {
        name: "Casual Sneakers"
    },
    {
        name: "Dress Shoes"
    },
    {
        name: "Heels"
    },
    {
        name: "Running Shoes"
    },
    {
        name: "Slippers"
    },
    {
        name: "Cocktail Dress"
    },
    {
        name: "Evening Dress"
    },
    {
        name: "Cardigan"
    },
    {
        name: "Dinner Jacket"
    },
    {
        name: "Winter Jacket"
    },
    {
        name: "Vest"
    },
    {
        name: "Pajamas"
    },
    {
        name: "Casual Pants"
    },
    {
        name: "Dress Pants"
    },
    {
        name: "Hiking Pants"
    },
    {
        name: "Jeans"
    },
    {
        name: "Leggings"
    },
    {
        name: "Blouse"
    },
    {
        name: "Casual Shirt - long sleeve"
    },
    {
        name: "Dress Shirt - long sleeve"
    },
    {
        name: "Flannel Shirt"
    },
    {
        name: "Long Sleeve Shirt"
    },
    {
        name: "Turtleneck"
    },
    {
        name: "Suit/Tuxedo"
    },
    {
        name: "Casual Skirt"
    },
    {
        name: "Dress Skirt"
    },
    {
        name: "Sweatshirt/Hoodie"
    },
    {
        name: "Winter Sweater"
    },
    {
        name: "Workout Clothes"
    }

];


db.Women
    .remove({})
    .then(() => db.Women.collection.insertMany(womenSeed))
    .then(data => {
        console.log(data.result.n = " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });

db.Men
    .remove({})
    .then(() => db.Men.collection.insertMany(menSeed))
    .then(data => {
        console.log(data.result.n = " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });

db.Neutral
    .remove({})
    .then(() => db.Neutral.collection.insertMany(neutralSeed))
    .then(date => {
        console.log(data.result.n = " records inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });

db.Cold
    .remove({})
    .then(() => db.Cold.collection.insertMany(coldSeed))
    .then(date => {
        console.log(data.result.n = " records inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });




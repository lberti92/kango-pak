const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/kango-pak"
);

const womenSeed = [
    {
        name: "Bra",
        weight: ".2"
    },
    {
        name: "Sports Bra",
        weight: ".02"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05"
    },
    {
        name: "Lingerie",
        weight: ".3"
    },
    {
        name: "Athletic Socks",
        weight: ".1"
    },
    {
        name: "Dress Socks",
        weight: ".1"
    },
    {
        name: "Wool Socks",
        weight: ".3"
    },
    {
        name: "Spanx",
        weight: ".5"
    },
    {
        name: "Swimsuit",
        weight: ".7"
    },
    {
        name: "Underwear",
        weight: ".2"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4"
    },
    {
        name: "Belt",
        weight: ".3"
    },
    {
        name: "Light Gloves",
        weight: ".04"
    },
    {
        name: "Wool Gloves",
        weight: ".1"
    },
    {
        name: "Baseball Hat",
        weight: ".2"
    },
    {
        name: "Sun Hat",
        weight: ".3"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35"
    },
    {
        name: "Jewelry",
        weight: "2"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3"
    },
    {
        name: "Light Scarf",
        weight: ".15"
    },
    {
        name: "Winter Scarf",
        weight: ".15"
    },
    {
        name: "Sunglasses",
        weight: ".045"
    },
    {
        name: "Toiletries",
        weight: "1.5"
    },
    {
        name: "Ankle Boots",
        weight: "1.2"
    },
    {
        name: "Hiking Boots",
        weight: "1.5"
    },
    {
        name: "Casual Sneakers",
        weight: ".6"
    },
    {
        name: "Flats",
        weight: ".5"
    },
    {
        name: "Flip-Flops",
        weight: ".3"
    },
    {
        name: "Heels",
        weight: ".7"
    },
    {
        name: "Running Shoes",
        weight: ".5"
    },
    {
        name: "Sandals",
        weight: ".35"
    },
    {
        name: "Slippers",
        weight: ".3"
    },
    {
        name: "Watershoes",
        weight: "1"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2"
    },
    {
        name: "Evening Dress",
        weight: "2"
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5"
    },
    {
        name: "Sundress",
        weight: ".5"
    },
    {
        name: "Cardigan",
        weight: ".8"
    },
    {
        name: "Light Jacket",
        weight: ".5"
    },
    {
        name: "Rain Jacket",
        weight: ".5"
    },
    {
        name: "Winter Jacket",
        weight: "3"
    },
    {
        name: "Vest",
        weight: ".5"
    },
    {
        name: "Pajamas",
        weight: ".3"
    },
    {
        name: "Capris",
        weight: ".4"
    },
    {
        name: "Casual Pants",
        weight: ".4"
    },
    {
        name: "Hiking Pants",
        weight: ".5"
    },
    {
        name: "Jeans",
        weight: "1"
    },
    {
        name: "Leggings",
        weight: ".3"
    },
    {
        name: "Blouse",
        weight: ".25"
    },
    {
        name: "Flannel Shirt",
        weight: ".4"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25"
    },
    {
        name: "Tank Top",
        weight: ".085"
    },
    {
        name: "T-shirt",
        weight: ".18"
    },
    {
        name: "Turtleneck",
        weight: ".3"
    },
    {
        name: "Casual Shorts",
        weight: ".3"
    },
    {
        name: "Dress Shorts",
        weight: ".3"
    },
    {
        name: "Hiking Shorts",
        weight: ".3"
    },
    {
        name: "Casual Skirt",
        weight: ".3"
    },
    {
        name: "Dress Skirt",
        weight: ".4"
    },
    {
        name: "Light Sweater",
        weight: ".5"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6"
    },
    {
        name: "Winter Sweater",
        weight: ".75"
    },
    {
        name: "Workout Clothes",
        weight: "1.5"
    }
];

const menSeed = [
    {
        name: "Athletic Socks",
        weight: ".15"
    },
    {
        name: "Dress Socks",
        weight: ".15"
    },
    {
        name: "Swimsuit",
        weight: ".8"
    },
    {
        name: "Undershirt",
        weight: ".15"
    },
    {
        name: "Underwear",
        weight: ".3"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".5"
    },
    {
        name: "Belt",
        weight: ".3"
    },
    {
        name: "Light Gloves",
        weight: ".25"
    },
    {
        name: "Wool Gloves",
        weight: ".15"
    },
    {
        name: "Baseball cap",
        weight: ".3"
    },
    {
        name: "Sun Hat",
        weight: ".4"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35"
    },
    {
        name: "Light Scarf",
        weight: ".15"
    },
    {
        name: "Winter Scarf",
        weight: ".3"
    },
    {
        name: "Sunglasses",
        weight: ".05"
    },
    {
        name: "Tie",
        weight: ".1"
    },
    {
        name: "Toiletries",
        weight: "1.0"
    },
    {
        name: "Hiking Boots",
        weight: "2"
    },
    {
        name: "Casual Sneakers",
        weight: ".9"
    },
    {
        name: "Dress Shoes",
        weight: "1"
    },
    {
        name: "Flip-flops",
        weight: ".4"
    },
    {
        name: "Loafers",
        weight: "1"
    },
    {
        name: "Running Shoes",
        weight: ".6"
    },
    {
        name: "Sandals",
        weight: ".45"
    },
    {
        name: "Slippers",
        weight: ".4"
    },
    {
        name: "Watershoes",
        weight: "1.7"
    },
    {
        name: "Cardigan",
        weight: "1"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5"
    },
    {
        name: "Light Jacket",
        weight: ".5"
    },
    {
        name: "Rain Jacket",
        weight: ".5"
    },
    {
        name: "Winter Jacket",
        weight: "2"
    },
    {
        name: "Vest",
        weight: ".5"
    },
    {
        name: "Pajamas",
        weight: ".5"
    },
    {
        name: "Casual Pants",
        weight: ".8"
    },
    {
        name: "Dress Pants",
        weight: ".9"
    },
    {
        name: "Hiking Pants",
        weight: ".7"
    },
    {
        name: "Jeans",
        weight: ""
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6"
    },
    {
        name: "Flannel Shirt",
        weight: ".5"
    },
    {
        name: "Polo Shirt",
        weight: ".3"
    },
    {
        name: "Tank Top",
        weight: ".2"
    },
    {
        name: "T-shirt",
        weight: ".25"
    },
    {
        name: "Turtleneck",
        weight: ".4"
    },
    {
        name: "Suit/Tuxedo",
        weight: "3"
    },
    {
        name: "Casual Shorts",
        weight: ".5"
    },
    {
        name: "Dress Shorts",
        weight: ".5"
    },
    {
        name: "Hiking Shorts",
        weight: ".5"
    },
    {
        name: "Light Sweater",
        weight: ".6"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".8"
    },
    {
        name: "Winter Sweater",
        weight: "1"
    },
    {
        name: "Workout Clothes",
        weight: "3"
    }
]

const neutralSeed = [
    {
        name: "Bra",
        weight: ".2"
    },
    {
        name: "Sports Bra",
        weight: ".02"
    },
    {
        name: "Hosiery/Tights",
        weight: ".05"
    },
    {
        name: "Lingerie",
        weight: ".3"
    },
    {
        name: "Athletic Socks",
        weight: ".1"
    },
    {
        name: "Dress Socks",
        weight: ".1"
    },
    {
        name: "Wool Socks",
        weight: ".3"
    },
    {
        name: "Spanx",
        weight: ".5"
    },
    {
        name: "Swimsuit",
        weight: ".7"
    },
    {
        name: "Undershirt",
        weight: ".15"
    },
    {
        name: "Underwear",
        weight: ".2"
    },
    {
        name: "Long Underwear/Thermals",
        weight: ".4"
    },
    {
        name: "Belt",
        weight: ".3"
    },
    {
        name: "Light Gloves",
        weight: ".04"
    },
    {
        name: "Wool Gloves",
        weight: ".1"
    },
    {
        name: "Baseball Hat",
        weight: ".2"
    },
    {
        name: "Sun Hat",
        weight: ".3"
    },
    {
        name: "Wool Knit Hat",
        weight: ".35"
    },
    {
        name: "Jewelry",
        weight: "2"
    },
    {
        name: "Pashmina/Wrap",
        weight: ".6"
    },
    {
        name: "Sarong/Coverup",
        weight: ".3"
    },
    {
        name: "Light Scarf",
        weight: ".15"
    },
    {
        name: "Winter Scarf",
        weight: ".15"
    },
    {
        name: "Sunglasses",
        weight: ".045"
    },
    {
        name: "Tie",
        weight: ".2"
    },
    {
        name: "Toiletries",
        weight: "1.5"
    },
    {
        name: "Ankle Boots",
        weight: "1.2"
    },
    {
        name: "Hiking Boots",
        weight: "1.5"
    },
    {
        name: "Casual Sneakers",
        weight: ".6"
    },
    {
        name: "Dress Shoes",
        weight: "1"
    },
    {
        name: "Flats",
        weight: ".5"
    },
    {
        name: "Flip-Flops",
        weight: ".3"
    },
    {
        name: "Heels",
        weight: ".7"
    },
    {
        name: "Loafers",
        weight: "1"
    },
    {
        name: "Running Shoes",
        weight: ".5"
    },
    {
        name: "Sandals",
        weight: ".35"
    },
    {
        name: "Slippers",
        weight: ".3"
    },
    {
        name: "Watershoes",
        weight: "1"
    },
    {
        name: "Cocktail Dress",
        weight: "1.2"
    },
    {
        name: "Evening Dress",
        weight: "2"
    },
    {
        name: "Jersey Maxi-Dress",
        weight: ".5"
    },
    {
        name: "Sundress",
        weight: ".5"
    },
    {
        name: "Cardigan",
        weight: ".8"
    },
    {
        name: "Dinner Jacket",
        weight: "2.5"
    },
    {
        name: "Light Jacket",
        weight: ".5"
    },
    {
        name: "Rain Jacket",
        weight: ".5"
    },
    {
        name: "Winter Jacket",
        weight: "3"
    },
    {
        name: "Vest",
        weight: ".5"
    },
    {
        name: "Pajamas",
        weight: ".3"
    },
    {
        name: "Capris",
        weight: ".4"
    },
    {
        name: "Casual Pants",
        weight: ".4"
    },
    {
        name: "Hiking Pants",
        weight: ".5"
    },
    {
        name: "Jeans",
        weight: "1"
    },
    {
        name: "Leggings",
        weight: ".3"
    },
    {
        name: "Blouse",
        weight: ".25"
    },
    {
        name: "Casual Shirt - short sleeve",
        weight: ".5"
    },
    {
        name: "Dress Shirt - short sleeve",
        weight: ".5"
    },
    {
        name: "Casual Shirt - long sleeve",
        weight: ".6"
    },
    {
        name: "Dress Shirt - long sleeve",
        weight: ".6"
    },
    {
        name: "Flannel Shirt",
        weight: ".4"
    },
    {
        name: "Long Sleeve Shirt",
        weight: ".3"
    },
    {
        name: "Polo Shirt",
        weight: ".3"
    },
    {
        name: "Short Sleeve Shirt",
        weight: ".25"
    },
    {
        name: "Tank Top",
        weight: ".085"
    },
    {
        name: "T-shirt",
        weight: ".18"
    },
    {
        name: "Turtleneck",
        weight: ".3"
    },
    {
        name: "Casual Shorts",
        weight: ".3"
    },
    {
        name: "Dress Shorts",
        weight: ".3"
    },
    {
        name: "Hiking Shorts",
        weight: ".3"
    },
    {
        name: "Casual Skirt",
        weight: ".3"
    },
    {
        name: "Dress Skirt",
        weight: ".4"
    },
    {
        name: "Light Sweater",
        weight: ".5"
    },
    {
        name: "Sweatshirt/Hoodie",
        weight: ".6"
    },
    {
        name: "Winter Sweater",
        weight: ".75"
    },
    {
        name: "Workout Clothes",
        weight: "1.5"
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




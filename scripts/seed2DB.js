const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/kango-pak"
);

const desertSeed = [
    {
        name: "Bra"
    },
    {
        name: "Sports Bra"
    },
    {
        name: "Lingerie"
    },
    {
        name: "Athletic Socks"
    },
    {
        name: "Spanx"
    },
    {
        name: "Swimsuit"
    },
    {
        name: "Underwear"
    },
    {
        name: "Belt"
    },
    {
        name: "Baseball Hat"
    },
    {
        name: "Sun Hat"
    },
    {
        name: "Jewelry"
    },
    {
        name: "Sarong/Wrap"
    },
    {
        name: "Sunglasses"
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
        name: "Flats"
    },
    {
        name: "Flip Flops"
    },
    {
        name: "Heels"
    },
    {
        name: "Running Shoes"
    },
    {
        name: "Sandals"
    },
    {
        name: "Slippers"
    },
    {
        name: "Cocktail Dress"
    },
    {
        name: "Jersey Maxi-Dress"
    },
    {
        name: "Sundress"
    },
    {
        name: "Pajamas"
    },
    {
        name: "Capris"
    },
    {
        name: "Casual Pants"
    },
    {
        name: "Hiking Pants"
    },
    {
        name: "Blouses"
    },
    {
        name: "Short Sleeve Shirt"
    },
    {
        name: "Tank Top"
    },
    {
        name: "T-shirt"
    },
    {
        name: "Casual Shorts"
    },
    {
        name: "Dress Shorts"
    },
    {
        name: "Hiking Shorts"
    },
    {
        name: "Casual Skirt"
    },
    {
        name: "Dress Skirt"
    },
    {
        name: "Workout Clothes"
    }
];

const tropicalSeed = [
    {
        name: "Bra"
    },
    {
        name: "Sports Bra"
    },
    {
        name: "Lingerie"
    },
    {
        name: "Athletic Socks"
    },
    {
        name: "Spanx"
    },
    {
        name: "Swimsuit"
    },
    {
        name: "Underwear"
    },
    {
        name: "Belt"
    },
    {
        name: "Baseball Hat"
    },
    {
        name: "Sun Hat"
    },
    {
        name: "Jewelry"
    },
    {
        name: "Sarong/Wrap"
    },
    {
        name: "Sunglasses"
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
        name: "Flats"
    },
    {
        name: "Flip Flops"
    },
    {
        name: "Heels"
    },
    {
        name: "Running Shoes"
    },
    {
        name: "Sandals"
    },
    {
        name: "Slippers"
    },
    {
        name: "Water Shoes"
    },
    {
        name: "Cocktail Dress"
    },
    {
        name: "Jersey Maxi-Dress"
    },
    {
        name: "Sundress"
    },
    {
        name: "Rain Jacket"
    },
    {
        name: "Pajamas"
    },
    {
        name: "Capris"
    },
    {
        name: "Casual Pants"
    },
    {
        name: "Hiking Pants"
    },
    {
        name: "Blouses"
    },
    {
        name: "Short Sleeve Shirt"
    },
    {
        name: "Tank Top"
    },
    {
        name: "T-shirt"
    },
    {
        name: "Casual Shorts"
    },
    {
        name: "Dress Shorts"
    },
    {
        name: "Hiking Shorts"
    },
    {
        name: "Casual Skirt"
    },
    {
        name: "Dress Skirt"
    },
    {
        name: "Workout Clothes"
    }

];

const warmSeed = [
    {
        name: "Bra"
    },
    {
        name: "Sports Bra"
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
        name: "Spanx"
    },
    {
        name: "Swimsuit"
    },
    {
        name: "Underwear"
    },
    {
        name: "Belt"
    },
    {
        name: "Baseball Hat"
    },
    {
        name: "Sun Hat"
    },
    {
        name: "Jewelry"
    },
    {
        name: "Sarong/Wrap"
    },
    {
        name: "Sunglasses"
    },
    {
        name: "Toiletries"
    },
    {
        name: "Ankle Boots"
    },
    {
        name: "Hiking Boots"
    },
    {
        name: "Casual Sneakers"
    },
    {
        name: "Flats"
    },
    {
        name: "Flip Flops"
    },
    {
        name: "Heels"
    },
    {
        name: "Running Shoes"
    },
    {
        name: "Sandals"
    },
    {
        name: "Slippers"
    },
    {
        name: "Water Shoes"
    },
    {
        name: "Cocktail Dress"
    },
    {
        name: "Evening Dress"
    },
    {
        name: "Jersey Maxi-Dress"
    },
    {
        name: "Sundress"
    },
    {
        name: "Cardigan"
    },
    {
        name: "Light Jacket"
    },
    {
        name: "Rain Jacket"
    },
    {
        name: "Pajamas"
    },
    {
        name: "Capris"
    },
    {
        name: "Casual Pants"
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
        name: "Blouses"
    },
    {
        name: "Short Sleeve Shirt"
    },
    {
        name: "Tank Top"
    },
    {
        name: "T-shirt"
    },
    {
        name: "Casual Shorts"
    },
    {
        name: "Dress Shorts"
    },
    {
        name: "Hiking Shorts"
    },
    {
        name: "Casual Skirt"
    },
    {
        name: "Dress Skirt"
    },
    {
        name: "Light Sweater"
    },
    {
        name: "Workout Clothes"
    }

];

const seasonalSeed = [
    {
        name: "Bra"
    },
    {
        name: "Sports Bra"
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
        name: "Baseball Hat"
    },
    {
        name: "Sun Hat"
    },
    {
        name: "Jewelry"
    },
    {
        name: "Pashmina/Wrap"
    },
    {
        name: "Light Scarg"
    },
    {
        name: "Sunglasses"
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
        name: "Flats"
    },
    {
        name: "Flip Flops"
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
        name: "Jersey Maxi-Dress"
    },
    {
        name: "Cardigan"
    },
    {
        name: "Light Jacket"
    },
    {
        name: "Rain Jacket"
    },
    {
        name: "Vest"
    },
    {
        name: "Pajamas"
    },
    {
        name: "Capris"
    },
    {
        name: "Casual Pants"
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
        name: "Blouses"
    },
    {
        name: "Flannel Shirt"
    },
    {
        name: "Long Sleeve Shirt"
    },
    {
        name: "Short Sleeve Shirt"
    },
    {
        name: "T-shirt"
    },
    {
        name: "Turtleneck"
    },
    {
        name: "Light Sweater"
    },
    {
        name: "Sweatshirt/Hoodie"
    },
    {
        name: "Casual Skirt"
    },
    {
        name: "Dress Skirt"
    },
    {
        name: "Workout Clothes"
    }
];

db.Desert
.remove({})
.then(() => db.Desert.collection.insertMany(desertSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});

db.Seasonal
.remove({})
.then(() => db.Seasonal.collection.insertMany(seasonalSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});

db.Tropical
.remove({})
.then(() => db.Tropical.collection.insertMany(tropicalSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});

db.Warm
.remove({})
.then(() => db.Warm.collection.insertMany(warmSeed))
.then(data => {
    console.log(data.result.n = " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.err(err);
    process.exit(1)
});

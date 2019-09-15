const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/kango-pak"
);

const womenSeed = [
    {
        name: "Bathing Suit",
        weight: ".7"
    },
    {
        name: "Bra",
        weight: ".2"
    },
    {
        name: "Hosiery",
        weight: ".05"
    },
    {
        name: "Lingerie",
        weight: ".3"
    },
    {
        name: "Long underwear",
        weight: ".4"
    },
    {
        name: "Baseball Hat",
        weight: ".2"
    },
    {
        name: "Belt",
        weight: ".3"
    },
    {
        name: "Gloves",
        weight: ".15"
    },
    {
        name: "Jewelry",
        weight: "2"
    },
    {
        name: "Scarf",
        weight: ".3"
    },
    {
        name: "Sunglasses",
        weight: ".045"
    },
    {
        name: "Toiletries",
        weight: "5"
    },
    {
        name: "Winter Hat",
        weight: ".35"
    },
    {
        name: "Ankle Boots",
        weight: "1.2"
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
        name: "Hiking Boots",
        weight: "1.5"
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
        name: "Dress",
        weight: ".5"
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



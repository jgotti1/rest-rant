const db = require("../Models");

db.Place.create([
  {
    name: "Burger Food",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/food1.jpg",
    founded: 1989,
  },
  {
    name: "Big Dog Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "./images/coffee.jpg",
    founded: 2020,
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });

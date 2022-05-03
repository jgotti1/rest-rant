const router = require("express").Router();

//GETS
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/thai.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee.jpg",
    },
  ];

  res.render("../views/places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("../views/places/createForm");
});
router.get("/:id", (req, res) => {
  // res.send(`This Is GET /places/${req.params.id}`);
  res.render("../views/places/showDetails");
});
router.get("/:id/edit", (req, res) => {
  res.render("../views/places/editForm");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send(`This Is DELETE/places/${req.params.id}`);
});
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send(`This Is DELETE/places/${req.params.id}/rant/${req.params.rantId}`);
});

// POST method route
router.post("/", (req, res) => {
  res.send("POST for places");
});
router.post("/:id/rant", (req, res) => {
  res.send(`This Is POST/places/${req.params.id}/rant`);
});

//PUT's
router.put("/:id", (req, res) => {
  res.send(`This Is PUT/places/${req.params.id}`);
});

module.exports = router;

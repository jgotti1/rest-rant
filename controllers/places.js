const router = require("express").Router();
const places = require("../models/places.js");

//GETS
router.get("/", (req, res) => {
  res.render("../views/places/index", { places });
});
router.get("/new", (req, res) => {
  // res.render("../views/places/createForm");
  res.render("../views/places/new");
});
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("../views/places/show", { place: places[id] });
  }
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
// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("POST for places");
// });

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.post("/:id/rant", (req, res) => {
  res.send(`This Is POST/places/${req.params.id}/rant`);
});

//PUT's
router.put("/:id", (req, res) => {
  res.send(`This Is PUT/places/${req.params.id}`);
});

module.exports = router;

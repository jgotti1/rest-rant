const router = require("express").Router();

//GETS
router.get("/", (req, res) => {
  res.send("This Is GET /places");
});
router.get("/new", (req, res) => {
  res.send("This Is GET /places/NEW");
});
router.post("/:id", (req, res) => {
  res.send(`This Is GET /places/${req.params.id}`);
});
router.get("/:id/edit", (req, res) => {
  res.send(`This Is GET EDIT /places/${req.params.id}/edit`);
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

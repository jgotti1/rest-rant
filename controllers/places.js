const router = require("express").Router();

const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;

// const router = require("express").Router();
// const places = require("../models/places.js");

// //GETS
// router.get("/", (req, res) => {
//   res.render("../views/places/index", { places });
// });
// router.get("/new", (req, res) => {
//   // res.render("../views/places/createForm");
//   res.render("../views/places/new");
// });
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("../views/places/show", { place: places[id], id });
//   }
// });

// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id });
//   }
// });

// //DELETE
// // router.delete("/:id", (req, res) => {
// //   res.send(`This Is DELETE/places/${req.params.id}`);
// // });
// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
// });

// router.delete("/:id/rant/:rantId", (req, res) => {
//   res.send(`This Is DELETE/places/${req.params.id}/rant/${req.params.rantId}`);
// });

// // POST method route
// // router.post("/", (req, res) => {
// //   console.log(req.body);
// //   res.send("POST for places");
// // });

// router.post("/", (req, res) => {
//   console.log(req.body);

//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = "/images/opps.jpg";
//   }
//   if (!req.body.city) {
//     req.body.city = "Not Availible";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
//   places.push(req.body);
//   res.redirect("/places");
// });

// router.post("/:id/rant", (req, res) => {
//   res.send(`This Is POST/places/${req.params.id}/rant`);
// });

// //PUT's
// router.put("/:id", (req, res) => {
//   console.log(req.params.id);
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     // Dig into req.body and make sure data is valid
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = "/images/opps.jpg";
//     }
//     if (!req.body.city) {
//       req.body.city = "Not Availible";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }

//     // Save the new data into places[id]
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// module.exports = router;

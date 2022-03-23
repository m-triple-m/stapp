const router = require("express").Router();
const Model = require("../models/crudModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  setTimeout(() => {
    new Model(req.body)
      .save()
      .then((data) => {
        res.status(200).json({ message: "success" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }, 1000);
});

router.get("/getall", (req, res) => {
  console.log("get all");
  setTimeout(() => {
    Model.find({})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }, 500);
});

router.delete("/delete/:userid", (req, res) => {
  setTimeout(() => {
    Model.findByIdAndDelete(req.params.userid)
      .then((data) => {
        res.status(200).json({ message: "deleted successfully!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }, 2000);
});

router.put("/update/:userid", (req, res) => {
  Model.findByIdAndUpdate(req.params.userid, req.body)
    .then((data) => {
      res.status(200).json({ message: "updated successfully!" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/check-login", (req, res) => {
  console.log(req.body);

  const formdata = req.body;

  Model.findOne({ email: formdata.email })
    .then((data) => {
      if (data) {
        if (data.password == formdata.password) {
          res.status(200).json({ message: "login success" });
        } else {
          res.status(300).json({ message: "password incorrect" });
        }
      } else {
        res.status(300).json({ message: "email not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

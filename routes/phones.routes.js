const express = require("express");
const phonesData = require("../data/phones.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(phonesData);
});

router.get("/:phoneId", (req, res) => {
  const paramsid = req.params.phoneId;
  const phone = phonesData.find((eachPhone) => eachPhone.id == paramsid);
  if (!phone) {
    res.status(404).json({ error: "Phone not found" });
  } else {
    res.json(phone);
  }
});

module.exports = router;

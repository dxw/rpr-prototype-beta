const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/beta-sprint-2/public-facing-v1/selected-service', function(req, res) {

    const selectedService = req.body["which-service"];

    if (selectedService == "find-a-regulated-profession") {
      res.render('beta-sprint-2/public-facing-v1/professions-listing-1');
    } else if (selectedService == "find-a-regulatory-authority") {
      res.render('beta-sprint-2/public-facing-v1/ra-listing-1');
    } else {
      res.render('beta-sprint-2/public-facing-v1/under-construction');
    }

    /* console.log(req); */
});

router.post('/beta-sprint-2/public-facing-v2/selected-service', function(req, res) {

    const selectedService = req.body["which-service"];

    if (selectedService == "find-a-regulated-profession") {
      res.render('beta-sprint-2/public-facing-v2/professions-filters-only');
    } else if (selectedService == "find-a-regulatory-authority") {
      res.render('beta-sprint-2/public-facing-v2/ra-filters-only');
    } else {
      res.render('beta-sprint-2/public-facing-v2/under-construction');
    }

});

module.exports = router

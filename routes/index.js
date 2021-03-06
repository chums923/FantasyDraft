var express = require('express');
var router = express.Router();

var fetch = require('../dataFetch');
var rank = require('../projectionRanking');



/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET draft page. This will return rankings in standard projection*/
router.get('/draft', function(req, res) {
	res.render('draft', { title: "Draft"});  
});

/* POST to draft page. Render a draft page with custom projection*/
router.post('/draft', function(req, res) {
	fetch.fetchPlayerData(function(data) {
		rank.addProjections(req.body, data, function(finalData) {
			//console.log(finalData);
			res.render('draft', { title: "Draft", data: finalData });
			console.log(data);
		})  
    })  
});


module.exports = router;

const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function(data) {
        let readyToEatBurgers = [];
        let devouredBurgers = [];
        console.log(data[0]);
        console.log(data[0].burger_name);
        console.log(data[0].devoured);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            if (data[i].devoured === 1) {
                devouredBurgers.push(data[i]);
            } else {
                readyToEatBurgers.push(data[i]);
            }
        }
        console.log(readyToEatBurgers);
        res.render('index', {readyToEatBurgers: readyToEatBurgers, devouredBurgers: devouredBurgers});
    })
});

router.post('/api/burgers', function (req, res) {
    burger.create([req.body.burger_name], function(data) {
        res.status(204).end();
    });
});

router.put('/api/burgers/:id', function (req, res) {
    let columnValueObject = req.body
    let condition = `id = ${req.params.id}`;
    burger.update(columnValueObject, condition, function(data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(204).end();
    });
});

module.exports = router;

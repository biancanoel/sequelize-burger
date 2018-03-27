var Burger = require(".../models/burger.js");

module.exports = function (app) {
    //see all burgers
    app.get("/api/all", function (req, res) {
        Burger.findAll({}).then(function (response) {
            res.json(results);
        });
    });

    //add a new burger
    app.post("api/new", function (req, res) {
        Burger.create({
            name: req.body.name,
            devoured: req.body.dec,
            price: req.body.price
        }).then(function (response) {
            res.json(results)
        });
    });

    //update devoured
    app.put("api/burger/:id", function (req, res) {
        Burger.update({
            updatedAt: req.body.devoured
        }, {
                where: req.params.id
            }).then(function (response) {
                if (results.changedRows===0) {
                    return res.status(404).end();
                } else {
                    return res.status(200).end();
                }
            })
    });

    //delete a burger
    app.delete("api/burger/:id", function (req, res) {
        Burger.destroy({
            where : {
                id: req.params.id
            }
        }).then(function(response){
            if (response.affectedRows==0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })
};
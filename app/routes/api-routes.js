var db = require("../../models");

module.exports = function (app) {
    //home 
    app.get('/', function (req,res){
        res.redirect('/api/all');
    })

    //see all burgers
    app.get("/api/all", function (req, res) {
        db.burger.findAll({}).then(function (data) {
            var show = [];
            console.log("this is it "+data[0].dataValues);
            for (i=0; i<data.length;i++) {
                show.push(data[i].dataValues)
            }
            var hbsObject = {
                burgers: show
            };
            //console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    //add a new burger
    app.post("/api/burgers", function (req, res) {
        //console.log(req.body)
        db.burger.create(req.body).then(function (response) {
            res.json({ response });
        }).catch(function(err){
            res.json(err);
            console.log(err);
        })
    });

    //update devoured
    app.put("/api/burger/:id", function (req, res) {
        db.burger.update(req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function (results) {
                if (results.changedRows===0) {
                    return res.status(404).end();
                } else {
                    return res.status(200).end();
                }
            })
    });

    //delete a burger
    app.delete("/api/burger/:id", function (req, res) {
        db.burger.destroy({
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
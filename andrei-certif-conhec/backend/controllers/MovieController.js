const MovieModel = require("../models/Movie");

module.exports = {

    index(req, res) {
        MovieModel.findAll({
            attributes: ["id", "name", "synopsis", "year", "cover", "trailerLink"],
        })
            .then((result) => {
                return res.json(result);
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    message: "Unable to fetch records!",
                });
            });
    },

    show(req, res) {
        MovieModel.findByPk(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    message: 'Unable to fetch the record!'
                });
            });
    },

    store(req, res) {
        MovieModel.create({
            name: req.body.name,
            synopsis: req.body.synopsis,
            year: req.body.year,
            cover: req.body.cover,
            trailerLink: req.body.trailerLink,
        })
            .then((result) => {
                return res.json(result);
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    message: "Unable to create a record!",
                });
            });
    },

    update(req, res) {
        MovieModel.update(
            {
                name: req.body.name,
                synopsis: req.body.synopsis,
                year: req.body.year,
                cover: req.body.cover,
                trailerLink: req.body.trailerLink,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
            .then((result) => {
                return res.json(result);
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    message: "Unable to update the record!",
                });
            });
    },

    delete(req, res) {
        MovieModel.destroy({
            where: {
                id: req.params.id,
            },
        })
            .then((result) => {
                return res.json(result);
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    message: "Unable to delete the record!",
                });
            });
    }

};

const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Movie = sequelize.define(
    "Movie",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        synopsis: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        year: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },

        cover: {
            type: DataTypes.BLOB('long'),
            allowNull: true 
        },

        trailerLink: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        indexes: [{ unique: true, fields: ["id"] }],
    }
);

console.log(Movie === sequelize.models.Movie);

module.exports = Movie;

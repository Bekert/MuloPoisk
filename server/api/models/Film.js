const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FilmSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    information: {
        englishTitle: {
            type: String,
            required: true,
        },
        russianTitle: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        premier: {
            type: String,
            required: false,
        },
        premierRF: {
            type: String,
            required: false,
        },
        premierUSA: {
            type: String,
            required: false,
        },
        premierOnline: {
            type: String,
            required: false,
        },
        length: {
            type: String,
            required: false,
        },
        budget: {
            type: String,
            required: false,
        },
        boxOffice: {
            type: String,
            required: false,
        },
        boxOfficeRF: {
            type: String,
            required: false,
        },
        boxOfficeUSA: {
            type: String,
            required: false,
        },
        genres: {
            type: [String],
            required: false,
        },
    },
    filmCrew: {
        directors: {
            type: [String],
            required: false,
        },
        actors: {
            type: [String],
            required: false,
        },
        operators: {
            type: [String],
            required: false,
        },
        screenwriters: {
            type: [String],
            required: false,
        },
        producers: {
            type: [String],
            required: false,
        },
        cutters: {
            type: [String],
            required: false,
        },
        composers: {
            type: [String],
            required: false,
        },
    },
    poster: {
        type: String,
        required: false,
    },
    photos: {
        type: [String],
        required: false,
    },
    rateSum: {
        type: Number,
        default: 0,
    },
    numberOfRatings: {
        type: Number,
        default: 0,
    },
    rate: {
        type: Number,
        default: 0,
    },
})

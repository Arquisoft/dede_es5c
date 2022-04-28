import {Schema} from "mongoose";

const DistributionModel = new Schema(
    {
        longitud: {
            type: Number,
            required: true
        },
        latitud: {
            type: Number,
            required: true
        }
    }
)
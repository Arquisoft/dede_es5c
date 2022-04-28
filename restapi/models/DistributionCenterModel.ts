import {model, Schema} from "mongoose";

const DistributionCenterModel = new Schema(
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
const DistributionCenter = model("DistributionCenter", DistributionCenterModel);
export default DistributionCenter;
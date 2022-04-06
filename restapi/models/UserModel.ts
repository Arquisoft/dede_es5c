import { model, Schema} from 'mongoose'

export interface User {
    name: String,
    surname: String,
    email: String,
    password: String
}

const userModel = new Schema({
        name: {
            type: String, required: true
        },
        surname: {
            type: String, required: true
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        }
    },
    {collection:'User'});


const User = model('User',userModel)
export default User;
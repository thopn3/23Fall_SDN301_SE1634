import mongoose, {ObjectId, Schema} from "mongoose"

const Product = mongoose.model("Product", new Schema({
    "id": {type: ObjectId},
    // Model validation
    "name":{
        type: String,
        require: true,
        validate: {
            validator: (value) => value.length > 3,
            message: 'Length of name > 3'
        }
    },
   
    "price":{
        type: Number,
        require: false,
        validate: {
            validator: value => value>0,
            message: 'Price must be greater than 0'
        }
    },
    "quantity":{
        type: Number,
        require: false
    }
},
    {
        timestamps:true
    }
))

export default Product

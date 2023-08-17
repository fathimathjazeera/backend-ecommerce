const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

name:String,
email:String,
password:String,
cart : [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"products"
    }
],
wishlist:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"products"
}],
orders:[]

})


const productSchema= new mongoose.Schema({
    title:String,
    description:String,
    price:Number
})
userobj= mongoose.model('users',userSchema)
productobj=mongoose.model('products',productSchema)


module.exports={
userobj,
productobj
}


//to use process.env for deployment
const dotenv = require('dotenv')
dotenv.config()
//for mongo db 
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
//to check if there is a connection with db or not 
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('connection to db sucessful')
})
//Schemas
let tripsSchema = mongoose.Schema({
    //id: { type: Number, unique: true },
    image: String,
    tripType: String,
    name: String,
    explore: String,
    price: String,
    date: Date,
    deadLine: Date,
    tripGuide: String,
    maximumNumPerTrip: String,
    idOfTourist: [String],
    description: {
        type: String
    },
})
let userSchema = mongoose.Schema({
    id: { type: Number, unique: true, sparse: true },
    userName: String,
    userMail: String,
    userPass: String,
    userNum: String,
    trips: [String],
    userimage: String,
    newsLetter: Boolean,
    isAdmin:Boolean
})

let paymentSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    creditCard: Number,
    cvv: Number,
    exDate: Date
})

let adminSchema = mongoose.Schema({
    adminMail:String,
    adminPass:String
})

// userSchema.index({ createdBy: 1, name: 1 }, { unique: true });
let trips = mongoose.model("tripsinfo", tripsSchema);
let users = mongoose.model("userinfo", userSchema);
let payment = mongoose.model("paymentinfo", paymentSchema);
let admin = mongoose.model("adminUser",adminSchema);


module.exports.users = users
module.exports.payment = payment
module.exports.trips = trips
module.exports.admin = admin
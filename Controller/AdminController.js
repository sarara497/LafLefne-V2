const Admin = require("../DataModel").admin
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { use } = require('../routes');


exports.signUpAdmin = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash("Rami123456789", salt) // must make hash after check if user in our database or not.
    // User Data when Signing up
    console.log(req.body)
    adminMail = ("rami2020@gmail.com")
    adminPass = ("Rami123456789")
   
    Admin.findOne({ adminMail: adminMail }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).send('error')
        }
        if (!user) {
            var admin= new Admin()
          
            admin.adminMail = req.body.adminMail
            admin.adminPass = hashedPass
            
            admin.save((err, saveAdmin) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send('error')
                }
                // console.log("saving user", saveAdmin)
                var token = jwt.sign({ _id: saveAdmin._id }, process.env.TOKEN_SECRET)
                res.cookie('authToken', token)
                // we can see a token in postman.
                return res.status(200).send('created')

            })
        }
        else
            return res.status(406).send('user existed')
    })
}

exports.adminLogin= (req, res) => {

    var adminMail = req.body.adminMail
    if (!adminMail) {
        return res.status(410).send('error')
    }
    Admin.findOne({ adminMail: adminMail }, async (err, admin) => {
        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }
        if (!admin) {
            console.log('admin not found')
            return res.status(404).send('not found admin')
        }
        else {
            const vaildPass = await bcrypt.compare(req.body.adminPass,admin.adminPass)
            if (!vaildPass) {
                res.status(400).send('invalid Password')
            }
            else {
                var token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET)
                res.cookie('authToken', token)
                return res.status(200).send(token)
            }
        }
    })
}

exports.adminlogout = (req, res) => {
    res.cookie('authToken', '')
    res.status(200).send(req.admin)


}


exports.auth=(req , res)=>{
    res.json({
        success:true
    })
}


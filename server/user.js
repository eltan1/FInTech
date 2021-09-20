const database = require("./database");
const express = require("express");
router = express.Router();

// For easy typing
var magic = database.connection


router.post("/user/login",(req,res)=>{

    console.log(req.body);
    magic.query(" SELECT * FROM user where user_id = ?",[req.body["user_id"]], (error, results)=>{
        if(error){
            console.log(error)
            res.status(500).send(error)
        }

        /**
         * [
         *  {"user_id":"GHL","password":"0003"}
         * ]
         */

        let user  = results[0]
        let password  = user["password"]
        if (req.body["password"]=== password){
            res.send("SUCCESS")
        }
        else{
            res.send("FAILED")
        }
        /**
         * 1. retrieve the item in the first result 
         * 2. get the passoword from the item 
         * 3. compare request body pass word with 2. password
         * 4. login success / login fail (res.send ) ()Booleand "SUCCESS" "FAILED"        
         * 
         */

        


    })

})

// // ADD USER
// // The syntax for the .get() method goes like
// // router.get('/route', (req, res))

// router.post('/user/add', (req, res) => {

//     // Request validation to ensure that a new user inputs a string as fullname.
//     if (typeof(req.query.name) != 'string') {
//         console.log(`Invalid user name received: ${req.query.name}`)
//         res.status(400).send("Invalid user name received.");
//         return;
//     }

//     // The syntax for the .query() method goes like....
//     // magic.query('SQL Syntax', (error, results))

//     magic.query(
//         `insert into user (fullname, balance)
//         values ('${req.query.name}', 0.01)`, 
//         (error, results) => {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send("Internal Server Error");
//             } else {
//                 console.log(results);
//                 res.status(200).send("New User Added Successfully!");
//             }
//         }
//     );
// });

module.exports = {
    router
};

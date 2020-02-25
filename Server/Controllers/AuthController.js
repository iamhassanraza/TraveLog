const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const validationResult = require("express-validator").validationResult;
const con = require("../db");

exports.signup = async (req, res) => {
  const { name, email, password, phone } = req.body;
  var today = new Date();
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(409).send(errors.array());
    }

    //Check if email already Exist
    con.query(
      "SELECT email FROM `userprofile` WHERE `email`= ?",
      email,
      async (err, result, fields) => {
        if (result.length > 0) {
          console.log(result.length);
          // throw new Error( 'email already exist')
          return res
            .status(401)
            .send({ success: false, message: "Email Already Registered" });
        } else {
          const hashedPassword = await bcrypt.hash(password, 12);
          const params = [name, email, hashedPassword, phone];
          //profile type is static user 1
          con.query(
            "INSERT INTO `userprofile` (`profileType_id`, `name`, `email`, `password`, `phone`, `created_by`, `created_on`, `modified_by`, `modified_on`, `row_version`, `row_state`) VALUES ('1', ?, ?, ?, ?, '', CURRENT_TIMESTAMP, '', CURRENT_TIMESTAMP, '', '')",
            params,
            (err, result, fields) => {
              if (!err) {
                const token = jwt.sign(password, process.env.JWT_SECRET_KEY);
                res.status(200).send({
                  success: true,
                  message: "Registration Successfull",
                  name,
                  email,
                  phone,
                  token,
                  refreshtoken: null
                });
                console.log("all tours successs");
              } else {
                throw new Error("Error executing db query");
              }
            }
          );
        }
      }
    );
  } catch (e) {
    console.log("error in signup controller", e);
    res.status(401).send(e);
    return;
  }
};


// exports.signIn = async (req, res) => {
//   const { email, password } = req.body;
//            try {
//                  const errors = validationResult(req);
//                  if (!errors.isEmpty()) {
//                      return res.status(409).send(errors.array());
//                  }
//                  con.query(
//                       "SELECT * FROM `userprofile` WHERE `email`= ?",
//                       [email],
//                       async (error, result, fields) => {
//                         if(error){
//                           return res
//                           .status(400)
//                           .send({ success: false, message: error });
//                         }
//                         else{
//                               //=====email mil gya ========
//                           if (result.length > 0){
//                             if(result[0].password == password){
//                               const token = jwt.sign(password, process.env.JWT_SECRET_KEY);
//                             return res.status(200).send({
//                                 user:result[0],
//                                 message:"login sucessfull",
//                                 success:true,
//                                 token
//                                   });
//                           }
//                           else{
//                             return res.status(204).send({
//                               user:result[0],
//                               message:"Email Password Does not match",
//                               success:false,
//                                 });
//                           }
                        
            



//                           //-----email nahi mila empty hai

//                         }
//                         else{

//                         }
       
//   } catch (e) {
//     console.log("error in signup controller", e);
//     res.status(401).send(e);
//     return;
//   }
// };
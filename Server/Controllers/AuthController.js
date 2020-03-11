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
                const token = jwt.sign( {email,id:result.insertId}, process.env.JWT_SECRET_KEY);
                res.status(200).send({
                  success: true,
                  message: "Registration Successfull",
                  user:{
                  id:result.insertId,
                  name,
                  email,
                  phone,
                  token,

                  },
                  
                  refreshtoken: null,
                  

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

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(409).send(errors.array());
  }
  console.log(req.body ,'body')

  //================= check if email already exist ================== // 
  con.query(
    "SELECT * FROM `userprofile` WHERE `email`= ?",
    [email],
    async (error, fields, result) => {
      

      if (error) {
        return res.status(400).send({ success: false, message: error });
      } else {
        if (fields.length > 0) {
          const password_match = await bcrypt.compare(password, fields[0].password);
          if (password_match) {
            const token = jwt.sign({email,id:fields[0].userProfile_id}, process.env.JWT_SECRET_KEY);
            return res.status(200).send({
              user: fields[0],
              message: "login sucessfull",
              success: true,
              token
            });
          } else {
            return res.status(400).send({
              message: "Incorrect Passowrd",
              success: false
            });
          }
        } else {
          return res.status(400).send({
            user: fields[0],
            message: "Email Does not exist",
            success: false
          });
        }
      }
    }
  );
};


exports.facebookLogin = async (req, res) => {
  try {
    const { user } = req;
    console.log(user)
    // if (user.err) {
    //   return res.status(401).send({
    //     message: 'Facebook authentication failed!',
    //     error: user.err
    //   });
    // } else if (user) {
    //   const token = signToken(user);
    //   return res.status(200).send({
    //     token,
    //     message: 'Logged in successfully via facebook!'
    //   });
    // } else {
    //   return res.status(401).send({
    //     message: 'Facebook authentication failed!'
    //   });
    // }
  } catch (err) {
    res.status(500).send(err);
  }
};

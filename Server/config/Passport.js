var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
var con = require("../db");
var jwt = require("jsonwebtoken");
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "478671522642-17u75rn2ufuak0o4117vhuno274h2usl.apps.googleusercontent.com",
      clientSecret: "WFh7yBeVVvQLZRp2Oeq62MM3",
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      //check if user already exist
      //================================================================
      con.query(
        "SELECT * FROM `userprofile` WHERE `email`= ?",
        [profile.emails[0].value],
        async (error, fields, result) => {
          if (error) {
            return res.status(400).send({ success: false, message: error });
            done(error, null);
          } else {
            //user exists
            //================================================================

            if (fields.length > 0) {
              console.log("User already exist - signing in");
              const token = jwt.sign(
                { email: profile.emails[0], id: result.insertId },
                process.env.JWT_SECRET_KEY
              );
              done(null, {
                user: {
                  id:fields[0].userProfile_id,
                  email: fields[0].email,
                  name: fields[0].name,
                  phone: fields[0].phone,
                  profileType_id: fields[0].profileType_id
                },
                token
              });
            } else {
              //create user
              //================================================================
              console.log("creating new user ", profile.emails[0].value);

              con.query(
                "INSERT INTO `userprofile` (`profileType_id`, `name`, `email`, `created_by`, `created_on`, `modified_by`, `modified_on`, `row_version`, `row_state`) VALUES ('1', ?, ?, '', CURRENT_TIMESTAMP, '', CURRENT_TIMESTAMP, '', '')",
                [profile.displayName, profile.emails[0].value],
                (err, result, fields) => {
                  console.log("result", result.insertId);
                  console.log("fields", fields);
                  if (!err) {
                    const token = jwt.sign(
                      { email: profile.emails[0], id: result.insertId },
                      process.env.JWT_SECRET_KEY
                    );
                    done(null, {
                      user: {
                        id:result.insertId,
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        phone: null,
                        profileType_id: 1
                      },
                      token
                    });
                  } else {
                    return res
                      .status(400)
                      .send({
                        success: false,
                        message: "error executing query line 57 passport'"
                      });
                    done("error executing query line 57 passport", null);
                  }
                }
              );
            }
          }
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "187688746008317",
      clientSecret: "03d0a89042d3f93d873f58769157d5b1",
      callbackURL: "/auth/facebook/callback/",
      profileFields: [
        "id",
        "email",
        "gender",
        "link",
        "locale",
        "name",
        "displayName",
        "timezone",
        "updated_time",
        "verified"
      ]
    },
    function(accessToken, refreshToken, profile, done) {
      // user's fb dp = 'https://graph.facebook.com/' + profile.id + '/picture?height=350&width=250';
      //check if user already exist
      //================================================================
      console.log('yaha tk tw agya')
      con.query(
        "SELECT * FROM `userprofile` WHERE `email`= ?",
        [profile.emails[0].value],
        async (error, fields, result) => {
          if (error) {
            return res.status(400).send({ success: false, message: error });
            done(error, null);
          } else {
            //user exists
            //================================================================

            if (fields.length > 0) {
              console.log("User already exist - signing in");
              const token = jwt.sign(
                { email: profile.emails[0], id: result.insertId },
                process.env.JWT_SECRET_KEY
              );
              done(null, {
                user: {
                  id:fields[0].userProfile_id,
                  email: fields[0].email,
                  name: fields[0].name,
                  phone: fields[0].phone,
                  profileType_id: fields[0].profileType_id
                },
                token
              });
            } else {
              //create user
              //================================================================
              console.log("creating new user ", profile.emails[0].value);

              con.query(
                "INSERT INTO `userprofile` (`profileType_id`, `name`, `email`, `created_by`, `created_on`, `modified_by`, `modified_on`, `row_version`, `row_state`) VALUES ('1', ?, ?, '', CURRENT_TIMESTAMP, '', CURRENT_TIMESTAMP, '', '')",
                [profile.displayName, profile.emails[0].value],
                (err, result, fields) => {
                  console.log("result", result.insertId);
                  console.log("fields", fields);
                  if (!err) {
                    const token = jwt.sign(
                      { email: profile.emails[0], id: result.insertId },
                      process.env.JWT_SECRET_KEY
                    );
                    done(null, {
                      user: {
                        id:result.insertId,
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        phone: "",
                        profileType_id: 1
                      },
                      token
                    });
                  } else {
                    return res
                      .status(400)
                      .send({
                        success: false,
                        message: "error executing query line 57 passport'"
                      });
                    done("error executing query line 57 passport", null);
                  }
                }
              );
            }
          }
        }
      );
    }
  )
);

// FLOW OF PASSPORT JS

// auth/google wali api hit hoti hai , usme passport.authenticate('google',{scope : etc }) chalta hai, jisse
// google k server pe request jati hai , concent screen show hojati user ko .

// phir jab user allow karta hia tw google , hamare redirect url ('auth/google/callback') pe query param me code bhejta hia bas (not the profile data),
// apne redirect url ('auth/google/callback') pe bhi passport.authenticate('google') use karlo tw automatically passport us code ko use kar k
// user ki profile wagera fetch kar k le aega  PER abhi wo redirect url ('auth/google/callback') nahi chalega , pehle GoogleStrategy me jo callback hai wo chalega
// uske done wale function k bad apka code chalega redirect url ('auth/google/callback') wala.

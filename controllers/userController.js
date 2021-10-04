const userModel = require('../models/user');
/**
 * Add your addUser method here
 */

//  {
//   first_name: {
//     type: String,
//   },
//   last_name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   occupation: {
//     type: String,
//   },
// },
// { timestamps: true, minimize: false }
// );
async function addUser(req, res){
  console.log(req.body);
  const userDocument = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "occupation": req.body.occupation
  }

  userModel.insertOne(userDocument, (err, results)=> {
    if (err) {
      console.log(err);
    } else {
      res.json({
        "message": `User: ${results._id} has been added`,
        "staus": 200
      });
    }
  });
}

module.exports = addUser;
const mongoose = require('mongoose');

let mongoConfig = () =>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vii99b3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log('Connected!'));
}

module.exports = mongoConfig;


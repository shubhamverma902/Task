const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb://localhost:27017/user";
const  connect  =  mongoose.connect(url, { useUnifiedTopology: true });
module.exports  =  connect;
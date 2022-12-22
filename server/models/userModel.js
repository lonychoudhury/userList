import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    status: String,
  },  
  {
    timestamps: true,
  });
  
  var UserModel = mongoose.model("UserModel", userSchema);
  
  export default UserModel;
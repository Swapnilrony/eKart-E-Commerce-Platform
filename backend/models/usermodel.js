// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     profilepic: { type: String, default: "" }, // cloudaniry image url
//     profilepicPublicId: { type: String, default: "" }, // cloudinary public id for deletion
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: {
//         type: String,
//         enum: ["user", "admin"],
//         default: 'user'
//     },
//     token: { type: String, default: null },
//     isVerified: { type: Boolean, default: false },
//     isloggedIn: { type: Boolean, default: false },
//     otp: { type: String, default: null },
//     otpExpiry: { type: Date, default: null },
//     address: { type: String },
//     city: { type: String },
//     zipcode: { type: String },
//     phoneNo: { type: String },
// }, {timestams:true})

// export const User = mongoose.model("User", userSchema)


// backend/models/usermodel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },   // matched to controller usage
  lastName: { type: String, required: true },
  profilePic: { type: String, default: "" },     // camelCase consistent naming
  profilePicPublicId: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  token: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
  otp: { type: String, default: null },
  otpExpiry: { type: Date, default: null },
  address: { type: String },
  city: { type: String },
  zipcode: { type: String },
  phoneNo: { type: String }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

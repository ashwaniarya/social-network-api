const mongoose = require( 'mongoose' )
const bcryptjs = require('bcryptjs');

let Schema = mongoose.Schema

let userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: {
    type: String,
    minlength: 1
  },
  type: { 
    type: String,
    enum: [ "god", "normal", "manager" ]
  },
  app: {
    type: Schema.Types.ObjectId,
    ref: "App"
  },
  points: { type: Number, default: 0 },
  createdAt: {
    type: Date, default: Date.now()
  },
  deleted: { type: Boolean, default: false },
  auth:{
    agent:{
      type: String,
      enum:[ null, "email" ],
      default: null
    },
    activationValue:{
      type: Number,
      default:null
    },
    timestamp:{
      type:Date,
      default:null
    }
  }
})

userSchema.pre('save',function( next ){
  let user = this
  if(user.isModified('password')){
    bcryptjs.genSalt(10,(err,salt)=>{
      bcryptjs.hash(user.password, salt ,(err,hash)=>{
        user.password = hash
        next();
      })
    })
  }else{
    next()
  }
})

userSchema.statics.findByCredentials = function( username, password ){
  let User = this
  
  return User.findOne( { username } ).then(user=>{
     
    if(!user) return Promise.resolve(null)
    
    return new Promise((resolve,reject) => {
      bcryptjs.compare(password,user.password,(err,result)=>{
        
        if(result) return resolve(user)
        else return resolve(null)
      })
    })
  })
}

// to generate a otp 
userSchema.methods.generateOtp = async function(){
  let user = this
  user.auth.agent = "phone"
  user.auth.activationValue = Math.floor(100000 + Math.random() * 900000)
  user.auth.timestamp =  Date.now().valueOf()
  return await user.save()
}

// to validate the otp
userSchema.methods.validateOTP = async function(value,atime = null){
	const user = this  
  if(value === user.auth.activationValue){
    user.auth.activationValue = null
    await user.save()
    return true
  }
  else {
    return false
  }
}


let User = mongoose.model( 'User', userSchema )
module.exports = User
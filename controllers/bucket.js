const Bucket = require('../models/Bucket')
const {StatusCodes:Status} = require('http-status-codes')
const postUserToBucket = async (req,res)=>{
 const user = await Bucket.create({...req.body})
 res.status(Status.CREATED).json({success:true, name:user.name})
}
module.exports = {postUserToBucket}
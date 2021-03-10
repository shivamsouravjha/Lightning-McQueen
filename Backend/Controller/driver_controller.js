///const fs=require('fs');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../Model/Error');
const Driver_Schema = require('../model/driver_schema');
const Rider_Schema = require('../model/rider_schema');

const signup  = async(req,res,next)=>{

};
const login  = async(req,res,next)=>{

};
exports.signup = signup;
exports.login = login;

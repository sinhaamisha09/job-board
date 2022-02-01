const Recruiters = require("../../models/recruiter");
const Jobs = require("../../models/job");

exports.jobsByRecruiter = async (req, res, next) => {
    try {
        const response = Jobs.filter( job => job.recruiterID == req.params.recruiterID) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

exports.filterJobsByJobID = async (req, res, next) => {
    try {
        const response = Jobs.filter( job => job.id == req.params.jobID) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

exports.filterJobsByKeyword = async (req, res, next) => {
    try {
        const response = Jobs.filter( job => job.id == req.params.jobID) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

exports.filterJobsByLocation = async (req, res, next) => {
    try {
        const response = Jobs.filter( job => job.location == req.params.location) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}


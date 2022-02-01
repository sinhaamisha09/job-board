const Recruiters = require("../../models/recruiter");
const Applications = require("../../models/application");
const Applicants = require("../../models/applicant");
const Jobs = require("../../models/job");

exports.apply = async (req, res, next) => {
    try{
        const jobData = await Jobs.find( job => job.id === req.params.jobId);
        
        //if job id not found return error
        if(!jobData) 
        {
          res.status(404).json({
          message: "Job Not Found"
          })
          return;
        }
        
        //check if already applied
        Applications.find( (application) => 
            application.applicantID === user._id && application.jobID === req.params.jobID,
          ).then( ( data ) => {
            if( data !== null )
            {
              res.status(400).json({
                message: "You have already applied for this job",
              });
              return;
            }
        })
        
        //apply for job
        const application = {
            "ApplicantID": user._id,
            "recruiterID": jobData.recruiterID,
            "jobId": jobData.id,
            "status": "applied",
            "applyDate": new data(),
          };
        Applications.push(application)
          .then(() => {
            res.json({
              message: "Job application successful",
            });
          })
          .catch((err) => {
            res.status(400).json(err);
          });
    } 
    catch (err){
        console.log(err)
        next(err);
    }
}

// save and update 

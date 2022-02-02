const Applications = require("../../models/application");
const Jobs = require("../../models/job");


//apply for job 
exports.apply = async (req, res, next) => {
    try{
        const jobData = await Jobs.find( job => job.id === req.body.jobId);
        
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
            application.applicantID === user._id && application.jobID === req.body.jobID,
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
            "applicationID": req.body.applicationID,
            "recruiterID": jobData.recruiterID,
            "applicantID": user._id,
            "jobID": jobData.id,
            "status": "applied",
            "applyDate": new data(),
          };

        //add new application in the array
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

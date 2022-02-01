const Applications = require("../../models/application");
const { jobsByRecruiter } = require("../applicant/search");

//view applicaions of a particular job (Recruiter)
exports.GetJobApplications = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can view list applications for a particular job
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter view",
            });
            return;
        }
        const response =  [];
        for(let i=0;i<Applications.length;i++)
        {
            if(Applications[i].jobID === req.params.jobID && Applications.recruiterID === user._id)
                response.list.push(Application[i])
        }
        res.send(response);
    } catch (err){
        next(err);
    }
}

//update status of applicaions of a particular job (Recruiter)
exports.updateApplicationStatus = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can update status of application 
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter view",
            });
            return;
        }
        const response =  [];
        Applications.find( (application) => application.id === req.params.applicationID && application.recruiterID === user._id)
            .then(
                (data) => {
                    if (data === null) {
                      res.status(404).json({
                        message: "Application not found",
                      });
                      return;
                    }
                    Jobs.find( job => job.id == data.jobID)
                        .then((job) => {
                            if (job === null) {
                              res.status(404).json({
                                message: "Job does not exist",
                              });
                              return;
                            }
                        }
                    )
                }
            )
        
        res.send(response);
    } catch (err){
        next(err);
    }
}

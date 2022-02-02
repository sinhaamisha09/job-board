const { default: application } = require("../../models/application");
const Applications = require("../../models/application");
const Jobs = require("../../models/job");


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
        const response = { payLoad: [] }
        for(let i=0;i<Applications.length;i++)
        {
            if(Applications[i].jobID === req.body.jobID && Applications.recruiterID === user._id)
                response.payload.push(Application[i])
        }
        res.send(response);
    } catch (err){
        next(err);
    }
}

//update status of applicaions of a particular job (Recruiter)
// if applicant skills match with job required skills set - 
// -> application status = accepted
// -> else application status = rejected
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
        const response = { payLoad: [] }

        Applications.find( 
            (application) => 
                application.id === req.body.applicationID 
                && 
                application.recruiterID === user._id
            )
            .then(
                (data) => {
                    if (data === null) {
                      res.status(404).json({
                        message: "Application not found",
                      });
                      return;
                    }
                    const job = Jobs.find( job => job.id == data.jobID)
                        .then((job) => {
                            if (job === null) {
                              res.status(404).json({
                                message: "Job does not exist",
                              });
                              return;
                            }
                        }
                    )
                    if(data.status === "applied" && job !== null )
                    {
                        const skills = job.skills;
                        const applicantSkills = data.skills;
                        const skillMatch = skills.filter( skill => {
                            return applicantSkills.includes(skill);
                        });

                        if(skillMatch.length > 0)
                            application.status = "accepted"
                        else
                            application.status = "rejected"
                    }
                }
            )
        res.send(response);
    } catch (err){
        next(err);
    }
}


//last function
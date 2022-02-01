const Recruiters = require("../../models/recruiter");
const Jobs = require("../../models/job");

//get job by obid
exports.GetJob = async (req, res, next) => {
    try{
        if(Jobs.length === 0) {
            res.status(401).json({
              message: "Only recruiter can post a job",
            });
            return;
        }
        const response = await Jobs.filter( (job) =>  job.id === req.jobID)
        res.json(response);
    } 
    catch (err){
        next(err);
    }
}

// posting a new job 
exports.PostJob = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can post a job
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter can post a job",
            });
            return;
        }
        const job = { 
            "id": req.params.jobID,    
            "title": req.body.title,
            "companyName": req.body.companyName,
            "recruiterId": user._id,
            "skills": req.body.skillsets,
            "description" : req.body.description,
            "location": req.body.location,
            "posted_at": new Date(),
         }
        Jobs.push(job)
        .then(() => {
        res.json({ message: "Job added successfully to the database" });
        })
    

    } catch (err){
        next(err);
    }
}

// updating a job info
exports.UpdateJob = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can update a job post
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter can update a job",
            });
            return;
        }


    } catch (err){
        next(err);
    }
}

// remove a job by jobID 
exports.RemoveJob = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can remove a job post
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter can update a job post",
            });
            return;
        }
        const jobIndex = Jobs.findIndex( job => job.id !== req.params.jobID );
        if(jobIndex !== -1){
            Jobs.splice(jobIndex, 1);
        }
        // Jobs = Jobs.filter( job => job.id !== req.params.jobID)
        
        res.send(Jobs)
    } catch (err){
        next(err);
    }
}

exports.GetAllJobByRecruiter = async (req, res, next) => {
    try{
        const user = req.user;
        // only recruiter can remove a job post
        if (user.type != "recruiter") {
            res.status(401).json({
              message: "Only recruiter can view",
            });
            return;
        }
        const allJobs = Jobs.filter( (job) => job.recruiterID === user._id )
        if ( allJobs.length == 0 ) {
            console.log('no jobs')
            return;
        }
        res.send(allJobs);

    } catch (err){
        next(err);
    }
}
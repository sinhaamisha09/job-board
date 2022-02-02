const Applicants = require("../../models/applicant");
const Jobs = require("../../models/job");


exports.jobsByRecruiter = async (req, res, next) => {
    try {
        const jobs = req.body.jobs ? Jobs : []
        const response = { payLoad: [] }
        response.payLoad = jobs.filter( job => job.recruiterID === req.body.recruiterID) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

exports.filterJobsByJobID = async (req, res, next) => {
    try {
        const jobs = req.body.jobs ? Jobs : []
        const response = { payLoad: [] }
        response.payLoad = jobs.filter( job => job.id === req.body.jobID) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

exports.filterJobsByKeyword = async (req, res, next) => {
    try {
        const jobs = req.body.jobs ? Jobs : []
        const response = { payLoad: [] }
        const keywords = req.body.keywords ? req.body.keywords : " "
        let words = keywords.split(' ')
        let isLocation = false
        let isSkill = false
        const skills = new set()
        const locations = new set()
        
        //function to find different skills/location array
        for(let index = 0; index < jobs.length ; index++)
        {
            const skillset = jobs[i].skills
            skillset.forEach( skill => {skills.add(skill) })
            locations.add(jobs.location)
        }

        words.forEach( word => 
        {
            const sortedJob = []
            if(skills.has(word)){
                sortedJob = jobs.filter( job => job.skills.include(word)) || []
            }
            else if(locations.has(word)){
                sortedJob = jobs.filter( job => job.id == req.body.jobID) || []
            }

            if(sortedJob.length) 
                response.payLoad.concat(sortedJob)
        })

        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

// filter job by locations
exports.filterJobsByLocation = async (req, res, next) => {
    try {
        const jobs = req.body.jobs ? Jobs : []
        const response = { payLoad: [] }
        response.payLoad = jobs.filter( job => job.location == req.body.location) || []
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

// job recommendation based on applicant's skills
exports.jobRecommendation = async (req, res, next) => {
    try {
        const user = await Applicants.find( applicant =>  applicant.id === req.user._id )
        const skills = user.skills ? user.skills : []
        const response = { payLoad: [] }
        let isRecommended= false;
        const jobs = req.body.jobs ? Jobs : []
        for(let i=0;i<jobs.length;i++)
        {
            const job = jobs[i];
            if(skills.length>0 && job.skills)
            {
                isRecommended= false
                skills.forEach( skill => {
                    if(job.skills.includes(skill)) isRecommended= true;
                })
            }
            if(isRecommended)
                response.payload.push(job)
        }
        res.send(response);
    } 
    catch (err) {
      next(err)
    }
}

// sort different keywords 

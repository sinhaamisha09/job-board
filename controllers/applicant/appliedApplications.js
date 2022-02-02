const Applications = require("../../models/application");

//view applied applicaions of an applicant
exports.GetAppliedApplications = async (req, res, next) => {
    try{
        const user = req.user;
        // only applicant can view list of applications he/she applied for
        if (user.type != "applicant") {
            res.status(401).json({
              message: "Only Applicant can view",
            });
            return;
        }
        const response = { payLoad: [] }
        for(let i=0;i<Applications.length;i++)
        {
            if(Applications.applicantID === user._id)
                response.payload.push(Application[i])
        }
        res.send(response);
    } catch (err){
        next(err);
    }
}

//Cancel/withdraw applied applicaion of an applicant
exports.withdrawApplication = async (req, res, next) => {
    try{
        const user = req.user;
        // only applicant can view list of applications he applied for
        if (user.type != "applicant") {
            res.status(401).json({
              message: "Only Applicant can view",
            });
            return;
        }
        const applicationIndex = Applications.findIndex( application => application.id !== req.body.jobID );
        Applications[applicationIndex].status = "canceled"
        // if(applicationIndex !== -1){
        //     Applications.splice(applicationIndex, 1);
        // }

    } catch (err){
        next(err);
    }
}


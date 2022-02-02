const { apply } = require("../controllers/applicant/apply");
const Applications = require("../../models/application");
const Jobs = require("../../models/job");

test('Properly search for ...', async () => {
    let len = Applications.length 
    const req = {
        body: {
            "applicationID": Applications[len-1].id + 1 ,
            "recruiterID":  11113,
            "applicantID": 111113,
            "jobID":  123453,
        },
        user: {
            _id: 111113
        }
    }
    const response = await apply(req, res, )
    expect(Applications.length).toBeGreaterThan(len);
})
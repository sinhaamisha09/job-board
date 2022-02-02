const { 
    GetJobApplications,
    updateApplicationStatus
} = require("../controllers/recruiter/applicationView");
const Applications = require("../../models/application");
const Jobs = require("../../models/job");


test('Properly viewed applicaions of a particular job (Recruiter)', () => {
    expect(GetJobApplications() ).toEqual()
})

test('Properly updateed status of applicaions of a particular job (Recruiter)', () => {
    expect(updateApplicationStatus()).toEqual()
})
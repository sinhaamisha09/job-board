const { 
    GetJobApplications,
    updateApplicationStatus
} = require("../controllers/recruiter/applicationView");

test('Properly viewed applicaions of a particular job (Recruiter)', () => {
    expect(GetJobApplications() ).toEqual()
})

test('Properly updateed status of applicaions of a particular job (Recruiter)', () => {
    expect(updateApplicationStatus()).toEqual()
})
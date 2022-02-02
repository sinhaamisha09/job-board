const {
    GetJob,
    PostJob,
    UpdateJob,
    RemoveJob,
    GetAllJobByRecruiter
} = require("../controllers/recruiter/jobCrud");

test('Properly got job by jobid', () => {
    expect( GetJob()).toEqual()
})

test('Properly posted a new job ', () => {
    expect( PostJob()).toEqual()
})

test('Properly updated a job info', () => {
    expect( UpdateJob()).toEqual()
})

test('Properly removed a job by jobID ', () => {
    expect( RemoveJob()).toEqual()
})

test('Properly got all job posted by recruiter', () => {
    expect( GetAllJobByRecruiter()).toEqual()
})
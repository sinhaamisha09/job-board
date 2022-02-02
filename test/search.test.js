const { 
    jobsByRecruiter, 
    filterJobsByJobID, 
    filterJobsByLocation, 
    filterJobsByKeyword,
    jobRecommendation
} = require("../controllers/applicant/search");
const Jobs = require("../../models/job");
const Recruiters = require("../../models/recruiter");


test('Properly search for ...', () => {
    expect(jobsByRecruiter()).toEqual()
})

test('Properly search for ...', () => {
    expect(filterJobsByJobID()).toEqual()
})

test('Properly search for ...', () => {
    expect(filterJobsByLocation()).toEqual()
})

test('Properly search for ...', () => {
    expect(filterJobsByKeyword()).toEqual()
})

test('Properly search for ...', () => {
    expect(jobRecommendation()).toEqual()
})

//toBe
//toEqual
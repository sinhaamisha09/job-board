const { TestWatcher } = require("jest");
const { 
    jobsByRecruiter, 
    filterJobsByJobID, 
    filterJobsByLocation, 
    filterJobsByKeyword,
    jobRecommendation
} = require("../controllers/applicant/search");

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
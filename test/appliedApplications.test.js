const { 
    GetAppliedApplications, 
    withdrawApplication 
}= require("../controllers/applicant/appliedApplications");
const Applications = require("../../models/application");

test('Properly checked applied applicaions of an applicant', () => {
    const user = {
        
    }
    expect( GetAppliedApplications() ).toEqual()
})

test('Properly Canceled applied applicaion of an applicant', () => {
    expect(withdrawApplication() ).toEqual()
})
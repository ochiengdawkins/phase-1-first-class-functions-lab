// Code your solution in this file!
const returnFirstTwoDrivers = (array = []) => {
    return array.slice(0,2);
};
const returnLastTwoDrivers = (array = []) => {
    return array.slice(array.length - 2, array.length);
};
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(argument){
    return pizza => argument * pizza; 
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, cb){
    return cb(drivers);
} 
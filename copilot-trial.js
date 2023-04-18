function calculateDaysBetweenDates(begin, end){
    var beginDate = new Date(begin);
    var endDate = new Date(end);

    var beginYear = beginDate.getFullYear();

}

// check if a number is divisible by the numbers 
// from 1 to 9, if it is divisible by a number, 
// add that number to a list and return it
function checkDivisibility(number){
    var list = [];
    for (var i = 1; i <= 9; i++){
        if (number % i == 0){
            list.push(i);
        }
    }
    return list;
}

// Express server on port 3000
var express = require('express');

// Return the current time
function getCurrentTime(){
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}
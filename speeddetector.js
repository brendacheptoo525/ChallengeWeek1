const prompt = require("prompt-sync")({ sigint: true });

// Constants
const speedLimit = 70; // Speed limit in km/h
const kmperdemeritpoint = 5; // Number of km per demerit point
const maxdemeritpoints = 12; // Maximum demerit points allowed

let accumulatedPoints = 0;

function speedcheck(speed) {
    if (isNaN(speed)) {
        return "Invalid input. Please enter a valid number.";
    }

    if (speed <= speedLimit) {
        return "OK"; // Speed is within the limit
    } else {
        // calculate the demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmperdemeritpoint);
        accumulatedPoints += demeritPoints;

        if (accumulatedPoints > maxdemeritpoints) {
            return "License suspended"; // License suspended if exceeding maximum demerit points
        } else {
            return "Demerit points: " + demeritPoints + "\nCumulative demerit points: " + accumulatedPoints;

        }
    }
}

// Main program
while (true) {
    const speed = parseInt(prompt('Enter speed:'));
    const result = speedcheck(speed);
    console.log(result);
    if (result === "License suspended") {
        break; // Exit the loop if the license is suspended
    }
}

let raceNumber = Math.floor(Math.random() * 1000);

let registreredEarly = false;
const runnerAge = 18;

if (registreredEarly && runnerAge > 18 ) {
  console.log(`Your race number is ${raceNumber}, Your race time is at 9:30am`)
} else if (runnerAge > 18 && !registreredEarly ) {
  console.log(`Your race number is ${raceNumber}. Late adults run at 11:00 am`);
} else if (runnerAge < 18) {
  console.log('Youth registrants run at 12:30 pm (regardless of registration');
}  else {
  console.log('See with the registration desk');
};
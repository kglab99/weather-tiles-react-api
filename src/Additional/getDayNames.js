const today = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day1Name = new Date(today)
day1Name.setDate(day1Name.getDate() + 1)
day1Name = day1Name.getDay();
day1Name = days[day1Name];

let day2Name = new Date(today)
day2Name.setDate(day2Name.getDate() + 2)
day2Name = day2Name.getDay();
day2Name = days[day2Name];

export {day1Name, day2Name}
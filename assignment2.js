const talkingCalendar = function(date) {
  let datesplit = date.split("/")
  // console.log(datesplit)
  let months =  ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  let year = datesplit[0];
  let monthChange = Number(datesplit[1]) - 1;
  let month = months[monthChange];
  // console.log(month)
  
  let dayChange = Number(datesplit[2]);
  // console.log(dayChange)

  let day = ""
  if (dayChange === 1 || dayChange === 21 || dayChange === 31) {
    day = dayChange + 'st';
  } else if (dayChange === 2 || dayChange === 22) {
    day = dayChange + 'nd'
  } else if (dayChange === 3 || dayChange === 23) {
    day = dayChange + 'rd'
  } else {
    day = dayChange + 'th'
  }

  return month + ' ' + day + ', ' + year;

};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
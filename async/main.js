function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => console.log('Доброе утро, Вася!');
    const goodNight = () => console.log('Спокойной ночи, Вася!');

    const setWakeUpTime = setAlarm(wakeUpTime, goodMorning);
    const setBedTime = setAlarm(bedTime, goodNight);

    setInterval(setWakeUpTime, 5000);
    setInterval(setBedTime, 5000);
}

function setAlarm(time, callback) {
    return function () {
        const now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        

      if (hours < 10) {
          hours = '0' + hours;
      } 
      else if (hours >= 10) {
          hours = hours;
      }
      if (minutes < 10) {
           minutes = '0' + minutes;
      }  
      else if (minutes >= 10) {
          minutes = minutes;
      } 
      let timeNow = hours + ':' + minutes;
      console.log(timeNow);

      if (timeNow === time) {
            callback();
        }
    }
}
        

setDailyRhythm('07:00','22:00');
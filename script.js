function updateTime() {
    let dt = document.getElementById("dt");
    let time = document.getElementById("time");
    let now = new Date();


    let day = now.getDate();
    let day1=day>9?day:"0"+day;
    let month =now.getMonth()+1;
    let month1=month>9?month:"0"+month;
    let year = now.getFullYear();
    dt.innerHTML = `${day1}/${month1}/${year}`;

 
    let hours = now.getHours();
    let meridiem = 'AM';
    if (hours >= 12) {
        meridiem = 'PM';
    }
    hours = hours % 12 || 12;

    let minutes = now.getMinutes();
    let minutes1=minutes>9?minutes:"0"+minutes;
    let seconds = now.getSeconds();
    let seconds1=seconds>9?seconds:"0"+seconds;

    time.innerHTML = `${hours}:${minutes1}:${seconds1}  ${meridiem}`;

   
    setTimeout(updateTime, 1000);
}

updateTime();

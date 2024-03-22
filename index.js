function updateTime() {
    let dt = document.getElementById("dt");
    let time = document.getElementById("time");
    let now = new Date();

    // Date
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();
    dt.innerHTML = `${day}/${month}/${year}`;

    // Time
    let hours = now.getHours();
    let meridiem = 'AM';
    if (hours >= 12) {
        meridiem = 'PM';
    }
    hours = hours % 12 || 12; // Convert to 12-hour format
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    time.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds} ${meridiem}`;

    // Update every 100 milliseconds
    setTimeout(updateTime, 100);
}

updateTime();

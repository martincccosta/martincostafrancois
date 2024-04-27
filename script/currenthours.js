function getCurrentTime () {
    const currentTimeUTC = new Date(); 

    let currentTime = new Date(currentTimeUTC.getTime());

    let formatedTime = currentTime.toLocaleTimeString('en-AU', {
    hours: '2-digit',
    minutes: '2-digit', 
});

    return formatedTime;
}

function updateTimeDisplay() {
    let timeElement = document.getElementById('currentTime');
    let timeText = "Melbourne - " +  getCurrentTime();

    timeElement.textContent = timeText;


}

updateTimeDisplay();


setInterval(updateTimeDisplay, 1000,);


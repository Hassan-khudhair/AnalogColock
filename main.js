const secondHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime() {
    const now = new Date();
    const second = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const setInterval = 6

    secondHand.style.transform = 'rotate(' + (second * setInterval) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * setInterval + second / 10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
}
setInterval(getTime, 100);

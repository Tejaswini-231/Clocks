document.addEventListener("DOMContentLoaded", function () {
    const hoursHand = document.querySelector(".hour");
    const minutesHand = document.querySelector(".minute");
    const secondsHand = document.querySelector(".second");

    function setTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const secondsInDegrees = (seconds / 60) * 360 + 90;  // +90 to start from top
        const minutesInDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
        const hoursInDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

        hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
        minutesHand.style.transform = `rotate(${minutesInDegrees}deg)`;
        secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;
    }

    setInterval(setTime, 1000);
    setTime();  // Initial call to avoid delay
});

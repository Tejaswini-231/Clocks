document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        const alldate = new Date();
        const date = alldate.toLocaleDateString();
        const time = alldate.toLocaleTimeString();

        document.querySelector(".date").textContent = date;
        document.querySelector(".time").textContent = time;
    }

    setInterval(updateTime, 1000); // Update every second
    updateTime(); // Initial call to display the time immediately
});

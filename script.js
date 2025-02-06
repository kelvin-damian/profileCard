function updateTime() {
    document.getElementById("utcTime").textContent = new Date().toUTCString();
}
updateTime();
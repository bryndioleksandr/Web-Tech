function countdown() {
    let currentDate = new Date();
    let newYear = new Date(2025, 0, 1, 0, 0, 0);

    let dif = newYear - currentDate;

    let days = Math.floor(dif / (1000 * 60 * 60 * 24));
    dif %= (1000 * 60 * 60 * 24);
    let hours = Math.floor(dif / (1000 * 60 * 60));
    dif %= (1000 * 60 * 60);
    let mins = Math.floor(dif / (1000 * 60));
    dif %= (1000 * 60);
    let seconds = Math.floor(dif / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = mins;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(countdown, 1000);
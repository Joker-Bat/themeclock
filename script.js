
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const toggleBtn = document.getElementById('toggle');


function getTime() {
    let now = new Date();
    let hourValue = now.getHours();
    let minValue = now.getMinutes();
    let secondsValue = now.getSeconds();

    hourValue = (360 / 100) * ((hourValue / 12) * 100);
    minValue = (360 / 100) * ((minValue / 60) * 100);
    secondsValue = (360 / 100) * ((secondsValue / 60) * 100);
    
    hour.style.transform = `translate(-50%, -75%) rotate(${hourValue}deg)`;
    min.style.transform = `translate(-50%, -75%) rotate(${minValue}deg)`;
    sec.style.transform = `translate(-50%, -75%) rotate(${secondsValue}deg)`;
}

setInterval(() => {
    getTime();
}, 1000);


function switchTheme (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', "light");
    } else {
        document.documentElement.setAttribute('data-theme', "dark");
    }
}

// Toggle Dark mode
toggleBtn.addEventListener('change', switchTheme);

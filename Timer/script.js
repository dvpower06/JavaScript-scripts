const btn = document.getElementById('btn');
const timer = document.getElementById('timer');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startTimer(event) {
    for (let i = 0; i < 99;i++) {
        timer.innerText = i;
        await sleep(1000);
    }
}




btn.addEventListener('click', startTimer);
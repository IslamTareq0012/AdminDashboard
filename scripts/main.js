const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 29454, 25637, 23437, 291174, 29970, 12434, 34574, 21527, 291174],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [2944, 58454, 24684, 234837,56174, 83970,62434, 63574, 13327, 23174],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})


//Show - hide side-bar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideBar =document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
    sideBar.style.display = 'block';
});

closeBtn.addEventListener('click',()=>{
    sideBar.style.display = 'none';
})


//change theme 

const themeBtn = document.querySelector('.theme-btn');


themeBtn.addEventListener('click', ()=>{

    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
    
});
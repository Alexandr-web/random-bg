const colors = [
    '#54E1B2',
    '#54BEE1',
    '#E1548C',
    '#72E154',
    '#C2E154',
    '#E1A454',
    '#E15454',
    '#96D2E1',
    '#E19696'
];

setInterval(() => {
    const page = document.body;
    const random = Math.floor(Math.random() * colors.length);
    page.style.backgroundColor = colors[random];
}, 500);
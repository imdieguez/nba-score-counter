let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')

let onePointLeftBtn = document.querySelector('.one-point-left-btn')
let twoPointLeftBtn = document.querySelector('.two-point-left-btn')
let threePointLeftBtn = document.querySelector('.three-point-left-btn')

let onePointRightBtn = document.querySelector('.one-point-right-btn')
let twoPointRightBtn = document.querySelector('.two-point-right-btn')
let threePointRightBtn = document.querySelector('.three-point-right-btn')

let resetBtn = document.querySelector('#reset-btn')

let countLeft = 0;
let countRight = 0;

onePointLeftBtn.addEventListener('click', function() {
    countLeft += 1;
    score1.textContent = countLeft;
})

twoPointLeftBtn.addEventListener('click', function() {
    countLeft += 2;
    score1.textContent = countLeft;
})

threePointLeftBtn.addEventListener('click', function() {
    countLeft += 3;
    score1.textContent = countLeft;
})

onePointRightBtn.addEventListener('click', function() {
    countRight += 1;
    score2.textContent = countRight;
})

twoPointRightBtn.addEventListener('click', function() {
    countRight += 2;
    score2.textContent = countRight;
})

threePointRightBtn.addEventListener('click', function() {
    countRight += 3;
    score2.textContent = countRight;
})

resetBtn.addEventListener('click', function() {
    countLeft = 0;
    countRight = 0;
    score1.textContent = 0;
    score2.textContent = 0;
})
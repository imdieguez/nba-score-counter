//Link score panel 0x0.
let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')

//Link Points buttons.
let onePointLeftBtn = document.querySelector('.one-point-left-btn')
let twoPointLeftBtn = document.querySelector('.two-point-left-btn')
let threePointLeftBtn = document.querySelector('.three-point-left-btn')
let onePointRightBtn = document.querySelector('.one-point-right-btn')
let twoPointRightBtn = document.querySelector('.two-point-right-btn')
let threePointRightBtn = document.querySelector('.three-point-right-btn')

//Link reset button to restart the count.
let resetBtn = document.querySelector('#reset-btn')

//Just to set the counter in 0.
let countLeft = 0;
let countRight = 0;

//Link dropdown list and the teams name.
let homeTeamList = document.querySelector('#home-team-list');
let homeTeamName = document.querySelector('#home-team-name');
let visitorTeamList = document.querySelector('#visitor-team-list');
let visitorTeamName = document.querySelector('#visitor-team-name');

//Link logo of teams.
let homeTeamLogo = document.querySelector('#home-team-logo');
let visitorTeamLogo = document.querySelector('#visitor-team-logo')
//para trocar a imagem nas funções, basta colocar teamLogo.src = 'img/bla/bla.png'


//Display of select home name teams in the title and change de logo
homeTeamList.addEventListener('change', function() {
    if(homeTeamList.options[homeTeamList.selectedIndex].text == 'Chicago Bulls') {
        homeTeamName.textContent = homeTeamList.options[homeTeamList.selectedIndex].text;
        homeTeamLogo.src = 'img/bulls.png';
    }else if(homeTeamList.options[homeTeamList.selectedIndex].text == 'Boston Celtics') {
        homeTeamName.textContent = homeTeamList.options[homeTeamList.selectedIndex].text;
        homeTeamLogo.src = 'img/celtics.png';
    }else if(homeTeamList.options[homeTeamList.selectedIndex].text == 'Golden State Warriors') {
        homeTeamName.textContent = homeTeamList.options[homeTeamList.selectedIndex].text;
        homeTeamLogo.src = 'img/warriors.png';
    }else if(homeTeamList.options[homeTeamList.selectedIndex].text == 'Los Angeles Lakers') {
        homeTeamName.textContent = homeTeamList.options[homeTeamList.selectedIndex].text;
        homeTeamLogo.src = 'img/lakers.png';
    }else{
        homeTeamName.textContent = homeTeamList.options[homeTeamList.selectedIndex].text;
        homeTeamLogo.src = 'img/spurs.png';
    }
    resetScore()
})

//Display of select visitor name teams in the title and change de logo
visitorTeamList.addEventListener('change', function() {
    if(visitorTeamList.options[visitorTeamList.selectedIndex].text == 'Chicago Bulls') {
        visitorTeamName.textContent = visitorTeamList.options[visitorTeamList.selectedIndex].text;
        visitorTeamLogo.src = 'img/bulls.png';
    }else if(visitorTeamList.options[visitorTeamList.selectedIndex].text == 'Boston Celtics') {
        visitorTeamName.textContent = visitorTeamList.options[visitorTeamList.selectedIndex].text;
        visitorTeamLogo.src = 'img/celtics.png';
    }else if(visitorTeamList.options[visitorTeamList.selectedIndex].text == 'Golden State Warriors') {
        visitorTeamName.textContent = visitorTeamList.options[visitorTeamList.selectedIndex].text;
        visitorTeamLogo.src = 'img/warriors.png';
    }else if(visitorTeamList.options[visitorTeamList.selectedIndex].text == 'San Antonio Spurs') {
        visitorTeamName.textContent = visitorTeamList.options[visitorTeamList.selectedIndex].text;
        visitorTeamLogo.src = 'img/spurs.png';
    }else{
        visitorTeamName.textContent = visitorTeamList.options[visitorTeamList.selectedIndex].text;
        visitorTeamLogo.src = 'img/lakers.png';
    }
    resetScore()
})

//Count button with the respective numbers
onePointLeftBtn.addEventListener('click', function() {
    countLeft += 1;
    score1.textContent = countLeft;
    if(countLeft > countRight) {
        score1.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score2.style.color = '#7af486';
    }
})

twoPointLeftBtn.addEventListener('click', function() {
    countLeft += 2;
    score1.textContent = countLeft;
    if(countLeft > countRight) {
        score1.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score2.style.color = '#7af486';
    }
})

threePointLeftBtn.addEventListener('click', function() {
    countLeft += 3;
    score1.textContent = countLeft;
    if(countLeft > countRight) {
        score1.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score2.style.color = '#7af486';
    }
})

onePointRightBtn.addEventListener('click', function() {
    countRight += 1;
    score2.textContent = countRight;
    if(countLeft < countRight) {
        score2.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score1.style.color = '#7af486';
    }
})

twoPointRightBtn.addEventListener('click', function() {
    countRight += 2;
    score2.textContent = countRight;
    if(countLeft < countRight) {
        score2.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score1.style.color = '#7af486';
    }
})

threePointRightBtn.addEventListener('click', function() {
    countRight += 3;
    score2.textContent = countRight;
    if(countLeft < countRight) {
        score2.style.color = '#7af486';
    }else if(countLeft == countRight) {
        score1.style.color = 'white';
        score2.style.color = 'white';
    }else{
        score1.style.color = '#7af486';
    }
})

//Reset the counter
resetBtn.addEventListener('click', function() {
    resetScore()
})


//Functions
function resetScore() {
    countLeft = 0;
    countRight = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.style.color = 'white';
    score2.style.color = 'white';
}
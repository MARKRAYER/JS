const currentYear = 2022;
var firstName = prompt('Enter your name');
var lastName = prompt('Enter your surname');
var birthDate = Number(prompt('Enter your birthday'));
var birthMonth = Number(prompt('Enter your birth month'));
var birthYear = Number(prompt('Enter your birth year'));
var age = currentYear - birthYear;
var typeOfYear;
var zodiacName;
var isLeapYear4 = birthYear % 4 === 0;
var isLeapYear400 = birthYear % 400 === 0;
var isLeapYear100 = birthYear % 100 !== 0

if ((isLeapYear4 || isLeapYear400) && (isLeapYear100)) {
    typeOfYear = ' (leap year)';
} else {
    typeOfYear = '';
}

if ((birthMonth === 1 && birthDate >= 20) || (birthMonth === 2 && birthDate <= 18)){
    zodiacName = ', Aquarius ♒';
}else if((birthMonth === 2 && birthDate >= 19) || (birthMonth === 3 && birthDate <= 20)) {
    zodiacName = ', Pisces ♓';
}else if((birthMonth === 3 && birthDate >= 21) || (birthMonth === 4 && birthDate <= 19)) {
    zodiacName = ', Aries ♈';
}else if((birthMonth === 4 && birthDate >= 20) || (birthMonth === 5 && birthDate <= 20)) {
    zodiacName = ', Taurus ♉';
}else if((birthMonth === 5 && birthDate >= 21) || (birthMonth === 6 && birthDate <= 20)) {
    zodiacName = ', Gemini ♊';
}else if((birthMonth === 6 && birthDate >= 21) || (birthMonth === 7 && birthDate <= 22)) {
    zodiacName = ', Cancer ♋';
}else if((birthMonth === 7 && birthDate >= 23) || (birthMonth === 8 && birthDate <= 22)) {
    zodiacName = ', Leo ♌';
}else if((birthMonth === 8 && birthDate >= 23) || (birthMonth === 9 && birthDate <= 22)) {
    zodiacName = ', Virgo ♍';
}else if((birthMonth === 9 && birthDate >= 23) || (birthMonth === 10 && birthDate <= 22)) {
    zodiacName = ', Libra ♎';
}else if((birthMonth === 10 && birthDate >= 23) || (birthMonth === 11 && birthDate <= 21)) {
    zodiacName = ', Scorpio ♏';
}else if((birthMonth === 11 && birthDate >= 22) || (birthMonth === 12 && birthDate <= 21)) {
    zodiacName = ', Sagittarius ♐';
}else{
    zodiacName = ', Capricorn ♑';
}

document.write('User Bio: ' + firstName + ' ' + lastName + ', ' + age + ' years old' + typeOfYear + zodiacName + ';');
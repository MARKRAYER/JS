do {
    const CURRENT_YEAR = 2022;
    var minYear = 1900;
    var minMonth = 1;
    var maxMonth = 12;
    var maxDateOfFebruary;
    var typeOfYear;
    var zodiacName;
    var isLeapYear4 = birthYear % 4 === 0;
    var isLeapYear400 = birthYear % 400 === 0;
    var isLeapYear100 = birthYear % 100 !== 0;
    var ifNotCorrectDay;
    do {
        var birthYear = Number(prompt(`Enter your birth year, just numbers, min: 1900, max: ${currentYear}`));
    } while ((isNaN(birthYear)) || (birthYear > currentYear || birthYear < minYear));

    if (((birthYear % 4 === 0) || (birthYear % 400 === 0)) && (birthYear % 100 !== 0)) {
        typeOfYear = ' (leap year)';
    } else {
        typeOfYear = '';
    }

    do {
        var birthMonth = Number(prompt('Enter your birth month, just numbers, min: 1, max: 12'));
    } while (isNaN(birthMonth) || (birthMonth < minMonth || birthMonth > maxMonth));

    do {
        var birthDate = Number(prompt('Enter your birthday'));
    } while ((isNaN(birthDate)) || 
    ((birthMonth === 1) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 2) && (birthDate < 1 || (birthDate >= 29))) ||
    ((birthMonth === 2) && (birthDate < 1 || birthDate > 29)) ||
    ((birthMonth === 3) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 4) && (birthDate < 1 || birthDate > 30)) ||
    ((birthMonth === 5) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 7) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 8) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 9) && (birthDate < 1 || birthDate > 30)) ||
    ((birthMonth === 10) && (birthDate < 1 || birthDate > 31)) ||
    ((birthMonth === 11) && (birthDate < 1 || birthDate > 30)) ||
    ((birthMonth === 12) && (birthDate < 1 || birthDate > 31))
    )

    do {
        var firstName = prompt('Enter your name');
    } while (firstName.length < 1 || firstName.length > 20);

    do {
        var lastName = prompt('Enter your surname');
    } while (lastName.length < 1 || lastName.length > 20);

    var age = currentYear - birthYear;

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

    document.write(`User Bio: ${firstName} ${lastName}, ${age} years old${typeOfYear}${zodiacName};`);
    document.write(`<br>`);
} while (confirm('Do you want to continue&'));

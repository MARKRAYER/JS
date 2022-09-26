const USERS = [];
let user = {};
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();
const ALLOWED_OPERATIONS = [0, 1, 2, 3, 4];
const minYear = 1900;
const minMonth = 1;
const maxMonth = 12;
let FebMaxDays = 28;
const minDay = 1;

const emptyArchiveStr = `Sorry, archive with users is empty. Create users, min: 1`;
const noMoreUsersStr = `There are no more users in the archive.`;
const LeapYearStr = ` (leap year)`;
const notLeapYearStr = ``;
const wrongInfoStr = `Sorry, you entered nonexistent information`;
const anotherOperationStr = `Do you want select another operation?`;
const endProgramStr = `Buy, Buy! See you later!.`;

//GET ANY OPERATION
let checkOperation = function(message, validation, coerce){
    do{
        let messageInput = prompt(message);
        // if (validation === validationOfInputOperation && messageInput === null) {
        //     input = undefined;
        //     break;
        // }
        // else if (messageInput === null || validation(messageInput) || messageInput.trim() === '') {
        //     input = '';
        //     alert(wrongInfoStr);
        //     continue;
        // }


        
        input = coerce ? coerce(messageInput) : messageInput;
    }
    while (validation(input));
    return input;
};
//COERSE
const coerceStringToNumber = function(coerceMessage) {
    return Number(coerceMessage);
}
//VALIDATION MASSAGES
const validationMassageOperation = `Enter operation: 1 - add user, 2 - delete user, 3 - show users, 4 - show average age of users, 0 - end the program`;
const validationMassageYear = `Enter your birth year, just numbers, min: ${minYear}, max: ${currentYear}`;
const validationMassageMonth = `Enter your birth month, just numbers, min: ${minMonth}, max: ${maxMonth}`;
const validationMassageDay = `Enter your birthday`;
const validationMassageFirstName = `Enter your name`;
const validationMassageLastName = `Enter your surname`;

//VALIDATION INPUTS
const validationOfInputOperation = function(input) {
    return !ALLOWED_OPERATIONS.includes(+input)
};
const validationOfInputYear = function(input) {
    return (isNaN(input)) || 
    (input > currentYear || 
    input < minYear)
};
const validationOfInputMonth = function(input) {
    return isNaN(input) || 
    (input < minMonth) || 
    (input > maxMonth)
};
const validationOfInputDay = function(input) {
    return isNaN(input) || 
    (input < minDay ||
    input > getMaxDay())
};
const validationOfInputFullName = function(input) {
    return isFinite(Number(input)) ||
    input.trim().length < 1 || 
    input.trim().length > 20;
};
const validationOfInputIndexToDelete = function(input) {
    return isNaN(+input) ||
    +input < 0 ||
    +input >= USERS.length
}

//CHECK TRUE BIRTHDAY ACCORDING TO THE DATE
const checkTrueBirth = function(year, month, day) {

    if ((month > currentMonth) || ((month === currentMonth) && (day > currentDay))) {
        year += 1;
    }
    return year;
    
}
//IS LEAP YEAR
const validationLeapYear = function(userYearBirth){
    const isLeapYear4 = userYearBirth % 4 === 0;
    const isLeapYear100 = userYearBirth % 100 !== 0;
    const isLeapYear400 = userYearBirth % 400 === 0;
    
    LeapYear = ((isLeapYear400) ||
    ((isLeapYear4) &&
    (isLeapYear100))) ? LeapYearStr: notLeapYearStr;
    return LeapYear;
}
//MAX DAY
const getMaxDay = function() {
    FebMaxDays = user.yearType === LeapYearStr ? 29: FebMaxDays;
    maxDay = user.month === 4 || user.month === 9 || user.month === 11 ? 30: 31;
    maxDay = user.month === 2 ? FebMaxDays: maxDay;
    return maxDay;
}
//GET ZODIAC INF
const getZodiacInf = function(userMonth, userBirthDay) {
    if (
        (userMonth === 1 && userBirthDay >= 20) || 
        (userMonth === 2 && userBirthDay <= 18)){
        userZodiacName = ', Aquarius ';
        userZodiacSign = `♒`;
    }else if(
        (userMonth === 2 && userBirthDay >= 19) || 
        (userMonth === 3 && userBirthDay <= 20)) {
        userZodiacName = ', Pisces';
        userZodiacSign = `♓`;
    }else if(
        (userMonth === 3 && userBirthDay >= 21) || 
        (userMonth === 4 && userBirthDay <= 19)) {
        userZodiacName = ', Aries ';
        userZodiacSign = `♈`;
    }else if(
        (userMonth === 4 && userBirthDay >= 20) || 
        (userMonth === 5 && userBirthDay <= 20)) {
        userZodiacName = ', Taurus ';
        userZodiacSign = `♉`;
    }else if(
        (userMonth === 5 && userBirthDay >= 21) || 
        (userMonth === 6 && userBirthDay <= 20)) {
        userZodiacName = ', Gemini ';
        userZodiacSign = `♊`;
    }else if(
        (userMonth === 6 && userBirthDay >= 21) || 
        (userMonth === 7 && userBirthDay <= 22)) {
        userZodiacName = ', Cancer ';
        userZodiacSign = `♋`;
    }else if(
        (userMonth === 7 && userBirthDay >= 23) || 
        (userMonth === 8 && userBirthDay <= 22)) {
        userZodiacName = ', Leo ';
        userZodiacSign = `♌`;
    }else if(
        (userMonth === 8 && userBirthDay >= 23) || 
        (userMonth === 9 && userBirthDay <= 22)) {
        userZodiacName = ', Virgo ';
        userZodiacSign = `♍`;
    }else if(
        (userMonth === 9 && userBirthDay >= 23) || 
        (userMonth === 10 && userBirthDay <= 22)) {
        userZodiacName = ', Libra ';
        userZodiacSign = `♎`;
    }else if(
        (userMonth === 10 && userBirthDay >= 23) || 
        (userMonth === 11 && userBirthDay <= 21)) {
        userZodiacName = ', Scorpio ';
        userZodiacSign = `♏`;
    }else if(
        (userMonth === 11 && userBirthDay >= 22) || 
        (userMonth === 12 && userBirthDay <= 21)) {
        userZodiacName = ', Sagittarius ';
        userZodiacSign = `♐`;
        }
    else {
        userZodiacName = ', Capricorn ';
        userZodiacSign = `♑`;
    }
    return [userZodiacName, userZodiacSign];
}
//AFTER DELETE USER MESSAGE
const showArchiveAfterDelete = function() {
    if (USERS.length === 0) {
        return console.log(noMoreUsersStr);
    } else if (USERS.length === 1) {
        return console.log(`There are ${USERS.length} user in the archive.`);
    } else {
        return console.log(`There are ${USERS.length} users in the archive.`);
    }
}
//SHOW DELETED USER MASSEGE
const showDeletedUserInf = function() {
    deletedUserInfo = USERS.splice(indexToDelete, 1);
    console.clear();
    return console.log(`User: ${deletedUserInfo[0].firstName} ${deletedUserInfo[0].lastName} deleted successfully.`);
}

//IF EMPTY ARCHIVE
const checkIfEmptyArchive = function() {
    if (USERS.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
//SHOW ARCHIVE
const showUsersArchive = function() {
    userIndex = 0;
    for (let user of USERS) {
        console.log(`User [${userIndex}]: ${user.firstName} ${user.lastName}, ${user.age} years old${user.yearType}${user.zodiacName} ${user.zodiacSign};`);
        userIndex += 1;
    }
}

//CASE 0
const getOperation = function() {
    console.clear();
	operation = checkOperation(validationMassageOperation, validationOfInputOperation, coerceStringToNumber);
};

//CASE 1
const addNewUser = function() {

    let user = {};

    user.year = checkOperation(validationMassageYear, validationOfInputYear, coerceStringToNumber);

    user.yearType = validationLeapYear(user.year);
        
    user.month = checkOperation(validationMassageMonth, validationOfInputMonth, coerceStringToNumber);

    user.birthDay = checkOperation(validationMassageDay, validationOfInputDay, coerceStringToNumber);

    user.year = checkTrueBirth(user.year, user.month, user.birthDay);

    user.firstName = checkOperation(validationMassageFirstName, validationOfInputFullName);

    user.lastName = checkOperation(validationMassageLastName, validationOfInputFullName);

    user.zodiacName = getZodiacInf(user.month, user.birthDay)[0];

    user.zodiacSign = getZodiacInf(user.month, user.birthDay)[1];

    user.age = currentYear - user.year;

    USERS.push(user); // -> USERS[{},{}]

};

//CASE 2
const deleteUser = function() {
    const validationMassageIndexToDelete = (`Enter index of user you want delete. You can start from 0 to ${USERS.length - 1}`);

    console.clear();

    if (checkIfEmptyArchive()) {
        alert(emptyArchiveStr);
    }

    showUsersArchive();

    indexToDelete = checkOperation(validationMassageIndexToDelete, validationOfInputIndexToDelete);



    showDeletedUserInf();

    showArchiveAfterDelete();
};

//CASE 3
const showUsers = function() {
    console.clear();
    if (checkIfEmptyArchive()) {
        alert(emptyArchiveStr);
    }
    else {
        showUsersArchive();
    }
};

//CASE 4
const showAverageAge = function() {
    console.clear();
    let middleAge = 0;
    let division = 0;
    if (checkIfEmptyArchive()) {
        alert(emptyArchiveStr);
    }
    else {
        showUsersArchive();
        for (let user of USERS) {
            middleAge = middleAge + user.age;
            division++;
        }
        return console.log(`All users approximate age is: ${middleAge / division}`);
    }
}

//MAIN
do {
    getOperation();
	switch (+operation) {
        case 0: {
            break;
        }

		case 1: {
			addNewUser();
			break;
		}
		
		case 2: {
			deleteUser();
			break;
		}
		
		case 3: {
            showUsers();
			break;
		}
        
        case 4: {
            showAverageAge();
			break;
		}

		default:
			break;
	}

} while(confirm(anotherOperationStr))

console.log(endProgramStr);

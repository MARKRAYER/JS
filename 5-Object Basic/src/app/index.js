const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
const CURRENT_YEAR = 2022;
const minYear = 1900;
const minMonth = 1;
const maxMonth = 12;
operation: do {
	console.clear();
	let operation;
    let userIndex = 0;
	do {
		operation = prompt(`Enter operation: 0 - end the program, 1 - add user, 2 - delete user, 3 - show users`);
	} while (!ALLOWED_OPERATIONS.includes(+operation) || operation.trim() === '')

	switch (+operation) {
        case 0: {
            break operation;
        }

		case 1: {
			const user = {};
            do {
                user.year = +prompt(`Enter your birth year, just numbers, min: 1900, max: ${CURRENT_YEAR}`);
            } while ((isNaN(user.year)) || (user.year > CURRENT_YEAR || user.year < minYear));
        
            if (((user.year % 4 === 0) || (user.year % 400 === 0)) && (user.year % 100 !== 0)) {
                user.yearType = ' (leap year)';
            } else {
                user.yearType = '';
            }
        
            do {
                user.month = +prompt('Enter your birth month, just numbers, min: 1, max: 12');
            } while (isNaN(user.month) || (user.month < minMonth || user.month > maxMonth));
        
            do {
                user.birthDay = +prompt('Enter your birthday');
            } while ((isNaN(user.birthDay)) || 
            ((user.month === 1) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 2) && (user.birthDay < 1 || (user.birthDay >= 29))) ||
            ((user.month === 2) && (user.birthDay < 1 || user.birthDay > 29)) ||
            ((user.month === 3) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 4) && (user.birthDay < 1 || user.birthDay > 30)) ||
            ((user.month === 5) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 7) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 8) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 9) && (user.birthDay < 1 || user.birthDay > 30)) ||
            ((user.month === 10) && (user.birthDay < 1 || user.birthDay > 31)) ||
            ((user.month === 11) && (user.birthDay < 1 || user.birthDay > 30)) ||
            ((user.month === 12) && (user.birthDay < 1 || user.birthDay > 31))
            )
        
            do {
                user.firstName = prompt('Enter your name');
            } while (user.firstName.length < 1 || user.firstName.length > 20);
        
            do {
                user.lastName = prompt('Enter your surname');
            } while (user.lastName.length < 1 || user.lastName.length > 20);
        
            user.age = CURRENT_YEAR - user.year;
        
            if ((user.month === 1 && user.birthDay >= 20) || (user.month === 2 && user.birthDay <= 18)){
                userzodiacName = ', Aquarius ';
                userzodiacSign = `♒`;
            }else if((user.month === 2 && user.birthDay >= 19) || (user.month === 3 && user.birthDay <= 20)) {
                userzodiacName = ', Pisces';
                userzodiacSign = `♓`;
            }else if((user.month === 3 && user.birthDay >= 21) || (user.month === 4 && user.birthDay <= 19)) {
                userzodiacName = ', Aries ';
                userzodiacSign = `♈`;
            }else if((user.month === 4 && user.birthDay >= 20) || (user.month === 5 && user.birthDay <= 20)) {
                userzodiacName = ', Taurus ';
                userzodiacSign = `♉`;
            }else if((user.month === 5 && user.birthDay >= 21) || (user.month === 6 && user.birthDay <= 20)) {
                userzodiacName = ', Gemini ';
                userzodiacSign = `♊`;
            }else if((user.month === 6 && user.birthDay >= 21) || (user.month === 7 && user.birthDay <= 22)) {
                userzodiacName = ', Cancer ';
                userzodiacSign = `♋`;
            }else if((user.month === 7 && user.birthDay >= 23) || (user.month === 8 && user.birthDay <= 22)) {
                userzodiacName = ', Leo ';
                userzodiacSign = `♌`;
            }else if((user.month === 8 && user.birthDay >= 23) || (user.month === 9 && user.birthDay <= 22)) {
                userzodiacName = ', Virgo ';
                userzodiacSign = `♍`;
            }else if((user.month === 9 && user.birthDay >= 23) || (user.month === 10 && user.birthDay <= 22)) {
                userzodiacName = ', Libra ';
                userzodiacSign = `♎`;
            }else if((user.month === 10 && user.birthDay >= 23) || (user.month === 11 && user.birthDay <= 21)) {
                userzodiacName = ', Scorpio ';
                userzodiacSign = `♏`;
            }else if((user.month === 11 && user.birthDay >= 22) || (user.month === 12 && user.birthDay <= 21)) {
                userzodiacName = ', Sagittarius ';
                userzodiacSign = `♐`;
            }else{
                userzodiacName = ', Capricorn ';
                userzodiacSign = `♑`;
            }
            // document.write(`User [${userIndex}]: ${user.firstName} ${user.lastName}, ${user.age} years old${user.yearType}${userzodiacName} ${userzodiacSign};`);
            // document.write(`<br>`);

			USERS.push(user); // -> USERS[]

			break;
		}
		
		case 2: {
			let indexToDelete;
            let deletedUserInfo;

			do {
                console.clear();
                if (USERS.length === 0) {
                    confirm(`Sorry, archive with users is empty. Create users, min: 1`)
                    continue operation;
                }
                userIndex = 0;
                for (const user of USERS) {
                    console.log(`User [${userIndex}]: ${user.firstName} ${user.lastName}, ${user.age} years old${user.yearType}${userzodiacName} ${userzodiacSign};`);
                    userIndex += 1
                }
				indexToDelete = prompt(`Enter index of user you want delete. You can start from 0 to ${USERS.length - 1}`);
                if (indexToDelete === null) {
                    continue operation;
                }
			} while(isNaN(+indexToDelete) ||
                +indexToDelete < 0 ||
                +indexToDelete >= USERS.length ||
                isNaN(indexToDelete) || indexToDelete.trim() === '')

            deletedUserInfo = USERS[indexToDelete];
            console.clear();
            console.log(`User: ${deletedUserInfo.firstName} ${deletedUserInfo.lastName} deleted successfully.`);
			USERS.splice(indexToDelete, 1);

            if (USERS.length === 0) {
                console.log(`There are no more users in the archive.`)
            }else if (USERS.length === 1) {
                console.log(`There are ${USERS.length} user in the archive.`)
            }else {
                console.log(`There are ${USERS.length} users in the archive.`)
            }

			break;
		}
		
		case 3: {
            if (USERS.length === 0) {
                confirm(`Sorry, archive is empty. Create users, min: 1`)
                continue operation;
            }
			for (const user of USERS) {
				console.log(`User [${userIndex}]: ${user.firstName} ${user.lastName}, ${user.age} years old${user.yearType}${userzodiacName} ${userzodiacSign};`);
                userIndex += 1
            }

			break;
		}
	
		default:
			break;
	}

} while(confirm('Do you want select another operation?'))

console.log(`Buy, Buy! See you later!.`);
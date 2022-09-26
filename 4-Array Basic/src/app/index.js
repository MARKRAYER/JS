const USERS = [];
const ALLOWED_OPERATIONS = [0, 1, 2, 3];
const Y_INDEX = 0, Y_TYPE_INDEX = 1, M_INDEX = 2, D_INDEX = 3; F_NAME_INDEX = 4; L_NAME_INDEX = 5; ZODIAC_NAME_INDEX = 6; ZODIAC_SIGN_INDEX = 7, AGE_INDEX = 8;
const CURRENT_YEAR = 2022;
const minYear = 1900;
const minMonth = 1;
const maxMonth = 12;
let test = '';
operation: do {
	console.clear();
	let operation;
    let userIndex = 0;
	do {
		operation = +prompt(`Enter operation: 0 - end the program, 1 - add user, 2 - delete user, 3 - show users`) || '';
	} while (!ALLOWED_OPERATIONS.includes(operation) || ALLOWED_OPERATIONS === '')

	switch (operation) {
        case 0: {
            break operation;
        }

		case 1: {
			const user = [];
            do {
                user[Y_INDEX] = +prompt(`Enter your birth year, just numbers, min: 1900, max: ${CURRENT_YEAR}`);
            } while ((isNaN(user[Y_INDEX])) || (user[Y_INDEX] > CURRENT_YEAR || user[Y_INDEX] < minYear));
        
            if (((user[Y_INDEX] % 4 === 0) || (user[Y_INDEX] % 400 === 0)) && (user[Y_INDEX] % 100 !== 0)) {
                user[Y_TYPE_INDEX] = ' (leap year)';
            } else {
                user[Y_TYPE_INDEX] = '';
            }
        
            do {
                user[M_INDEX] = +prompt('Enter your birth month, just numbers, min: 1, max: 12');
            } while (isNaN(user[M_INDEX]) || (user[M_INDEX] < minMonth || user[M_INDEX] > maxMonth));
        
            do {
                user[D_INDEX] = +prompt('Enter your birthday');
            } while ((isNaN(user[D_INDEX])) || 
            ((user[M_INDEX] === 1) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 2) && (user[D_INDEX] < 1 || (user[D_INDEX] >= 29))) ||
            ((user[M_INDEX] === 2) && (user[D_INDEX] < 1 || user[D_INDEX] > 29)) ||
            ((user[M_INDEX] === 3) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 4) && (user[D_INDEX] < 1 || user[D_INDEX] > 30)) ||
            ((user[M_INDEX] === 5) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 7) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 8) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 9) && (user[D_INDEX] < 1 || user[D_INDEX] > 30)) ||
            ((user[M_INDEX] === 10) && (user[D_INDEX] < 1 || user[D_INDEX] > 31)) ||
            ((user[M_INDEX] === 11) && (user[D_INDEX] < 1 || user[D_INDEX] > 30)) ||
            ((user[M_INDEX] === 12) && (user[D_INDEX] < 1 || user[D_INDEX] > 31))
            )
        
            do {
                user[F_NAME_INDEX] = prompt('Enter your name');
            } while (user[F_NAME_INDEX].length < 1 || user[F_NAME_INDEX].length > 20);
        
            do {
                user[L_NAME_INDEX] = prompt('Enter your surname');
            } while (user[L_NAME_INDEX].length < 1 || user[L_NAME_INDEX].length > 20);
        
            user[AGE_INDEX] = CURRENT_YEAR - user[Y_INDEX];
        
            if ((user[M_INDEX] === 1 && user[D_INDEX] >= 20) || (user[M_INDEX] === 2 && user[D_INDEX] <= 18)){
                user[ZODIAC_NAME_INDEX] = ', Aquarius ';
                user[ZODIAC_SIGN_INDEX ] = `♒`;
            }else if((user[M_INDEX] === 2 && user[D_INDEX] >= 19) || (user[M_INDEX] === 3 && user[D_INDEX] <= 20)) {
                user[ZODIAC_NAME_INDEX] = ', Pisces';
                user[ZODIAC_SIGN_INDEX ] = `♓`;
            }else if((user[M_INDEX] === 3 && user[D_INDEX] >= 21) || (user[M_INDEX] === 4 && user[D_INDEX] <= 19)) {
                user[ZODIAC_NAME_INDEX] = ', Aries ';
                user[ZODIAC_SIGN_INDEX ] = `♈`;
            }else if((user[M_INDEX] === 4 && user[D_INDEX] >= 20) || (user[M_INDEX] === 5 && user[D_INDEX] <= 20)) {
                user[ZODIAC_NAME_INDEX] = ', Taurus ';
                user[ZODIAC_SIGN_INDEX ] = `♉`;
            }else if((user[M_INDEX] === 5 && user[D_INDEX] >= 21) || (user[M_INDEX] === 6 && user[D_INDEX] <= 20)) {
                user[ZODIAC_NAME_INDEX] = ', Gemini ';
                user[ZODIAC_SIGN_INDEX ] = `♊`;
            }else if((user[M_INDEX] === 6 && user[D_INDEX] >= 21) || (user[M_INDEX] === 7 && user[D_INDEX] <= 22)) {
                user[ZODIAC_NAME_INDEX] = ', Cancer ';
                user[ZODIAC_SIGN_INDEX ] = `♋`;
            }else if((user[M_INDEX] === 7 && user[D_INDEX] >= 23) || (user[M_INDEX] === 8 && user[D_INDEX] <= 22)) {
                user[ZODIAC_NAME_INDEX] = ', Leo ';
                user[ZODIAC_SIGN_INDEX ] = `♌`;
            }else if((user[M_INDEX] === 8 && user[D_INDEX] >= 23) || (user[M_INDEX] === 9 && user[D_INDEX] <= 22)) {
                user[ZODIAC_NAME_INDEX] = ', Virgo ';
                user[ZODIAC_SIGN_INDEX ] = `♍`;
            }else if((user[M_INDEX] === 9 && user[D_INDEX] >= 23) || (user[M_INDEX] === 10 && user[D_INDEX] <= 22)) {
                user[ZODIAC_NAME_INDEX] = ', Libra ';
                user[ZODIAC_SIGN_INDEX ] = `♎`;
            }else if((user[M_INDEX] === 10 && user[D_INDEX] >= 23) || (user[M_INDEX] === 11 && user[D_INDEX] <= 21)) {
                user[ZODIAC_NAME_INDEX] = ', Scorpio ';
                user[ZODIAC_SIGN_INDEX ] = `♏`;
            }else if((user[M_INDEX] === 11 && user[D_INDEX] >= 22) || (user[M_INDEX] === 12 && user[D_INDEX] <= 21)) {
                user[ZODIAC_NAME_INDEX] = ', Sagittarius ';
                user[ZODIAC_SIGN_INDEX ] = `♐`;
            }else{
                user[ZODIAC_NAME_INDEX] = ', Capricorn ';
                user[ZODIAC_SIGN_INDEX ] = `♑`;
            }
            // document.write(`User [${userIndex}]: ${user[F_NAME_INDEX]} ${user[L_NAME_INDEX]}, ${user[AGE_INDEX]} years old${user[Y_TYPE_INDEX]}${user[ZODIAC_NAME_INDEX]} ${user[ZODIAC_SIGN_INDEX ]};`);
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
                    console.log(`User [${userIndex}]: ${user[F_NAME_INDEX]} ${user[L_NAME_INDEX]}, ${user[AGE_INDEX]} years old${user[Y_TYPE_INDEX]}${user[ZODIAC_NAME_INDEX]} ${user[ZODIAC_SIGN_INDEX ]};`);
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
            console.log(`User: ${deletedUserInfo[F_NAME_INDEX]} ${deletedUserInfo[L_NAME_INDEX]} deleted successfully.`);
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
				console.log(`User [${userIndex}]: ${user[F_NAME_INDEX]} ${user[L_NAME_INDEX]}, ${user[AGE_INDEX]} years old${user[Y_TYPE_INDEX]}${user[ZODIAC_NAME_INDEX]} ${user[ZODIAC_SIGN_INDEX ]};`);
                userIndex += 1
            }

			break;
		}
	
		default:
			break;
	}

} while(confirm('Do you want select another operation?'))

console.log(`Buy, Buy! See you later!.`);

// let index = +prompt(`Enter index of user you want delete`);

// console.log(index);
// console.log(typeof index);
// console.log(index.length);
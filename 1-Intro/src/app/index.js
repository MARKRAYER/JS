var currentYear = 2022;
var firstName = prompt('Enter your first name');
var lastName = prompt('Enter your last name');
var birth = Number(prompt('Enter your birth'));
var age = currentYear - birth;

console.log(age);

document.write('Bio: ' + firstName + ' ' + lastName + ', ' + age + ' years old');
const RETIREMENT_AGE_MALE = 65;
const RETIREMENT_AGE_FEMALE = 60;

var firstName = getValidInput("Пожалуйста, введите ваше имя:");
var lastName = getValidInput("Пожалуйста, введите вашу фамилию:");
var middleName = getValidInput("Пожалуйста, введите ваше отчество:");
var ageInYears = getValidAge("Пожалуйста, введите ваш возраст:");
var isMale = confirm("Ваш пол - мужской?");

printForm(firstName, lastName, middleName, ageInYears, isMale);

function getValidInput(message) {
    var value = "";

    while (isBlank(value)) {
        value = prompt(message, value);
    }

    return value.trim();
}

function getValidAge(message) {
    var age = 0;

    while (!checkAge(age)) {
        age = prompt(message, age);
    }

    return Number(age);
}

function isBlank(str) {
    return !str || typeof str !== "string" || str.trim().length === 0;
}

function checkAge(age) {
    age = Number(age);
    return Number.isInteger(age) && age > 0
}

function calculateAgeInDays(ageInYears) {
    var leapYearCount = Math.floor(ageInYears / 4);
    return (ageInYears * 365) + leapYearCount;
}

function isOnRetirement(isMale, ageInYears) {
    var retirementAge = isMale ? RETIREMENT_AGE_MALE : RETIREMENT_AGE_FEMALE;
    return ageInYears >= retirementAge;
}

function printForm(firstName, lastName, middleName, ageInYears, isMale) {
    var fullName = `${String(lastName)} ${String(firstName)} ${String(middleName)}`;
    var ageInDays = calculateAgeInDays(ageInYears);
    var ageInFiveYears = Number(ageInYears) + 5;
    var onRetirement = isOnRetirement(isMale, ageInYears);

    var form = `
        Ваше ФИО: ${fullName}
        Ваш возраст в годах: ${ageInYears}
        Ваш возраст в днях: ${ageInDays}
        Через 5 лет вам будет: ${ageInFiveYears}
        Ваш пол: ${isMale ? 'мужской' : 'женский'}
        Вы на пенсии: ${onRetirement ? 'да' : 'нет'}
    `
    alert(form);
}
let date = new Date();
let dateStop = new Date('31 december 2021').getTime();
let dateNow = new Date().getTime();
let timeRemaining = Math.floor((dateStop - dateNow) / 1000 / 3600 / 24);
let hours = Math.floor(dateNow / 3600);
let time = date.toTimeString();
let getWeekDay = date.getDay();
let wekkDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

if (hours < 12) {
    console.log('доброе утро');
} else if (hours >= 12 && hours < 17) {
    console.log('добрый день');
} else if (hours >= 17 && hours < 22) {
    console.log('добрый вечер');
} else if (hours >= 22) {
    console.log('доброй ночи');
}
console.log('Сегодня: ' + wekkDays[getWeekDay]);
console.log('Текущее время: ' + time);
console.log('До нового года осталось: ' + timeRemaining);
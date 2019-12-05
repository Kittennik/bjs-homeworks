function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}


function checkBirthday(birthday) {
    const now = Date.now();
    birthday = +new Date(birthday);
    const diff = now - birthday;
    const year = 1000 * 60 * 60 * 24 * 365;
    const yearUp = 1000 * 60 * 60 * 24 * 366;
    const yearAverage = (year + year + year + yearUp) / 4;
    const age = diff / yearAverage;
    return (age > 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal == "undefined") {
        animal = null;
        return animal;
    } 
    else {
        const sound = animal.sound;
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += +marks[i];
    }
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}
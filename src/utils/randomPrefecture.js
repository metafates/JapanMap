// JP-01, ..., JP-47
const minPrefecture = 1;
const maxPrefecture = 47;

function getRandomIntInRange(min, max) {
    const min_ = Math.ceil(min);
    const max_ = Math.floor(max);
    return Math.floor(Math.random() * (max_ - min_ + 1)) + min_;
}

function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

function randomPrefecture() {
    const number = addLeadingZero(
        getRandomIntInRange(minPrefecture, maxPrefecture)
    );
    return `JP-${number}`;
}

export default randomPrefecture;

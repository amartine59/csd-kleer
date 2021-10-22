const badPosCue = "!";
const noExistCue = "-";
const goodPosCue = "*";

export default class Codebreaker {
    constructor(randomNumber) {
        this.RandomNumber = Number.parseInt(randomNumber)  || Math.floor(Math.random() * 10); // Random number between 0 and 9
        this.CurrentAttempt = 0;
    }

    compare(value) {
        return value == this.RandomNumber
    }

    cue(value) {
        return "!"
    }
};
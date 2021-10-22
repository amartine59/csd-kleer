export default class Codebreaker {
    constructor(randomNumber) {
        this.RandomNumber = Number.parseInt(randomNumber)  || Math.floor(Math.random() * 10); // Random number between 0 and 9
    }

    compare(value) {
        return value == this.RandomNumber
    }
};
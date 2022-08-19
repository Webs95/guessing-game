class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.res = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.res;
        this.guess();
    }

    greater() {
        this.min = this.res;
        this.guess();
    }
}

module.exports = GuessingGame;
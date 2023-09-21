class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.num = Math.floor((this.left + this.right + 1) / 2);
        return this.num;
    }

    lower() {
        this.right = this.num;
    }
    
    greater() {
        this.left = this.num;
    }
}

module.exports = GuessingGame;

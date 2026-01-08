class PomodoroTimer {
    constructor() {
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.startButton = document.getElementById('start');
        this.pauseButton = document.getElementById('pause');
        this.resetButton = document.getElementById('reset');

        this.timerInterval = null;
        this.timeLeft = 25 * 60; 
        this.isRunning = false;

        this.init();
    }

    init() {
        this.startButton.addEventListener('click', () => this.start());
        this.pauseButton.addEventListener('click', () => this.pause());
        this.resetButton.addEventListener('click', () => this.reset());
        this.updateDisplay();
    }

    updateDisplay() {
        const mins = Math.floor(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        this.minutesElement.textContent = mins.toString().padStart(2, '0');
        this.secondsElement.textContent = secs.toString().padStart(2, '0');
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            if (this.timeLeft <= 0) this.complete();
        }, 1000);
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
    }

    reset() {
        this.pause();
        this.timeLeft = 25 * 60;
        this.updateDisplay();
    }

    setMode(mode) {
        this.timeLeft = mode === 'work' ? 25 * 60 : 5 * 60;
        this.reset();
    }

    complete() {
        this.pause();
        alert("Time is up! Take a break.");
    }
}

const timer = new PomodoroTimer();
function updateClock() {
    const now = new Date();

    // 1. Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 2. Format numbers to always be two digits (e.g., 05 instead of 5)
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // 3. Display the time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // 4. Update the Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);

    // 5. High-Level Touch: Change background color based on seconds
    // We use HSL because rotating the "Hue" (0-360) is easier than picking RGB colors
    const hue = seconds * 6; // 60 seconds * 6 = 360 degrees of color
    document.body.style.background = `hsl(${hue}, 50%, 10%)`;
}

// Run the clock every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);

// Run immediately so there is no 1-second delay on load
updateClock();
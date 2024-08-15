document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('thank-you-container').classList.remove('hidden');
    }, 2000); // Simulating a 3-second load time
});

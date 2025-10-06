document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    const btn = document.getElementById('actionBtn');
    if (btn) btn.addEventListener('click', function () {
        alert('Hello — this button is wired to script.js');
    });


    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get('name') || 'Friend';
        alert(`Thanks, ${name}! This demo doesn't send messages — connect a backend to submit.`);
        form.reset();
    });
});
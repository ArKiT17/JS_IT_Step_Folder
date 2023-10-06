const form = document.loginForm;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const rpassword = document.getElementById('rpassword').value;

    if (password !== rpassword) {
        alert("Паролі не співпадають")
        return
    }

    alert(`На ${email} надіслано лист із підтвердженням`)
    form.reset()
});
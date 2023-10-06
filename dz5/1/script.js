const form = document.loginForm;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    let message = `Привіт, ${login}!\n`;
    message += rememberMe ? 'Я тебе запам’ятав.' : 'Я тебе не запам’ятав.';
    alert(message);
    form.reset()
});
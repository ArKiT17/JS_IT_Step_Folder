const form = document.loginForm;
const countriesSelect = form.countries;
const citiesSelect = form.cities;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (countriesSelect.options.selectedIndex === 0)
        alert('Виберіть країну')

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const birthday = document.getElementById('birthday').value;
    let gender;
    if (document.getElementById('maleGender').checked)
        gender = 'male';
    else
        gender = 'female';
    const country = countriesSelect.options[countriesSelect.options.selectedIndex].innerHTML;
    const city = citiesSelect.options[citiesSelect.options.selectedIndex].innerHTML;

    const skillsId = ['html', 'css', 'js', 'php', 'cpp', 'java', 'csharp'];
    let skills = '';
    for (let skill of skillsId)
        if (document.getElementById(skill).checked)
            skills += `${document.getElementById(skill).value}, `;

    const body = document.body;
    body.style.height = 'auto';
    body.style.margin = '50px 0';
    const table = document.getElementById('result');
    table.hidden = null;

    // поля таблиці
    document.getElementById('tableFirstname').innerHTML = firstname;
    document.getElementById('tableLastname').innerHTML = lastname;
    document.getElementById('tableBirthday').innerHTML = birthday;
    document.getElementById('tableGender').innerHTML = gender;
    document.getElementById('tableCountry').innerHTML = country;
    document.getElementById('tableCity').innerHTML = city;
    document.getElementById('tableSkills').innerHTML = skills;
});

countriesSelect.addEventListener('change', function (event) {
    switch (countriesSelect.options[countriesSelect.options.selectedIndex].value) {
        case 'UA':
            let citiesUA = [
                new Option('Kropyvnytskyi', 'Krop'),
                new Option('Kyiv', 'Kyiv'),
                new Option('Khmelnytskyi', 'Khm')
            ]
            citiesSelect.innerHTML = '';
            for (let city of citiesUA)
                citiesSelect.options.add(city)
            break;
        case 'PL':
            let citiesPL = [
                new Option('Krakow', 'Krk'),
                new Option('Warsaw', 'Wrs'),
                new Option('Lublin', 'Lbn')
            ]
            citiesSelect.innerHTML = '';
            for (let city of citiesPL)
                citiesSelect.options.add(city)
            break;
        case 'null':
            citiesSelect.innerHTML = '';
            break;
    }
});
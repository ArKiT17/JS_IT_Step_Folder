const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const login = document.getElementById("login")
const password = document.getElementById("password")
const retype = document.getElementById("retype")
const email = document.getElementById("email")

// починається з великої літери
const nameTemplate = /^[A-Z][a-z]*$/

// тільки великі букви, малі букви, цифри і "_"
const loginTemplate = /^[A-Za-z0-9_]+$/

// має мінімум одну велику літеру, малу літеру, цифру, знак. довжина не меньша 8
const passwordTemplate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

const emailTemplate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validateForm(event) {
    if (!nameTemplate.test(firstName.value)) {
        firstName.classList.add('error')
        event.preventDefault()
    }
    else
        firstName.classList.remove('error')

    if (!nameTemplate.test(lastName.value)) {
        lastName.classList.add('error')
        event.preventDefault()
    }
    else
        lastName.classList.remove('error')

    if (!loginTemplate.test(login.value)) {
        login.classList.add('error')
        event.preventDefault()
    }
    else
        login.classList.remove('error')

    if (!passwordTemplate.test(password.value)) {
        password.classList.add('error')
        event.preventDefault()
    }
    else
        password.classList.remove('error')

    if (retype.value !== password.value) {
        retype.classList.add('error')
        event.preventDefault()
    }
    else
        retype.classList.remove('error')

    if (!emailTemplate.test(email.value)) {
        email.classList.add('error')
        event.preventDefault()
    }
    else
        email.classList.remove('error')

    alert("Well done!")
}
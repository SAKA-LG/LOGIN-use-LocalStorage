console.log('JavaScript Is Ready')

const section = document.querySelector('section#NavBar')
const profileName = document.querySelector('.profileName')

const localGet = () => ({
    p: localStorage.getItem('password'),
    e: localStorage.getItem('email'),
})

let password = localGet().p
let email = localGet().e

profileName.replaceWith(password)
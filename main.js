const sectionlogin = document.querySelector('section#login')
const email = sectionlogin.querySelector('.email')
const password = sectionlogin.querySelector('.password')

const createButton = document.createElement('button')
const textButton = document.createTextNode('logOut')
createButton.appendChild(textButton)
const button = sectionlogin.querySelector('#button')

button.addEventListener('click',()=> {
    localStorage.setItem('email', email.value)
    localStorage.setItem('password',password.value)
    setTimeout(() =>{
        alert('Success settLocal Storage')
    },2000)
    setTimeout(() => {
        document.querySelector('#title').textContent = ''
        sectionlogin.querySelectorAll('input').forEach(input => input.remove())
        sectionlogin.querySelectorAll('p').forEach(paragraf => paragraf.remove())
        sectionlogin.querySelector('#button').remove()
    },4000);
    setTimeout(() =>{
        sectionlogin.appendChild(createButton)
        createButton.classList.add('logOut','animation')
        window.location.href = 'login-index.html'
    },5000)
})










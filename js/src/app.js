import { authEmailAndPasswjrd, getAuthFormHTML } from './auth'
import { Question } from './question'
import './styles.css'
import { createModal, isValid } from './utils'
import { getAuthFormHTML } from './auth'

const form = document.getElementById('form')
const btn =  document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submit = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandle)
btn.addEventListener('click', openModal)
input.addEventListener('input', () => {
    submit.disabled = isValid(input.value)
})

function submitFormHandle(event) {
    event.preventDefaul()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submit.disabled = true
        // async req to server
        Question.create(question).then( () => {
            input.value = ''
            input.className = ''
            submit.disabled = false
        })
    }
}


function openModal() {
    createModal('autorizacion', getAuthFormHTML())
    document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandle, {once: true})
}

function authFormHandle(event) {
    event.preventDefaul()
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authEmailAndPasswjrd(email, password)
    .then(Question.fetch)
    .then(renderModalAfterAuth)
    }

    function renderModalAfterAuth() {
        
    }
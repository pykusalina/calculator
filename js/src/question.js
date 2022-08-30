export class Question {
    static create(question) {
  return fetch('https://javascript-a5799.firebaseio.com/question.json', {
    method: 'POST',
    body: JSON.stringify(question),
    headers: {
        'Content-Type': 'application/json'
    }
})
   .then(response => response.json())
   .then(response => {
       question.id = response.name
       return question
   })
   .then(addLocalStorage)
   .then(Question.renderList)
    }

static fetch(token) {
    if (!token) {
        return Promise.resolve('<p class="error"> no token</p>')
    }
 return this.fetch(`https://javascript-a5799.firebaseio.com/question.json?auth=${token}`)
.then(response => response.json())
.then(response => {
if (response.error) {
    return `<p class="error">${response.error}</p>`
}

return response ? Object.keys(response).map(key => ({
    ...response[key],
    id: key
})) : []
})
}

    static renderList() {
   const question = getQuestionFromLocalStorage

   const html = question.length
   ? question.map(toCard).join(' ')
   : `<div class="mui--text-headline">MUI Acquires New Features</div>`

   const list = document.getElementById('list')

   list.innerHTML = html
    }
}
function addLocalStorage(question) {
    const all = getQuestionFromLocalStorage()
    all.push(question)
    localStorage.setItem('question', JSON.stringify(question))
}

function getQuestionFromLocalStorage() {
    return JSON.parse(localStorage.getItem('quesdtion') || '[]')
}

function toCard(question) {
return 
    `<div class="mui--text-headline">
    ${new Date(question.date).toLocaleDateString()}
    ${new Date(question.date).toLocaleTimeString()}
    </div>
            <div>${question.text}</div>`

}
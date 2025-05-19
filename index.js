import { renderComment } from './modules/renderComments.js'
import { validationFunction } from './modules/validationForm.js'
import { updateComments } from './modules/comments.js'
import { nameEl } from './modules/renderComments.js'
import { textEl } from './modules/renderComments.js'

fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateComments(data.comments)
        renderComment()
    })

const buttonEl = document.querySelector('.add-form-button')

buttonEl.addEventListener('click', function (e) {
    validationFunction(nameEl, textEl)
})

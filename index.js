import { renderComment } from './modules/renderComments.js'
import { comments } from './modules/comments.js'
import { validationFunction } from './modules/validationForm.js'
import { nameEl } from './modules/renderComments.js'
import { textEl } from './modules/renderComments.js'

renderComment(comments)

const buttonEl = document.querySelector('.add-form-button')

buttonEl.addEventListener('click', function (e) {
    validationFunction(nameEl, textEl)
})

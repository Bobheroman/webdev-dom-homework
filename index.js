import { validationFunction } from './modules/validationForm.js'
import { nameEl } from './modules/renderComments.js'
import { textEl } from './modules/renderComments.js'
import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'

fetchAndRenderComments()
    .then(() => {
        document.querySelector('.loader-text').remove()
    })

export const formEl = document.querySelector('.add-form')
export const buttonEl = document.querySelector('.add-form-button')

buttonEl.addEventListener('click', function (e) {
    validationFunction(nameEl, textEl)
})

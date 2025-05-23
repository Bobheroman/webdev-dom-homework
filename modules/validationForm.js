import { nameEl } from './renderComments.js'
import { textEl } from './renderComments.js'
import { addComment } from './addNewComent.js'

// Валидация форм
export function validationFunction(name, text) {
    if (name.value.replaceAll(' ', '') == '') {
        name.classList.add('error')
        name.style.setProperty('--c', 'black')
        return
    } else if (text.value.replaceAll(' ', '') == '') {
        text.classList.add('error')
        text.style.setProperty('--c', 'black')
        return
    }
    addComment(nameEl, textEl)
}

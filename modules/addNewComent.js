import { comments } from './comments.js'
import { nameEl } from './renderComments.js'
import { textEl } from './renderComments.js'
import { renderComment } from './renderComments.js'

// Добавление нового коментария в список и рендер в HTML
export function addComment(name, text) {
    let currentDate = new Date().toLocaleString([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    })
    let currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })
    const dateEl = `${currentDate} ${currentTime}`

    comments.push({
        name: name.value,
        text: text.value,
        date: dateEl,
        likes: 0,
        activeLike: false,
    })
    nameEl.classList.remove('error')
    textEl.classList.remove('error')
    renderComment(comments)
}

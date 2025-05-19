import { updateComments } from './comments.js'
import { nameEl } from './renderComments.js'
import { textEl } from './renderComments.js'
import { renderComment } from './renderComments.js'

// Добавление нового коментария в список и рендер в HTML
export function addComment(name, text) {
    let currentDate = new Date().toISOString()
    const newComment = {
        date: currentDate,
        likes: 0,
        isLiked: false,
        text: text.value,
        name: name.value,
    }

    fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
    fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComment()
        })

    nameEl.classList.remove('error')
    textEl.classList.remove('error')
}

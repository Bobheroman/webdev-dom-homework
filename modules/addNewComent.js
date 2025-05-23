import { formEl } from '../index.js'
import { loaderCommentsEl } from '../index.js'
import { postComments } from './post.js'

// Добавление нового коментария в список и рендер в HTML
export function addComment(name, text) {
    let currentDate = new Date().toISOString()
    const newComment = {
        date: currentDate,
        likes: 0,
        isLiked: false,
        text: text.value,
        name: name.value,
        forceError: true,
    }
    formEl.classList.add('loader')
    loaderCommentsEl.classList.add('loader-comments')
    loaderCommentsEl.textContent = 'Комментарий добавляется...'
    const comentsEl = document.querySelector('.comments')
    comentsEl.append(loaderCommentsEl)

    postComments(newComment)
}

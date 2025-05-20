import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { nameEl } from './renderComments.js'
import { textEl } from './renderComments.js'
import { formEl } from '../index.js'

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
    const loaderCommentsEl = document.createElement('div')
    loaderCommentsEl.classList.add('loader-comments')
    loaderCommentsEl.textContent = 'Комментарий добавляется...'
    const comentsEl = document.querySelector('.comments')
    comentsEl.append(loaderCommentsEl)

    fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then((response) => {
            const responseStatus = response.status
            if (responseStatus === 500) {
                throw new Error('Сервер сломался, попробуй позже')
            }
            if (responseStatus === 400) {
                if (nameEl.value.length < 3) {
                    name.classList.add('error')
                } else {
                    nameEl.classList.remove('error')
                }

                if (textEl.value.length < 3) {
                    text.classList.add('error')
                } else {
                    textEl.classList.remove('error')
                }

                throw new Error(
                    'Имя и комментарий должны быть не короче 3х символов',
                )
            }
            return fetchAndRenderComments()
        })
        .then(() => {
            nameEl.classList.remove('error')
            textEl.classList.remove('error')
        })
        .catch((error) => {
            if (error.message === 'Сервер сломался, попробуй позже') {
                addComment(name, text)
            } else {
                alert(error.message)
            }
        })
        .finally(() => {
            formEl.classList.remove('loader')
            loaderCommentsEl.remove()
        })
}

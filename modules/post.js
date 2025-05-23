import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { nameEl } from './renderComments.js'
import { textEl } from './renderComments.js'
import { formEl } from '../index.js'
import { loaderCommentsEl } from '../index.js'

export const postComments = (object) => {
    return fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments', {
        method: 'POST',
        body: JSON.stringify(object),
    })
        .then((response) => {
            const responseStatus = response.status
            if (responseStatus === 500) {
                throw new Error('Сервер сломался, попробуй позже')
            }
            if (responseStatus === 400) {
                if (nameEl.value.length < 3) {
                    nameEl.classList.add('error')
                } else {
                    nameEl.classList.remove('error')
                }

                if (textEl.value.length < 3) {
                    textEl.classList.add('error')
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
            alert(error.message)
        })
        .finally(() => {
            formEl.classList.remove('loader')
            loaderCommentsEl.remove()
        })
}

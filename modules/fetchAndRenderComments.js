import { renderComment } from './renderComments.js'
import { updateComments } from './comments.js'

export const fetchAndRenderComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments')
        .then((response) => {
            const responseStatus = response.status
            if (responseStatus === 500) {
                throw new Error('Сервер сломался, попробуй позже')
            }
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComment()
        })
        .catch((error) => {
            alert(error.message)
        })
}

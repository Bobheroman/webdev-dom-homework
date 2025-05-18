import { renderComment } from './renderComments.js'
import { updateComments } from './comments.js'

export const fetchAndRenderComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/:Bobheroman/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComment()
        })
}
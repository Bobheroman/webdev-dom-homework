import { comments } from './comments.js'
import { renderComment } from './renderComments.js'
import { textEl } from './renderComments.js'

//Функция лайков (добавление-убавление: количиства лайков, стиля "активного лайка")
export const initLikeComments = () => {
    const likeButtonEls = document.querySelectorAll('.like-button')

    for (const likeButtonEl of likeButtonEls) {
        likeButtonEl.addEventListener('click', (event) => {
            event.stopPropagation()
            const indexNumber = likeButtonEl.dataset.index

            if (comments[indexNumber].isLiked) {
                comments[indexNumber].likes = comments[indexNumber].likes - 1
                comments[indexNumber].isLiked = false
                renderComment()
            } else {
                comments[indexNumber].likes = comments[indexNumber].likes + 1
                comments[indexNumber].isLiked = true
                renderComment()
            }
        })
    }
}

export const answerComment = () => {
    const answerCommentEls = document.querySelectorAll('.comment')

    for (const answerCommentEl of answerCommentEls) {
        answerCommentEl.addEventListener('click', () => {
            const indexNumber = answerCommentEl.dataset.index
            textEl.value = `"${comments[indexNumber].author.name}" '${comments[indexNumber].text}' Ответ:`
        })
    }
}

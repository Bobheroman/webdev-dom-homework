import { comments } from './comments.js'
import { renderComment } from './renderComments.js'
import { textEl } from './renderComments.js'
import { delay } from './delay.js'

//Функция лайков (добавление-убавление: количиства лайков, стиля "активного лайка")
export const initLikeComments = () => {
    const likeButtonEls = document.querySelectorAll('.like-button');
    
    for (const likeButtonEl of likeButtonEls) {
        likeButtonEl.addEventListener('click', async (event) => {
            event.stopPropagation();
            const indexNumber = parseInt(likeButtonEl.dataset.index);
            
            try {
                likeButtonEl.classList.add('-loading-like');
                
                await delay(2000);
                
                if (comments[indexNumber].isLiked) {
                    comments[indexNumber].likes--;
                    comments[indexNumber].isLiked = false;
                } else {
                    comments[indexNumber].likes++;
                    comments[indexNumber].isLiked = true;
                }
                
                renderComment(indexNumber);
            } finally {
            }
        });
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

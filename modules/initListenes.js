import {comments} from "./data.js";
import { renderComment } from "./renderComments.js";
//Функция лайков (добавление-убавление: количиства лайков, стиля "активного лайка")
export const initLikeComments = () => {
    const likeButtonEls = document.querySelectorAll('.like-button');

    for (const likeButtonEl of likeButtonEls) {
        likeButtonEl.addEventListener("click", (event) => {
            event.stopPropagation();
            const indexNumber = likeButtonEl.dataset.index;

            if (comments[indexNumber].activeLike) {
                comments[indexNumber].likes = comments[indexNumber].likes - 1;
                comments[indexNumber].activeLike = false;
                renderComment(comments);
            } else {
                comments[indexNumber].likes = comments[indexNumber].likes + 1;
                comments[indexNumber].activeLike = true;
                renderComment(comments);
            };
        })
    }
};

export  const answerComment = () => {
    const answerCommentEls = document.querySelectorAll('.comment');

    for (const answerCommentEl of answerCommentEls) {
        answerCommentEl.addEventListener("click", () => {
            const indexNumber = answerCommentEl.dataset.index;
            console.log(indexNumber);
            textEl.value = `"${comments[indexNumber].name}" '${comments[indexNumber].text}' Ответ:`;
            
        })
    }
};
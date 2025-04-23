import { comments } from './comments.js'
import { initLikeComments, answerComment } from './initListenes.js'
export const nameEl = document.querySelector('.add-form-name')
export const textEl = document.querySelector('.add-form-text')

// Рендер коментариев из списка
export function renderComment(comments) {
    const comentsEl = document.querySelector('.comments')

    comentsEl.innerHTML = comments
        .map(
            (comment, index) =>
                `<li data-index='${index}' class="comment">
        <div class="comment-header">
          <div>
            ${comment.name.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}
            </div>
          <div>
            ${comment.date}
          </div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index='${index}' class="like-button ${comment.activeLike ? '-active-like' : ''}"></button>
          </div>
        </div>
      </li>`,
        )
        .join('')
    initLikeComments()
    answerComment()

    nameEl.value = ''
    textEl.value = ''
}

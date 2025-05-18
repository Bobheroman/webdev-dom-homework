import { comments } from './comments.js'
import { initLikeComments, answerComment } from './initListenes.js'
export const nameEl = document.querySelector('.add-form-name')
export const textEl = document.querySelector('.add-form-text')

// Рендер коментариев из списка

export function renderComment() {
    const comentsEl = document.querySelector('.comments')

    comentsEl.innerHTML = comments

        .map(
            (comment, index) =>
                `<li data-index='${index}' class="comment">
        <div class="comment-header">
          <div>
            ${comment.author.name.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}
            </div>
          <div>
            ${new Date(comment.date).toLocaleString('ru', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            })}
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
            <button data-index='${index}' class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
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

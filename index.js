import {renderComment} from "./modules/renderComments.js";
import {comments} from './data.js';


renderComment(comments);

const buttonEl = document.querySelector('.add-form-button');

// Добавление нового коментария в список и рендер в HTML + Валидация форм
buttonEl.addEventListener('click', function (e) {
    const nameEl = document.querySelector('.add-form-name');
    const textEl = document.querySelector('.add-form-text');
    if (nameEl.value == "") {
        nameEl.classList.add('error');
        nameEl.style.setProperty("--c", "black");
        return;

    } else if (textEl.value == "") {
        textEl.classList.add('error');
        textEl.style.setProperty("--c", "black");
        return;
    }
    let currentDate = new Date().toLocaleString([], {
        day: '2-digit',
        month: "2-digit",
        year: "2-digit"
    });
    let currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    const dateEl = `${currentDate} ${currentTime}`;

    comments.push({ name: nameEl.value, text: textEl.value, date: dateEl, likes: 0, activeLike: false });
    renderComment(comments);
});
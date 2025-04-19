const comentsEl = document.querySelector('.comments');
    const nameEl = document.querySelector('.add-form-name');
    const textEl = document.querySelector('.add-form-text');
    const buttonEl = document.querySelector('.add-form-button');


    const comments = [
        { name: "Глеб Фокин", text: "Это будет первый комментарий на этой странице", date: "12.02.22 12:18", likes: 3, activeLike: false },
        { name: "Варвара Н", text: "Мне нравится как оформлена эта страница! ❤", date: "13.02.22 19:22", likes: 75, activeLike: true },
    ];

    //Функция лайков (добавление-убавление: количиства лайков, стиля "активного лайка")
    const initLikeComments = () => {
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

    const answerComment = () => {
        const answerCommentEls = document.querySelectorAll('.comment');

        for (const answerCommentEl of answerCommentEls) {
            answerCommentEl.addEventListener("click", () => {
                const indexNumber = answerCommentEl.dataset.index;
                console.log(indexNumber);
                textEl.value = `"${comments[indexNumber].name}" '${comments[indexNumber].text}' Ответ:`;
                
            })
        }
    };

    // Рендер коментариев из списка
    function renderComment(comments) {

        comentsEl.innerHTML = comments.map((comment, index) =>
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
          </li>`
        ).join("");
        initLikeComments();
        answerComment();

        nameEl.value = '';
        textEl.value = '';
    };
    renderComment(comments);
    

    // Добавление нового коментария в список и рендер в HTML + Валидация форм
    buttonEl.addEventListener('click', function (e) {
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
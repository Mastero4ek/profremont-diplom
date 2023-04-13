import { getData } from "./getData"
import { renderComments } from "./renderComments"
import { showSpinner, hideSpinner } from "./spinner"

export const renderData = () => {
    const reviewsWrapper = document.querySelector('.comments-container')
    showSpinner(reviewsWrapper)

    const render = (data) => {
        let renderTimer = setInterval(() => {
            const item = data.splice(data[0], 1)[0];
            data.splice(data.length, 1, item);

            updateRender()
        }, 20000)

        function updateRender() {
            renderComments(reviewsWrapper)

            const commentItems = reviewsWrapper.querySelectorAll('.comment-item'),
                userAvatar = reviewsWrapper.querySelectorAll('.review-user'),
                userName = reviewsWrapper.querySelectorAll('.text-normal'),
                userComment = reviewsWrapper.querySelectorAll('.text-normal ~ p'),
                defaultAvatar = './images/users/avatar.png';

            commentItems.forEach((item, index) => {
                userAvatar[index].insertAdjacentHTML('beforeend',
                    `<img src="${data[index].image == '' ? defaultAvatar : data[index].image}" alt="" class="img-responsive avatar">`)

                userName[index].innerHTML = data[index].author
                userComment[index].innerHTML = data[index].comment
            })
        }

        updateRender()
    }

    getData('./db/comments.json').then(data => {
        hideSpinner()
        render(data.comments)
    })
}
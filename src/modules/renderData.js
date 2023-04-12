import { getData } from "./getData"

export const renderData = () => {
    const reviewsWrapper = document.querySelector('.comments-container'),
        commentItems = reviewsWrapper.querySelectorAll('.comment-item'),
        userAvatar = reviewsWrapper.querySelectorAll('.review-user'),
        userName = reviewsWrapper.querySelectorAll('.text-normal'),
        userComment = reviewsWrapper.querySelectorAll('.text-normal ~ p'),
        defaultAvatar = './images/users/avatar.png';

    const render = (data) => {
        commentItems.forEach((item, index) => {
            userAvatar[index].insertAdjacentHTML('beforeend',
                `<img src="${data[index].image == '' ? defaultAvatar : data[index].image}" alt="" class="img-responsive avatar">`)

            userName[index].innerHTML = data[index].author
            userComment[index].innerHTML = data[index].comment
        })
    }

    getData('./db/comments.json').then(data => render(data.comments))
}
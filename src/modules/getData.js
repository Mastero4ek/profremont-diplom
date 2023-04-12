import { showSpinner, hideSpinner } from "./spinner"
import { renderComments } from "./renderComments"

export async function getData(url) {
    const reviewsWrapper = document.querySelector('.comments-container')
    showSpinner(reviewsWrapper)

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            hideSpinner()
            renderComments(reviewsWrapper)
        }

        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
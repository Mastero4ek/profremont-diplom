export const timer = (deadline, timerBlock) => {
    const timerWrapper = document.getElementById(timerBlock),
        timerDay = timerWrapper.querySelector('.count_1 > span'),
        timerHours = timerWrapper.querySelector('.count_2 > span'),
        timerMinutes = timerWrapper.querySelector('.count_3 > span'),
        timerSeconds = timerWrapper.querySelector('.count_4 > span'),
        text = timerWrapper.querySelector('.order-subheading'),
        block = timerWrapper.querySelector('.order-inner');

    const editTime = num => (num < 10) ? `0${num}` : num

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            days = Math.floor(timeRemaining / 60 / 60 / 24),
            hours = Math.floor((timeRemaining / 60 / 60) % 24),
            minuts = Math.floor((timeRemaining / 60) % 60),
            seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minuts, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDay.textContent = editTime(getTime.days)
        timerHours.textContent = editTime(getTime.hours)
        timerMinutes.textContent = editTime(getTime.minuts)
        timerSeconds.textContent = editTime(getTime.seconds)
    }

    const startPromotionText = () => {
        block.style.pointerEvents = 'default'
        text.innerHTML = ''
        text.insertAdjacentHTML('beforeend',
            `и <span class="text-normal">получите скидку 20%</span> <br />на
            установку окон`
        )
    }

    const endPromotionText = () => {
        block.style.pointerEvents = 'none'
        text.innerHTML = ''
        text.insertAdjacentHTML('beforeend',
            `Акция завершена!`
        )
    }

    let getTime = getTimeRemaining()

    if (getTime.timeRemaining <= 0) {
        endPromotionText()
    } else {
        startPromotionText()
        updateClock();
    }

    const startTimer = () => {
        let idTimer = setInterval(() => {
            let getTime = getTimeRemaining()

            if (getTime.timeRemaining > 0) {
                updateClock();

                if (getTime.timeRemaining <= 0) {
                    clearTimeout(idTimer);
                }

                if (timerSeconds.textContent == '00') endPromotionText()
            }
        }, 1000);
    }

    startTimer();
}
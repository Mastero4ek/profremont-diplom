export const sendForm = ({ formWrapper, someElem = [] }) => {
    const formWrapperId = document.getElementById(formWrapper),
        form = formWrapperId.querySelector('.form-horizontal'),
        formBtn = formWrapperId.querySelector('.feedback');

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const validate = () => {
        let success = true

        const userName = form.querySelector('[name="fio"]'),
            userPhone = form.querySelector('[name="phone"]');

        if (userName.value.length < 2) {
            userName.style.boxShadow = 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)'
            success = false
        }

        if (userPhone.value.length < 11) {
            userPhone.style.boxShadow = 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)'
            success = false
        }

        return success
    }

    const submitForm = () => {
        const formData = new FormData(form),
            formBody = {},
            formElements = form.querySelectorAll('input');

        formBtn.textContent = 'Отправляем...'

        formData.forEach((val, key) => {
            if (val != '') formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            switch (true) {
                case elem.type === 'block':
                    if (!element) return

                    formBody[elem.id] = element.value
                    if (formBody[elem.id] == '') delete formBody[elem.id]
                    break

                case elem.type === 'input':
                    formBody[elem.id] = element.value
                    break
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    console.log(formBody)
                    formBtn.textContent = 'Получить скидку!'
                    formElements.forEach(input => input.value = '')
                })
                .catch(error => {
                    formBtn.textContent = 'Ошибка запроса!'
                    setTimeout(() => formBtn.textContent = 'Получить скидку!', 3000)
                })
        } else {
            formBtn.textContent = 'Ошибка в данных!'
            setTimeout(() => formBtn.textContent = 'Получить скидку!', 3000)
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        submitForm()
    })
}
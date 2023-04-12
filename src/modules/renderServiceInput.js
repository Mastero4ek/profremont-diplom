export const renderServiceInput = (formId) => {
    const serviceBtn = document.querySelectorAll('.service-button > a'),
        form = document.getElementById(formId);

    if (!form) return

    serviceBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const subject = btn.getAttribute('data-subject'),
                input = form.querySelector('[name="subject"]')

            input.value = subject
        })
    })
}
export const renderServiceInput = (formId) => {
    const serviceBtn = document.querySelectorAll('.service-button > a');

    serviceBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const form = document.getElementById(formId);

            console.log(btn);
            if (!form) return

            const subject = btn.getAttribute('data-subject'),
                input = form.querySelector('[name="subject"]')

            input.value = subject
        })
    })
}
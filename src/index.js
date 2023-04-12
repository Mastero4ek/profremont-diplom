import { timer } from "./modules/timer"
import { modal } from "./modules/modal"
import { slider } from "./modules/slider"
import { serviceModal } from "./modules/sevrvice-modal"
import { scroll } from "./modules/scroll"
import { certificates } from "./modules/certificates"
import { calculator } from "./modules/calculator"
import { sendForm } from "./modules/sendForm"
import { validationForm } from "./modules/validationForm"
import { renderOverlay } from "./modules/helpers"
import { renderData } from "./modules/renderData"

timer('16 april 2023', 'order_1')
timer('16 april 2023', 'order_2')
modal()
slider('.benefits-inner', 300, '.benefits__arrow--right', '.benefits__arrow--left', 3, 20, { delay: 1500, disableOnInteraction: true, })
slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
serviceModal()
scroll()
calculator()
validationForm()
renderOverlay()
certificates()
renderData()

sendForm({
    formWrapper: 'order_1',
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ]
})

sendForm({
    formWrapper: 'order_2',
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ]
})

sendForm({
    formWrapper: 'order_3',
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ]
})

sendForm({
    formWrapper: 'order_4',
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ]
})
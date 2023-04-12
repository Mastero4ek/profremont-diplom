import { timer } from "./modules/timer"
import { renderServiceOkna } from "./modules/renderServiceOkna"
import { renderServiceBalkony } from "./modules/renderServiceBalkony"
import { renderServiceKuhni } from "./modules/renderServiceKuhni"
import { slider } from "./modules/slider"
import { modal } from "./modules/modal"
import { scroll } from "./modules/scroll"
import { certificates } from "./modules/certificates"
import { calculator } from "./modules/calculator"
import { sendForm } from "./modules/sendForm"
import { validationForm } from "./modules/validationForm"
import { renderOverlay } from "./modules/renderOverlay"
import { renderData } from "./modules/renderData"

timer('16 april 2023', 'order_1')
timer('16 april 2023', 'order_2')
renderServiceOkna()
renderServiceBalkony()
renderServiceKuhni()
modal()
slider('.benefits-inner', 300, '.benefits__arrow--right', '.benefits__arrow--left', 3, 20, { delay: 1500, disableOnInteraction: true, })
scroll()
calculator()
validationForm()
renderOverlay()
certificates()
renderData()
slider('.sertificate', 300, '.sertificate__arrow--right', '.sertificate__arrow--left', 1, 20)

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
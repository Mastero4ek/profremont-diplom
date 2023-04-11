import { timer } from "./modules/timer"
import { modal } from "./modules/modal"
import { slider } from "./modules/slider"
import { serviceModal } from "./modules/sevrvice-modal"
import { scroll } from "./modules/scroll"
import { certificates } from "./modules/certificates"
import { calculator } from "./modules/calculator"

timer('16 april 2023', 'order_1')
timer('16 april 2023', 'order_2')
modal()
slider('.benefits-inner', 300, '.benefits__arrow--right', '.benefits__arrow--left', 3, 20)
slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
serviceModal()
scroll()
certificates()
calculator()
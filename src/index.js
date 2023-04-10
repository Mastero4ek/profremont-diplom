import { modal } from "./modules/modal"
import { slider } from "./modules/slider"
import { serviceModal } from "./modules/sevrvice-modal"
import { scroll } from "./modules/scroll"
import { timer } from "./modules/timer"
import { certificates } from "./modules/certificates"

modal()
slider('.benefits-inner', '.benefits__arrow--right', '.benefits__arrow--left', 3, 20)
slider('.services-inner', '.services__arrow--right', '.services__arrow--left', 2, 0)
serviceModal()
scroll()
timer('16 april 2023', 'order_1')
timer('16 april 2023', 'order_2')
certificates()
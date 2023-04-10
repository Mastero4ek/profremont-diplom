import { modal } from "./modules/modal"
import { slider } from "./modules/slider"
import { serviceModal } from "./modules/sevrvice-modal"

modal()
slider('.benefits-inner', '.benefits__arrow--right', '.benefits__arrow--left', 3, 20)
slider('.services-inner', '.services__arrow--right', '.services__arrow--left', 2, 0)
serviceModal()
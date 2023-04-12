import { slider } from "./slider"
import { serviceModal } from "./sevrvice-modal"
import { renderServiceInput } from "./renderServiceInput"

export const renderServiceKuhni = () => {
    const servicesWrapper = document.getElementById('service-kuhni')
    if (!servicesWrapper) return

    servicesWrapper.innerHTML = ''

    if (window.innerWidth > 576) {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                <div class="swiper-slide">
                <div class="col-md-12 col-lg-6">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/9.jpg" alt="" />
                        <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                        class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/standart_kuhni/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/4.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/5.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/6.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/7.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/8.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/9.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Стандартные кухни</h3>
                        <p>Кухонные гарнитуры и отдельные модули.</p>
                        <p><strong>От 12 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Стандартные кухни"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="col-md-12 col-lg-6">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/10.jpg" alt="" />
                        <a href="images/services/original/standart_shkafy/1.png" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/standart_shkafy/2.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/3.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/4.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/5.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/6.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/7.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/8.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/9.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/10.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/11.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/12.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/13.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/14.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/15.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/16.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Стандартные шкафы-купе</h3>
                        <p>Корпусная и встраиваемая мебель по доступным ценам.</p>
                        <p><strong>От 7 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/standart_shkafy/1.png" data-fancybox-group="fancybox-thumb-2"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Стандартные шкафы-купе"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                <div class="swiper-slide">
                <div class="col-md-12 col-lg-6">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/11.jpg" alt="" />
                        <a href="images/services/original/elitnie_kuhni/1.jpg" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/elitnie_kuhni/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/4.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/5.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Элитные кухни</h3>
                        <p>Купить кухни итальянского качества.</p>
                        <p><strong>От 35 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/elitnie_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-3"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Элитные кухни"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать
                            замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="col-md-12 col-lg-6">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/12.jpg" alt="" />
                        <a href="images/services/original/elitnie_shkafy/1.jpg" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/elitnie_shkafy/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_shkafy/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Элитные шкафы-купе</h3>
                        <p>Мебель на заказ с эксклюзивным дизайном.</p>
                        <p><strong>От 18 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/elitnie_shkafy/1.jpg" data-fancybox-group="fancybox-thumb-4"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Элитные шкафы-купе"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
        renderServiceInput('form-kuhni')
    } else {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/9.jpg" alt="" />
                        <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                        class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/standart_kuhni/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/4.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/5.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/6.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/7.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/8.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        <a href="images/services/original/standart_kuhni/9.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Стандартные кухни</h3>
                        <p>Кухонные гарнитуры и отдельные модули.</p>
                        <p><strong>От 12 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Стандартные кухни"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/10.jpg" alt="" />
                        <a href="images/services/original/standart_shkafy/1.png" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/standart_shkafy/2.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/3.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/4.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/5.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/6.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/7.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/8.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/9.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/10.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/11.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/12.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/13.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/14.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/15.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        <a href="images/services/original/standart_shkafy/16.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Стандартные шкафы-купе</h3>
                        <p>Корпусная и встраиваемая мебель по доступным ценам.</p>
                        <p><strong>От 7 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/standart_shkafy/1.png" data-fancybox-group="fancybox-thumb-2"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Стандартные шкафы-купе"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/11.jpg" alt="" />
                        <a href="images/services/original/elitnie_kuhni/1.jpg" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/elitnie_kuhni/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/4.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_kuhni/5.png" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Элитные кухни</h3>
                        <p>Купить кухни итальянского качества.</p>
                        <p><strong>От 35 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/elitnie_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-3"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Элитные кухни"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать
                            замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                    <div class="service-image">
                        <img src="images/services/12.jpg" alt="" />
                        <a href="images/services/original/elitnie_shkafy/1.jpg" class="fancybox-thumb services-image_overlay"
                        data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>
    
                        <a href="images/services/original/elitnie_shkafy/2.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                        <a href="images/services/original/elitnie_shkafy/3.jpg" class="hidden fancybox-thumb"
                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                    </div>
                    <div class="service-text">
                        <h3>Элитные шкафы-купе</h3>
                        <p>Мебель на заказ с эксклюзивным дизайном.</p>
                        <p><strong>От 18 000 руб.</strong></p>
                        <p class="services-image_mobile visible-xs-block">
                        <a href="images/services/original/elitnie_shkafy/1.jpg" data-fancybox-group="fancybox-thumb-4"
                            class="fancybox-thumb"><span>Смотреть работы</span></a>
                        </p>
                        <div class="service-button">
                        <a href="#application" data-subject="Элитные шкафы-купе"
                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
        renderServiceInput('form-kuhni')
    }

    window.addEventListener('resize', () => {
        servicesWrapper.innerHTML = ''

        if (window.innerWidth > 576) {
            servicesWrapper.insertAdjacentHTML('beforeend',
                `<div class="row swiper-wrapper">
                    <div class="swiper-slide">
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/9.jpg" alt="" />
                            <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                            class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>
        
                            <a href="images/services/original/standart_kuhni/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/4.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/5.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/6.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/7.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/8.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/9.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Стандартные кухни</h3>
                            <p>Кухонные гарнитуры и отдельные модули.</p>
                            <p><strong>От 12 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Стандартные кухни"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/10.jpg" alt="" />
                            <a href="images/services/original/standart_shkafy/1.png" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>
        
                            <a href="images/services/original/standart_shkafy/2.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/3.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/4.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/5.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/6.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/7.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/8.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/9.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/10.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/11.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/12.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/13.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/14.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/15.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/16.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Стандартные шкафы-купе</h3>
                            <p>Корпусная и встраиваемая мебель по доступным ценам.</p>
                            <p><strong>От 7 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/standart_shkafy/1.png" data-fancybox-group="fancybox-thumb-2"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Стандартные шкафы-купе"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        
                    <div class="swiper-slide">
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/11.jpg" alt="" />
                            <a href="images/services/original/elitnie_kuhni/1.jpg" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>
        
                            <a href="images/services/original/elitnie_kuhni/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/4.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/5.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Элитные кухни</h3>
                            <p>Купить кухни итальянского качества.</p>
                            <p><strong>От 35 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/elitnie_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-3"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Элитные кухни"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать
                                замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/12.jpg" alt="" />
                            <a href="images/services/original/elitnie_shkafy/1.jpg" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>
        
                            <a href="images/services/original/elitnie_shkafy/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_shkafy/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Элитные шкафы-купе</h3>
                            <p>Мебель на заказ с эксклюзивным дизайном.</p>
                            <p><strong>От 18 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/elitnie_shkafy/1.jpg" data-fancybox-group="fancybox-thumb-4"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Элитные шкафы-купе"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
            renderServiceInput('form-kuhni')
        } else {
            servicesWrapper.insertAdjacentHTML('beforeend',
                `<div class="row swiper-wrapper">
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/9.jpg" alt="" />
                            <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                            class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>

                            <a href="images/services/original/standart_kuhni/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/4.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/5.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/6.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/7.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/8.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/standart_kuhni/9.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Стандартные кухни</h3>
                            <p>Кухонные гарнитуры и отдельные модули.</p>
                            <p><strong>От 12 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/standart_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Стандартные кухни"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/10.jpg" alt="" />
                            <a href="images/services/original/standart_shkafy/1.png" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>

                            <a href="images/services/original/standart_shkafy/2.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/3.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/4.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/5.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/6.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/7.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/8.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/9.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/10.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/11.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/12.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/13.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/14.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/15.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/standart_shkafy/16.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Стандартные шкафы-купе</h3>
                            <p>Корпусная и встраиваемая мебель по доступным ценам.</p>
                            <p><strong>От 7 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/standart_shkafy/1.png" data-fancybox-group="fancybox-thumb-2"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Стандартные шкафы-купе"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/11.jpg" alt="" />
                            <a href="images/services/original/elitnie_kuhni/1.jpg" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>

                            <a href="images/services/original/elitnie_kuhni/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/4.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_kuhni/5.png" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Элитные кухни</h3>
                            <p>Купить кухни итальянского качества.</p>
                            <p><strong>От 35 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/elitnie_kuhni/1.jpg" data-fancybox-group="fancybox-thumb-3"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Элитные кухни"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать
                                замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/12.jpg" alt="" />
                            <a href="images/services/original/elitnie_shkafy/1.jpg" class="fancybox-thumb services-image_overlay"
                            data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>

                            <a href="images/services/original/elitnie_shkafy/2.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/elitnie_shkafy/3.jpg" class="hidden fancybox-thumb"
                            data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Элитные шкафы-купе</h3>
                            <p>Мебель на заказ с эксклюзивным дизайном.</p>
                            <p><strong>От 18 000 руб.</strong></p>
                            <p class="services-image_mobile visible-xs-block">
                            <a href="images/services/original/elitnie_shkafy/1.jpg" data-fancybox-group="fancybox-thumb-4"
                                class="fancybox-thumb"><span>Смотреть работы</span></a>
                            </p>
                            <div class="service-button">
                            <a href="#application" data-subject="Элитные шкафы-купе"
                                class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
            renderServiceInput('form-kuhni')
        }
    })
}
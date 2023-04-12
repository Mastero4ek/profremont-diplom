import { slider } from "./slider"
import { serviceModal } from "./sevrvice-modal"

export const renderServiceSlider = () => {
    const servicesWrapper = document.querySelector('.services-inner')

    servicesWrapper.innerHTML = ''

    if (window.innerWidth > 576) {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/5.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Стандартные ПВХ-окна</h3>
                                    <p>Доступные окна высокого качества.</p>
                                    <p><strong>От 3 200 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/standart/1.jpg"
                                            data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Стандартные ПВХ-окна"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/6.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Пвх-окна премиум класса</h3>
                                    <p>Европейское качество, по ценам ниже рыночных.</p>
                                    <p><strong>От 6 200 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/premium/1.jpg"
                                            data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Пвх-окна премиум класса"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="swiper-slide">
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/7.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Входные группы-перегородки</h3>
                                    <p>Алюминиевые и пластиковые перегородки заводского качества.</p>
                                    <p><strong>От 8 350 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/septa/1.jpg"
                                            data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Входные группы-перегородки"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/8.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Окна с уникальным дизайном</h3>
                                    <p>ПВХ-окна любой сложности.</p>
                                    <p><strong>Удорожание всего от 20%</strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/custom/1.jpg"
                                            data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Окна с уникальным дизайном"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
    } else {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/5.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Стандартные ПВХ-окна</h3>
                                <p>Доступные окна высокого качества.</p>
                                <p><strong>От 3 200 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/standart/1.jpg"
                                        data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Стандартные ПВХ-окна"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/6.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Пвх-окна премиум класса</h3>
                                <p>Европейское качество, по ценам ниже рыночных.</p>
                                <p><strong>От 6 200 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/premium/1.jpg"
                                        data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Пвх-окна премиум класса"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/7.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Входные группы-перегородки</h3>
                                <p>Алюминиевые и пластиковые перегородки заводского качества.</p>
                                <p><strong>От 8 350 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/septa/1.jpg"
                                        data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Входные группы-перегородки"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/8.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Окна с уникальным дизайном</h3>
                                <p>ПВХ-окна любой сложности.</p>
                                <p><strong>Удорожание всего от 20%</strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/custom/1.jpg"
                                        data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Окна с уникальным дизайном"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
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
                                    <img src="images/services/5.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Стандартные ПВХ-окна</h3>
                                    <p>Доступные окна высокого качества.</p>
                                    <p><strong>От 3 200 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/standart/1.jpg"
                                            data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Стандартные ПВХ-окна"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/6.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Пвх-окна премиум класса</h3>
                                    <p>Европейское качество, по ценам ниже рыночных.</p>
                                    <p><strong>От 6 200 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/premium/1.jpg"
                                            data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Пвх-окна премиум класса"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="swiper-slide">
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/7.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Входные группы-перегородки</h3>
                                    <p>Алюминиевые и пластиковые перегородки заводского качества.</p>
                                    <p><strong>От 8 350 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/septa/1.jpg"
                                            data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Входные группы-перегородки"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/8.jpg" alt="">
                                </div>
                                <div class="service-text">
                                    <h3>Окна с уникальным дизайном</h3>
                                    <p>ПВХ-окна любой сложности.</p>
                                    <p><strong>Удорожание всего от 20%</strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/custom/1.jpg"
                                            data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Окна с уникальным дизайном"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
        } else {
            servicesWrapper.insertAdjacentHTML('beforeend',
                `<div class="row swiper-wrapper">
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/5.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Стандартные ПВХ-окна</h3>
                                <p>Доступные окна высокого качества.</p>
                                <p><strong>От 3 200 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/standart/1.jpg"
                                        data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Стандартные ПВХ-окна"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/6.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Пвх-окна премиум класса</h3>
                                <p>Европейское качество, по ценам ниже рыночных.</p>
                                <p><strong>От 6 200 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/premium/1.jpg"
                                        data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Пвх-окна премиум класса"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/7.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Входные группы-перегородки</h3>
                                <p>Алюминиевые и пластиковые перегородки заводского качества.</p>
                                <p><strong>От 8 350 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/septa/1.jpg"
                                        data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Входные группы-перегородки"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/8.jpg" alt="">
                            </div>
                            <div class="service-text">
                                <h3>Окна с уникальным дизайном</h3>
                                <p>ПВХ-окна любой сложности.</p>
                                <p><strong>Удорожание всего от 20%</strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/custom/1.jpg"
                                        data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Окна с уникальным дизайном"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
        }
    })

}
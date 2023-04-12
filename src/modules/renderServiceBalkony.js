import { slider } from "./slider"
import { serviceModal } from "./sevrvice-modal"
import { renderServiceInput } from "./renderServiceInput"

export const renderServiceBalkony = () => {
    const servicesWrapper = document.getElementById('service-balkony')
    if (!servicesWrapper) return

    servicesWrapper.innerHTML = ''

    if (window.innerWidth > 576) {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                <div class="swiper-slide">
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/1.jpg" alt="">
                                <a href="images/services/original/hot/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                    class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>

                                <a href="images/services/original/hot/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Тёплое остекление</h3>
                                <p>Помогает значительно увеличить жилую площадь, создав полноценную комнату.</p>
                                <p><strong>От 5 300 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/hot/1.jpg"
                                        data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Тёплое остекление"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/2.jpg" alt="">
                                <a href="images/services/original/loggia/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>

                                <a href="images/services/original/loggia/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Лоджии</h3>
                                <p>Остекление лоджии с обшивкой защищают квартиру от сквозняков, от шума и
                                    загазованности.
                                </p>
                                <p><strong>От 7 000 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/loggia/1.jpg"
                                        data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Лоджии"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/3.jpg" alt="">
                                <a href="images/services/original/cold/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>

                                <a href="images/services/original/cold/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/31.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Холодное остекление</h3>
                                <p>Отличная защита балконов и лоджий от от ветра, осадков и пыли.</p>
                                <p><strong>От 4 250 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/cold/1.jpg"
                                        data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Холодное остекление"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/4.jpg" alt="">
                                <a href="images/services/original/balcony/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>

                                <a href="images/services/original/balcony/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/31.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/32.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/33.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/34.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/35.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/36.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/37.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/38.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/39.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/40.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/41.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/42.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/43.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/44.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/45.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/46.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/48.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/49.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/50.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/52.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/53.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/54.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/55.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/56.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/57.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/58.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/60.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Балконы</h3>
                                <p>Сделаем ваш балкон уютным и полезным продолжением квартиры.</p>
                                <p><strong>От 8 800 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/balcony/1.jpg"
                                        data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Балконы"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
        renderServiceInput('form-balkony')
    } else {
        servicesWrapper.insertAdjacentHTML('beforeend',
            `<div class="row swiper-wrapper">
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/1.jpg" alt="">
                            <a href="images/services/original/hot/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>

                            <a href="images/services/original/hot/2.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/3.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/4.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/5.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/6.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/7.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/8.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/9.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/10.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/11.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/12.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/13.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/14.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/15.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/16.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/17.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/18.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/19.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/20.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/21.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/22.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/23.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/24.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/25.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/26.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/27.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/28.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/29.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            <a href="images/services/original/hot/30.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Тёплое остекление</h3>
                            <p>Помогает значительно увеличить жилую площадь, создав полноценную комнату.</p>
                            <p><strong>От 5 300 руб./м<sup>2</sup></strong></p>
                            <p class="services-image_mobile visible-xs-block"><a
                                    href="images/services/original/hot/1.jpg"
                                    data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                        работы</span></a></p>
                            <div class="service-button"><a href="#application" data-subject="Тёплое остекление"
                                    class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/2.jpg" alt="">
                            <a href="images/services/original/loggia/1.jpg"
                                class="fancybox-thumb services-image_overlay"
                                data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>

                            <a href="images/services/original/loggia/2.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/3.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/4.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/5.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/6.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/7.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/8.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/9.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/10.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/11.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/12.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/13.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/14.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/15.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/16.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/17.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/18.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/19.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/20.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/21.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/22.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/23.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/24.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/25.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            <a href="images/services/original/loggia/26.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Лоджии</h3>
                            <p>Остекление лоджии с обшивкой защищают квартиру от сквозняков, от шума и
                                загазованности.
                            </p>
                            <p><strong>От 7 000 руб./м<sup>2</sup></strong></p>
                            <p class="services-image_mobile visible-xs-block"><a
                                    href="images/services/original/loggia/1.jpg"
                                    data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                        работы</span></a></p>
                            <div class="service-button"><a href="#application" data-subject="Лоджии"
                                    class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->

            <!-- <div class="swiper-slide"> -->
                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/3.jpg" alt="">
                            <a href="images/services/original/cold/1.jpg"
                                class="fancybox-thumb services-image_overlay"
                                data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>

                            <a href="images/services/original/cold/2.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/3.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/4.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/5.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/6.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/7.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/8.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/9.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/10.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/11.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/12.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/13.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/14.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/15.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/16.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/17.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/18.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/19.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/20.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/21.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/22.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/23.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/24.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/25.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/26.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/27.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/28.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/29.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/30.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            <a href="images/services/original/cold/31.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Холодное остекление</h3>
                            <p>Отличная защита балконов и лоджий от от ветра, осадков и пыли.</p>
                            <p><strong>От 4 250 руб./м<sup>2</sup></strong></p>
                            <p class="services-image_mobile visible-xs-block"><a
                                    href="images/services/original/cold/1.jpg"
                                    data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                        работы</span></a></p>
                            <div class="service-button"><a href="#application"
                                    data-subject="Холодное остекление"
                                    class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6 swiper-slide">
                    <div class="service-block">
                        <div class="service-image">
                            <img src="images/services/4.jpg" alt="">
                            <a href="images/services/original/balcony/1.jpg"
                                class="fancybox-thumb services-image_overlay"
                                data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>

                            <a href="images/services/original/balcony/2.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/3.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/4.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/6.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/7.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/8.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/9.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/11.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/12.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/13.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/14.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/15.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/17.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/18.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/19.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/22.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/25.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/26.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/27.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/28.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/29.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/30.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/31.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/32.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/33.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/34.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/35.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/36.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/37.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/38.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/39.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/40.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/41.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/42.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/43.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/44.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/45.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/46.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/48.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/49.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/50.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/52.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/53.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/54.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/55.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/56.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/57.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/58.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            <a href="images/services/original/balcony/60.jpg" class="hidden fancybox-thumb"
                                data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                        </div>
                        <div class="service-text">
                            <h3>Балконы</h3>
                            <p>Сделаем ваш балкон уютным и полезным продолжением квартиры.</p>
                            <p><strong>От 8 800 руб./м<sup>2</sup></strong></p>
                            <p class="services-image_mobile visible-xs-block"><a
                                    href="images/services/original/balcony/1.jpg"
                                    data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                        работы</span></a></p>
                            <div class="service-button"><a href="#application" data-subject="Балконы"
                                    class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                        </div>
                    </div>
                </div>
            </div>`
        )

        slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
        serviceModal()
        renderServiceInput('form-balkony')
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
                                    <img src="images/services/1.jpg" alt="">
                                    <a href="images/services/original/hot/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                        class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>

                                    <a href="images/services/original/hot/2.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/3.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/4.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/5.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/6.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/7.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/8.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/9.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/10.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/11.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/12.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/13.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/14.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/15.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/16.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/17.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/18.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/19.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/20.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/21.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/22.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/23.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/24.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/25.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/26.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/27.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/28.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/29.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                    <a href="images/services/original/hot/30.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                </div>
                                <div class="service-text">
                                    <h3>Тёплое остекление</h3>
                                    <p>Помогает значительно увеличить жилую площадь, создав полноценную комнату.</p>
                                    <p><strong>От 5 300 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/hot/1.jpg"
                                            data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application" data-subject="Тёплое остекление"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/2.jpg" alt="">
                                    <a href="images/services/original/loggia/1.jpg"
                                        class="fancybox-thumb services-image_overlay"
                                        data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>

                                    <a href="images/services/original/loggia/2.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/3.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/4.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/5.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/6.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/7.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/8.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/9.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/10.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/11.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/12.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/13.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/14.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/15.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/16.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/17.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/18.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/19.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/20.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/21.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/22.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/23.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/24.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/25.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                    <a href="images/services/original/loggia/26.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                </div>
                                <div class="service-text">
                                    <h3>Лоджии</h3>
                                    <p>Остекление лоджии с обшивкой защищают квартиру от сквозняков, от шума и
                                        загазованности.
                                    </p>
                                    <p><strong>От 7 000 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/loggia/1.jpg"
                                            data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application" data-subject="Лоджии"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/3.jpg" alt="">
                                    <a href="images/services/original/cold/1.jpg"
                                        class="fancybox-thumb services-image_overlay"
                                        data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>

                                    <a href="images/services/original/cold/2.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/3.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/4.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/5.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/6.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/7.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/8.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/9.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/10.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/11.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/12.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/13.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/14.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/15.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/16.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/17.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/18.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/19.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/20.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/21.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/22.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/23.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/24.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/25.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/26.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/27.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/28.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/29.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/30.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                    <a href="images/services/original/cold/31.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                </div>
                                <div class="service-text">
                                    <h3>Холодное остекление</h3>
                                    <p>Отличная защита балконов и лоджий от от ветра, осадков и пыли.</p>
                                    <p><strong>От 4 250 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/cold/1.jpg"
                                            data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application"
                                            data-subject="Холодное остекление"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-6">
                            <div class="service-block">
                                <div class="service-image">
                                    <img src="images/services/4.jpg" alt="">
                                    <a href="images/services/original/balcony/1.jpg"
                                        class="fancybox-thumb services-image_overlay"
                                        data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>

                                    <a href="images/services/original/balcony/2.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/3.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/4.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/6.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/7.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/8.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/9.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/11.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/12.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/13.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/14.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/15.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/17.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/18.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/19.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/22.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/25.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/26.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/27.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/28.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/29.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/30.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/31.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/32.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/33.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/34.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/35.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/36.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/37.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/38.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/39.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/40.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/41.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/42.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/43.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/44.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/45.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/46.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/48.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/49.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/50.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/52.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/53.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/54.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/55.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/56.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/57.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/58.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                    <a href="images/services/original/balcony/60.jpg" class="hidden fancybox-thumb"
                                        data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                </div>
                                <div class="service-text">
                                    <h3>Балконы</h3>
                                    <p>Сделаем ваш балкон уютным и полезным продолжением квартиры.</p>
                                    <p><strong>От 8 800 руб./м<sup>2</sup></strong></p>
                                    <p class="services-image_mobile visible-xs-block"><a
                                            href="images/services/original/balcony/1.jpg"
                                            data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                                работы</span></a></p>
                                    <div class="service-button"><a href="#application" data-subject="Балконы"
                                            class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
            renderServiceInput('form-balkony')
        } else {
            servicesWrapper.insertAdjacentHTML('beforeend',
                `<div class="row swiper-wrapper">
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/1.jpg" alt="">
                                <a href="images/services/original/hot/1.jpg" data-fancybox-group="fancybox-thumb-1"
                                    class="fancybox-thumb services-image_overlay"><span>Смотреть работы</span></a>

                                <a href="images/services/original/hot/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                                <a href="images/services/original/hot/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-1" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Тёплое остекление</h3>
                                <p>Помогает значительно увеличить жилую площадь, создав полноценную комнату.</p>
                                <p><strong>От 5 300 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/hot/1.jpg"
                                        data-fancybox-group="fancybox-thumb-1" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Тёплое остекление"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/2.jpg" alt="">
                                <a href="images/services/original/loggia/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-2"><span>Смотреть работы</span></a>

                                <a href="images/services/original/loggia/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                                <a href="images/services/original/loggia/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-2" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Лоджии</h3>
                                <p>Остекление лоджии с обшивкой защищают квартиру от сквозняков, от шума и
                                    загазованности.
                                </p>
                                <p><strong>От 7 000 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/loggia/1.jpg"
                                        data-fancybox-group="fancybox-thumb-2" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Лоджии"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->

                <!-- <div class="swiper-slide"> -->
                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/3.jpg" alt="">
                                <a href="images/services/original/cold/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-3"><span>Смотреть работы</span></a>

                                <a href="images/services/original/cold/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/5.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/10.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/16.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/20.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/21.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/23.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/24.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                                <a href="images/services/original/cold/31.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-3" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Холодное остекление</h3>
                                <p>Отличная защита балконов и лоджий от от ветра, осадков и пыли.</p>
                                <p><strong>От 4 250 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/cold/1.jpg"
                                        data-fancybox-group="fancybox-thumb-3" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application"
                                        data-subject="Холодное остекление"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 swiper-slide">
                        <div class="service-block">
                            <div class="service-image">
                                <img src="images/services/4.jpg" alt="">
                                <a href="images/services/original/balcony/1.jpg"
                                    class="fancybox-thumb services-image_overlay"
                                    data-fancybox-group="fancybox-thumb-4"><span>Смотреть работы</span></a>

                                <a href="images/services/original/balcony/2.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/3.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/4.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/6.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/7.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/8.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/9.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/11.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/12.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/13.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/14.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/15.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/17.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/18.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/19.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/22.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/25.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/26.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/27.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/28.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/29.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/30.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/31.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/32.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/33.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/34.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/35.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/36.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/37.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/38.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/39.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/40.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/41.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/42.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/43.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/44.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/45.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/46.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/48.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/49.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/50.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/52.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/53.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/54.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/55.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/56.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/57.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/58.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                                <a href="images/services/original/balcony/60.jpg" class="hidden fancybox-thumb"
                                    data-fancybox-group="fancybox-thumb-4" rel="nofollow"></a>
                            </div>
                            <div class="service-text">
                                <h3>Балконы</h3>
                                <p>Сделаем ваш балкон уютным и полезным продолжением квартиры.</p>
                                <p><strong>От 8 800 руб./м<sup>2</sup></strong></p>
                                <p class="services-image_mobile visible-xs-block"><a
                                        href="images/services/original/balcony/1.jpg"
                                        data-fancybox-group="fancybox-thumb-4" class="fancybox-thumb"><span>Смотреть
                                            работы</span></a></p>
                                <div class="service-button"><a href="#application" data-subject="Балконы"
                                        class="btn btn-success btn-sm fancyboxModal">Вызвать замерщика</a></div>
                            </div>
                        </div>
                    </div>
                </div>`
            )

            slider('.services-inner', 600, '.services__arrow--right', '.services__arrow--left', 1, 0)
            serviceModal()
            renderServiceInput('form-balkony')
        }
    })
}
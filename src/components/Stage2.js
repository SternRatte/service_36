import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from "react";
import slide1 from "../asserts/1.png";
import slide2 from "../asserts/2.png";
import slide3 from "../asserts/3.png";
import slide4 from "../asserts/4.png";
import {Carousel} from "react-responsive-carousel";
import "../css/styles2.css"

class Stage2 extends React.Component {

    render() {
        return (
            <Carousel className="main-slide" showStatus={false} showArrows={true} showIndicators={false}
                      thumbWidth={350}>
                <div>
                    <img src={slide1} aria-label="slide1"/>
                    <div className="right-slide">
                        <h2>Обслуживание любых видов легковых машин</h2>
                        <p>
                            Оперативная диагностика автомобиля дает полную картину работоспособности всех основных
                            систем в вашем автомобиле. Проанализировав полученные результаты, специалисты нашего
                            автосервиса дадут необходимые рекомендации по дальнейшему обслуживанию или ремонту.
                        </p>
                        <button className="fill-all two">Записаться на сервис</button>
                        <button className="not-fill two">Консультация</button>
                    </div>
                </div>
                <div>
                    <img src={slide2}/>
                    <div className="right-slide">
                        <h2>Полная замена тормозной системы и тормозных дисков</h2>
                        <p>
                            Замену тормозных колодок необходимо периодически осуществлять на любом автомобиле.
                            Частота этих работ зависит от конкретной модели транспортного средства и характеристик
                            колодок и тормозного диска.
                        </p>
                        <button className="fill-all two">Записаться на сервис</button>
                        <button className="not-fill two">Консультация</button>
                    </div>
                </div>
                <div>
                    <img src={slide3}/>
                    <div className="right-slide">
                        <h2>Ремонт ходовой части автомобиля и подвески</h2>
                        <p>
                            Подвеска подвергается большим эксплуатационным нагрузкам, поэтому ее состояние нужно
                            постоянно отслеживать.
                            Обращайтесь за качественной диагностикой к нам — мы проверим все узлы подвески и подскажем,
                            что нужно исправить,
                            чтобы ваши поездки были комфортными и безопасными!
                        </p>
                        <button className="fill-all two">Записаться на сервис</button>
                        <button className="not-fill two">Консультация</button>
                    </div>
                </div>
                <div>
                    <img src={slide4}/>
                    <div className="right-slide">
                        <h2>Составление договора и гарантия качественного обслуживания</h2>
                        <p>
                            Девиз фирмы "Клиент всегда прав!", поэтому с каждым посетителем составляется договор. Он
                            даёт вам гарантию,
                            что работа будет сделана качественно, в кратчайшие сроки и за объективную цену.
                        </p>
                        <button className="fill-all two">Записаться на сервис</button>
                        <button className="not-fill two">Консультация</button>
                    </div>
                </div>
            </Carousel>
        )
    }
}

export default Stage2;
import React from "react";
import '../css/styles4.css'
import { GiSteeringWheel } from 'react-icons/gi'

class Stage4 extends React.Component{
    services = [
        {
            id:1,
            head:"Ремонт двигателя",
            type:"Двигатель",
            price:" 9 000 р.",
            logo: <GiSteeringWheel/>,
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:2,
            head:"Замена двигателя",
            type:"Двигатель",
            price:" 7 000 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:3,
            head:"Установка двигателя",
            type:"Двигатель",
            price:" 5 000 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:4,
            head:"Комплексная диагностика",
            type:"Диагностика",
            price:" 10 000 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:5,
            head:"Обшивка руля",
            type:"Руль",
            price:" 1 500 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:6,
            head:"Ремонт рулевой системы",
            type:"Руль",
            price:" 8 000 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        },
        {
            id:7,
            head:"Замена летней резины",
            type:"Шины",
            price:" 3 000 р.",
            include:"В услугу входит: Снятие и разборка двигателя, замена необходимых деталей и компонентов," +
                "прочистка клапанов, установка двигателя в автомобиль, подключение всех систем.",
            mark: "* Стоимость указана без учёта различных компонентов и деталей для замены."
        }
    ]

    constructor (props) {
        super(props)
        this.state = {
            useElem: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return(
            <div className="all-usl">
                <h2>Все услуги / {(this.state.useElem > 0) ? this.services[this.state.useElem - 1].type : 'Выберите услугу'}</h2>
                {this.moreInformation()}
                <div  onClick={this.handleClick} className="services">
                    {this.Information()}
                </div>
            </div>
        )
    }

    parent

    handleClick (elem) {
        if (this.parent)
            this.parent.classList.remove('used')
        let id = elem.target.id
        this.setState({useElem: id})
        this.parent = elem.target.parentNode

        if (elem.target.hasAttribute('id')) {

            this.parent.classList.add('used')
        }
    }

    Information(){
        return(
            this.services.map((item) =>
                <div key={item.id} className="el-service">
                    <h3>{item.head}</h3>
                    <h4>{item.type} {item.logo}</h4>
                    <p>от{item.price} + стоимость деталей и составляющих </p>
                    <button className="not-fill" id={item.id}
                            useElem={item.id === this.state.useElem} >Подробнее</button>
                </div>
             )
        )
    }

    moreInformation(){
        return(
            this.services.map((item) =>
                <div key={item.id} className="el-service more">
                    <div className="more-head">
                        <h3>{item.head} - от </h3>
                        <p>{item.price}*</p>
                        <p className="logo">{item.logo}</p>
                    </div>
                    <p>{item.include}</p>
                    <span>{item.mark}</span>
                    <button className="fill-all">Заказать услугу</button>
                </div>
            )
        )
    }

}
export default Stage4
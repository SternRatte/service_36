import React from "react";
import "../css/styles5.css"
import {FaTelegramPlane} from  "react-icons/fa";
import {FaInstagramSquare} from  "react-icons/fa";
import SliderComments from "./SliderComments";
import Modal from "./Modal";
import '../components/AddComment'
import AddComment from "./AddComment";


class Stage5  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    id: 1,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date: '2021-08-14',
                    text: 'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
                {
                    id: 2,
                    firstname: 'Александр',
                    lastname: 'Зимин',
                    date: '2021-10-04',
                    text: 'Сервис выполнил работы вовремя, никаких  нареканий нет.'
                },
                {
                    id: 3,
                    firstname: 'Олег',
                    lastname: 'Волохов',
                    date: '2021-12-01',
                    text: 'Хороший сервис - находится не так далеко, мастера качественно выполняют свою работу.'
                },
                {
                    id: 4,
                    firstname: 'Дмитрий',
                    lastname: 'Буратов',
                    date: '2022-03-01',
                    text: 'Заказывал обшивку руля - сделали хорошо и быстро!'
                },
                {
                    id: 5,
                    firstname: 'Мария',
                    lastname: 'Котова',
                    date: '2022-03-29',
                    text: 'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
            ],

            modalActive:false,
        }
        this.setModalActive = this.setModalActive.bind(this)
        this.addComments = this.addComments.bind(this)
    }

    render() {
        return (
            <div className="stage5">
                <div className="head5">
                    <h2>Отзывы клиентов</h2>
                    <FaTelegramPlane className="icon-1" size={40}/>
                    <FaInstagramSquare className="icon-2" size={65}/>
                </div>
                <SliderComments comments={this.state.comments}/>
                <button className="open-btn" onClick={() => this.setState({modalActive:true})}>Написать отзыв</button>
                <Modal active={this.state.modalActive} setActive={this.setModalActive}>
                    <AddComment onAdd={this.addComments}/>
                </Modal>
            </div>
        )
    }

    setModalActive(item){
        this.setState({modalActive:item})
    }

    addComments(comment){
        const id = this.state.comments.length + 1
        const date = new Date().toISOString().substr(0, 10)
        this.setState({comments: [...this.state.comments, {id,date, ...comment}]})
    }

}
export default Stage5
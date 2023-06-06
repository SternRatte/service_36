import React from "react";
import Carousel from 'better-react-carousel'
import "../css/comments.css"
import AddComment from "./AddComment";
class SliderComments  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments:[
                {
                    id:1,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date:'14.12.2021',
                    text:'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
                {
                    id:2,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date:'14.12.2021',
                    text:'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
                {
                    id:3,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date:'14.12.2021',
                    text:'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
                {
                    id:4,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date:'14.12.2021',
                    text:'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
                {
                    id:5,
                    firstname: 'Анатолий',
                    lastname: 'Бобровский',
                    date:'14.12.2021',
                    text:'Большое спасибо за качественно выполненную работу. Устранили неполадки в подвеске всего за 1 день!'
                },
            ]
        }
    }
    styleforCarousel ={
        marginLeft: '10%',
        marginTop:'2%',
        minWidth: '50%',
        maxWidth: '80%',
    }
    render(){
        return (
            <div className="carousel-comments">
                <Carousel cols={2} rows={2} gap={70} loop containerStyle={this.styleforCarousel}>
                    {this.state.comments.map((item) => <Carousel.Item key={item.id} ><div className="head-item">
                        <h2>{item.firstname} {item.lastname}</h2><p>{item.date}</p></div> <p className="text-comment">{item.text}</p>
                    </Carousel.Item>)}
                </Carousel>
            </div>
        )
    }
}

export default SliderComments
import React from "react";
import Carousel from 'better-react-carousel'
import "../css/comments.css"
import AddComment from "./AddComment";
class SliderComments  extends React.Component {

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
                    {this.props.comments.map((item) => <Carousel.Item key={item.id} ><div className="head-item">
                        <h2>{item.firstname} {item.lastname}</h2><p>{item.date}</p></div> <p className="text-comment">{item.text}</p>
                    </Carousel.Item>)}
                </Carousel>
            </div>
        )
    }
}

export default SliderComments
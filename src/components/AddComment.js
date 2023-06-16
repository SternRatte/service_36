import React from "react";
import Carousel from "better-react-carousel";

class AddComment extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            text:"",
        }
    }
    render() {
        return(
            <div>
                <h2 >Нам важно мнение каждого клиента!</h2>
                <form>
                    <input type="text" placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
                    <input type="text" placeholder="Имя" onChange={(e) => this.setState({firstname: e.target.value})}/>
                    <textarea placeholder="Ваш отзыв" className="comment-write" onChange={(e) => this.setState({text: e.target.value})}></textarea>
                    <button type="button" onClick={()=> this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        text:this.state.text
                    })}>Отправить отзыв</button>
                </form>
            </div>
        )
    }
}
export default AddComment
import React from "react";
import {ImPhone} from "react-icons/im";

class  Header extends React.Component{
    render() {
        return(
            <header className="header">
                <h1>Service</h1>
                <p>36'</p>
                <a href="">разделы</a>
                <a href="">марки</a>
                <a href="">услуги</a>
                <a href="">отзывы</a>
                <a href="">контакты</a>
                <a href="">где находимся</a>
                <div className="phone-all">
                    <ImPhone className="phone-icon"></ImPhone>
                    <span className="phone"> +7 (980) 300-25-25 </span>
                </div>
            </header>
        )
    }


}
export default Header
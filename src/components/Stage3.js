import React from "react";
import "../css/stage3.css"
import {MdOutlineDone} from  "react-icons/md";

class  Stage3 extends React.Component{
    render() {
        return(
            <div className="stage3">
                <div className="left3"></div>
                <div className="shadow"></div>
                <div className="right3">
                    <h2>Список обслуживаемых автомобилей</h2>
                    <h3>Большой опыт и различное оборудование позволяет выполнять ремонт почти всех известных автомобилей:</h3>
                    <div className="names">
                        {this.Marcks()}
                    </div>
                    <a href="">И другие марки автомобилей</a>
                </div>
            </div>
        )
    }

     Marcks(){
         const names = ["Audi (Ауди)","Chevrolet (Шевроле)", "Daewoo (Дэу)","Ford (Форд)","Fiat (Фиат)","Geely (Джили)","Honda (Хонда)", "Kia (Киа)",
         "Mazda (Мазда)", "Nissan (Ниссан)","Opel (Опель)","Renault (Рено)","Toyota (Тойота)","Volvo (Вольво)"]
         return names.map((name ) => <p><MdOutlineDone className="done-icon"/>{name}</p>)
     }

}
export default Stage3
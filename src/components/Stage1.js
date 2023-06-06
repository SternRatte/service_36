import React from "react";
import Slider from "./Slider";

class  Stage1 extends React.Component{
    render() {
        return(
            <div className="number1">
                <div className="left">
                    <h1>Доверься профессионалам! </h1>
                    <p>Комплексное техническое обслуживание и ремонт автопарков юридических лиц </p>
                    <button className="fill-all">Заказать услугу</button>
                    <button className="not-fill">Подробнее</button>
                </div>
                <div className="right">
                     <Slider/>
                </div>
            </div>
        )
    }


}
export default Stage1
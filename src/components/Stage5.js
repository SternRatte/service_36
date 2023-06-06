import React from "react";
import "../css/styles5.css"
import {FaTelegramPlane} from  "react-icons/fa";
import {FaInstagramSquare} from  "react-icons/fa";
import SliderComments from "./SliderComments";
import Modal from "./Modal";
import {useState} from "react";
import '../components/AddComment'
import AddComment from "./AddComment";


const Stage5 = () =>{
    const [modalActive, setModalActive] = useState(false)
    {
        return(
            <div className="stage5">
                <div className="head5">
                    <h2>Отзывы клиентов</h2>
                    <FaTelegramPlane className="icon-1" size={40}/>
                    <FaInstagramSquare className="icon-2" size={65}/>
                </div>
                <SliderComments/>
                <button className="open-btn" onClick={() => setModalActive(true)}>Написать отзыв</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <AddComment/>
                </Modal>
            </div>
        )
    }
}
export default Stage5
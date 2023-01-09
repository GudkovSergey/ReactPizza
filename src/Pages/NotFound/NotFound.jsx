import React from "react";
import smile from "./../../assets/img/smile.png";
import style from "./NotFound.module.scss";

const NotFound =()=>{
    return(
        <div className={style.container}>
            <div className={style.smile}>
                <img src={smile} alt="грустный смайлик"/>
            </div>
            <div >
                <h1>Ничего не найдено!</h1>
            </div>
                <div>
                <h4> К сожалению эта продукция недоступна в нашем интернет магазине!</h4>
                </div>

        </div>
    )
}
export default NotFound;
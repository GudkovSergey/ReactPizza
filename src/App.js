import React from "react";
import './scss/app.scss';
import Header from "./scss/components/Header/Header";
import Categories from "./scss/components/Categories/Categories";
import Sort from "./scss/components/Sort/Sort";
import PizzaBlock from "./scss/components/PizzaBlock/PizzaBlock";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццыяя</h2>
                    <div className="content__items">
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>
                        <PizzaBlock/>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;

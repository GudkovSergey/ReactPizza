import React from "react";
import './scss/app.scss';
import Header from "./ReactComponents/Header/Header";
import Categories from "./ReactComponents/Categories/Categories";
import Sort from "./ReactComponents/Sort/Sort";
import PizzaBlock from "./ReactComponents/PizzaBlock/PizzaBlock";
import pizzass from "./assets/pizass.json";

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
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzass.map((obj) => (
                                <PizzaBlock  key={obj.id}
                                             title={obj.title}
                                             price={obj.price}
                                             image={obj.imageUrl}
                                             sizes={obj.sizes}
                                             types={obj.types}

                                />))

                        }

                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;

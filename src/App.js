import React from "react";
import './scss/app.scss';
import Header from "./ReactComponents/Header/Header";
import Categories from "./ReactComponents/Categories/Categories";
import Sort from "./ReactComponents/Sort/Sort";
import PizzaBlock from "./ReactComponents/PizzaBlock/PizzaBlock";
// import pizzass from "./assets/pizass.json";
import axios from "axios";
import Skeleton from "./ReactComponents/PizzaBlock/Skeleton";


function App() {
    const [isLoading, setIsLoading] = React.useState(true);

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://63bc122fcf99234bfa6ded8c.mockapi.io/items')
            .then((response) => {

                setItems(response.data);

                setIsLoading(false);
            })
    }, [])

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
                        {isLoading
                            ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                            : items.map((obj) => (<PizzaBlock key={obj.id}
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

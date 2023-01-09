import React from "react";
import Categories from "../../ReactComponents/Categories/Categories";
import Sort from "../../ReactComponents/Sort/Sort";
import Skeleton from "../../ReactComponents/PizzaBlock/Skeleton";
import PizzaBlock from "../../ReactComponents/PizzaBlock/PizzaBlock";
import axios from "axios";

const Home= ()=>{
    const [isLoading, setIsLoading] = React.useState(true);

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://63bc122fcf99234bfa6ded8c.mockapi.io/items')
            .then((response) => {

                setItems(response.data);

                setIsLoading(false);
            })
    }, [])
    return(
        <>
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
            </>
    )
}

export default Home;
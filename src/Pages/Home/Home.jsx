import React from "react";
import Categories from "../../ReactComponents/Categories/Categories";
import Sort from "../../ReactComponents/Sort/Sort";
import Skeleton from "../../ReactComponents/PizzaBlock/Skeleton";
import PizzaBlock from "../../ReactComponents/PizzaBlock/PizzaBlock";
import axios from "axios";

const Home= ()=>{
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    const [list,setList]= React.useState({
        name: 'популярности',
        sort: 'rating'});//Sort

    const [activeIndex, setActiveIndex] = React.useState(0);//Categories
     

    React.useEffect(() => {
         setIsLoading(true);
         const sortBy = list.sort.replace('-','');
         const order = list.sort.includes('-') ? 'desc':'asc';
         const category = activeIndex>0 ? `category=${activeIndex}`:'';

        axios.get(`https://63bc122fcf99234bfa6ded8c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}` )
            .then((response) => {

                setItems(response.data);

                setIsLoading(false);
            })
        window.scrollTo(0,0);
    }, [activeIndex, list])
    return(
        <>
        <div className="content__top">

            <Categories activeIndex={activeIndex} setActiveIndex={(i)=>setActiveIndex(i)}/>

            <Sort list={list} setList={(i)=>setList(i)}/>

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
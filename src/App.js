import React from "react";
import './scss/app.scss';
import Header from "./ReactComponents/Header/Header";
import Home from "./Pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Cart from "./Pages/Card/Cart";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>

                </div>
            </div>
        </div>


    );
}

export default App;

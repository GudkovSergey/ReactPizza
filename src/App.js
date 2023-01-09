import React from "react";
import './scss/app.scss';
import Header from "./ReactComponents/Header/Header";
import Home from "./Pages/Home/Home";
import NotFoundContainer from "./Pages/NotFound/NotFoundContainer";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                   {/*<Home/>*/}
                   <NotFoundContainer/>
                </div>
            </div>
        </div>


    );
}

export default App;

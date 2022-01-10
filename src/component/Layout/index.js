import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
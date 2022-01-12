import React from 'react';
import "./style.css"
import logo from "../../img/logo (1).png"
import poly from "../../img/Polygon 1.png"
import userUkn from "../../img/user-ukn.png"
import search from "../../img/icon-search.png"
import comparisons from "../../img/сравнение.png"
import chosen from "../../img/выбранные.png"
import cart from "../../img/cart.png"
const Header = () => {
    return (
        <>
            <div className="header-up">
                <div className="container-header d-flex align-items-center">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <div className="area-finding">
                            <p>Москва<span className="svg"><img src={poly} alt=""/></span></p>
                        </div>
                    </div>
                    <div className="partner">
                        <p className="dealer">Для дилеров</p>
                        <button className="btn-partner">Become a Partner</button>
                    </div>
                    <div className="contact">
                        <p className="contact-number">+7 (800) 000-00-00 <span>МСК <img src={poly} alt=""/></span></p>
                        <p className="request-a-call">Заказать звонок</p>
                    </div>
                    <div className="login-account">
                        <p>Войти<span><img src={userUkn} alt=""/></span></p>
                    </div>
                </div>
            </div>
            <div className="header-lower">
                <div className="container-header d-flex align-items-center">
                    <div className="d-flex border-catalog align-items-center">
                        <button className="btn-catalog">
                            <i className='bx bxs-grid'/>
                            <p className='margin-top'>Каталог</p>
                        </button>
                        <div className="search">
                            <img src={search} alt=""/>
                        </div>
                    </div>
                    <div className="nav-bar">
                        <nav>
                            <ul className='menu'>
                                <li><a className="link" href="#">Бренды</a></li>
                                <li><a className="link" href="#">Сервис</a></li>
                                <li><a className="link" href="#">Услуги</a></li>
                                <li><a className="link" href="#">Поддержка</a></li>
                                <li><a className="link" href="#">О компании</a></li>
                                <li><a className="link" href="#">Блог</a></li>
                                <li><a className="link" href="#">Где купить</a></li>
                                <li><a className="link" href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="analysis">
                        <img src={comparisons} alt=""/>
                        <img src={chosen} alt=""/>
                        <img src={cart} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
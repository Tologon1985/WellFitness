import React from 'react';
import './style.css'
import telegram from "../../img/icon-telegram.png"
import logo from "../../img/logo (1).png"
import instagram from "../../img/icon-instagram.png"
import facebook from "../../img/icon-facebook.png"
import youtube from "../../img/icon-youtube.png"
import visa from "../../img/icon-visa.png"
import mastercard from "../../img/icon-mastercard .png"
import webmoney from "../../img/icon-webmoney.png"
import paypal from "../../img/icon-paypal.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="table-of-contents">
                    <div className="catalog">
                        <h3 className="heading">Каталог</h3>
                        <div className="link-flex">
                            <a className="link-footer" href="#">Для дома</a>
                            <a className="link-footer" href="#">Для фитнес клубов</a>
                            <a className="link-footer" href="#">Акции</a>
                            <a className="link-footer" href="#">Идеи и подборки </a>
                            <a className="link-footer" href="#">Новинки</a>
                            <a className="link-footer" href="#">Наши бренды</a>
                        </div>
                    </div>
                    <div className="catalog">
                        <h3 className="heading">Поддержка</h3>
                        <div className="link-flex">
                            <a className="link-footer" href="#">Доставка и оплата</a>
                            <a className="link-footer" href="#">Условия возврата</a>
                            <a className="link-footer" href="#">Сервисная заявка</a>
                            <a className="link-footer" href="#">Обслуживание фитнес клубов</a>
                            <a className="link-footer" href="#">FAQ</a>
                            <a className="link-footer" href="#">Инструкции</a>
                            <a className="link-footer" href="#">Гарантия</a>
                        </div>
                    </div>
                    <div className="catalog">
                        <h3 className="heading">Услуги</h3>
                        <div className="link-flex">
                            <a className="link-footer" href="#">3D проект</a>
                            <a className="link-footer" href="#">Консалтинг</a>
                            <a className="link-footer" href="#">Бизнес планирование </a>
                            <a className="link-footer" href="#">Лизинг</a>
                            <a className="link-footer" href="#">Trade-IN</a>
                            <a className="link-footer" href="#">В рассрочку</a>
                        </div>
                    </div>
                    <div className="catalog">
                        <h3 className="heading">О компании</h3>
                        <div className="link-flex">
                            <a className="link-footer" href="#">О нас</a>
                            <a className="link-footer" href="#">Наша миссия </a>
                            <a className="link-footer" href="#">Наша команда </a>
                            <a className="link-footer" href="#">Наши проекты</a>
                            <a className="link-footer" href="#">Новости</a>
                            <a className="link-footer" href="#">Блог</a>
                            <a className="link-footer" href="#">Где купить</a>
                            <a className="link-footer" href="#">Контакты</a>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <button className="btn-telegram">Подписаться на рассылку <img src={telegram} alt=""/></button>
                        <p className="subscription">Вы успешно подписались</p>
                        <p className="number">+7 (000) 000-00-00 для Москвы</p>
                        <p className="number">8 (800) 000-00-00 для России</p>
                        <p className="request-a-call-footer">Заказать звонок</p>
                        <p className="footer-email">wellfitness@wellfit.ru</p>
                        <p className="write-a-message">Написать</p>
                        <p className="confidentiality">Политика конфиденциальности</p>
                        <p className="offer">Публичная офферта</p>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="footer-logo">
                        <img src={logo} alt=""/>
                        <p className="law">© WellFitness. 2007 Все права защищены</p>
                    </div>
                    <div className="social-network">
                        <img src={instagram} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={youtube} alt=""/>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn-partner">Become a Partner</button>
                        <button className="for-dealers">Для дилеров</button>
                    </div>
                    <div className="payment">
                        <img src={visa} alt=""/>
                        <img src={mastercard} alt=""/>
                        <img src={webmoney} alt=""/>
                        <img src={paypal} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
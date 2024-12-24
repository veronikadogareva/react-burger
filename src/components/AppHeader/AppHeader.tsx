import React from 'react';
import headerStyles from './AppHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
    return (
        <header className={headerStyles.header}>
            <Logo />
            <nav className={headerStyles.nav}>
                    <a className={headerStyles.navLink}><BurgerIcon type="primary" /> Конструктор</a>
                    <a className={headerStyles.navLink}><ListIcon type="secondary" /> Лента заказов</a>
                    <a className={headerStyles.navLink}><ProfileIcon type="secondary" /> Личный кабинет</a>         
            </nav>
        </header>
    );
}
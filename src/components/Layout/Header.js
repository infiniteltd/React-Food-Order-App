import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';


function Header(props) {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Great~Meals</h1>
                <HeaderCartButton onClickCart={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
}

export default Header



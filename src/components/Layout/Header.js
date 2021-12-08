import React from 'react';
import Styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
export default function Header() {
  return (
    <>
      <header className={Styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={Styles['main-image']}>
        <img src="" alt="A meal on table" />
      </div>
    </>
  );
}

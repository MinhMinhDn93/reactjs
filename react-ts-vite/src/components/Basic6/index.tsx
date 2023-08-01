import styles from './Nav.module.css';
import React from 'react';
import NavItem from './NavItem';

let navchilds = [
    { link: '', label: 'Tech' },
    { link: '', label: 'Sport' },
    { link: '', label: 'Fashion' }
]

const Navigation = () => {
    return (
        <nav className={styles.header_nav}>
            <ul>
                <NavItem className={styles.actived} link='home.html' label='home' />
                <NavItem childs={navchilds} className={styles.has_child} link='blog.html' label='Blog' />
                <NavItem link='category.html' label='Category' />
                <NavItem link='product.html' label='Product' />
                <NavItem link='login.html' label='Login' />

            </ul>
        </nav>
    )
}
export default Navigation
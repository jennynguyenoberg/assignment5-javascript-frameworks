'use client';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Homebutton from './homeButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/">
          <Homebutton />
        </Link>
        <span className={styles.navDesc}>Designer & Developer</span>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + ' ' + styles.active
          }
        >
          <li className={styles.navItem}>
            <Link href="/projects">
              <span className={styles.navLink}>Projects &#8600;</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <span className={styles.navLink}>About &#8600;</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <span className={styles.navLink}>Get in touch &#8600;</span>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + ' ' + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.navbarButton}></span>
          <span className={styles.navbarButton}></span>
          <span className={styles.navbarButton}></span>
        </button>
      </nav>
    </div>
  );
}

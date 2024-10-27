import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo-netlify.svg" alt="JC Luxury Transport" className={styles.logo} />
        <h1 className={styles.companyName}>JC Luxury Transport</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Services</Link>
        <Link href="/">Fleet</Link>
        <Link href="/">About Us</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Reviews</Link>
        <Link href="/">Contact</Link>
      </nav>
      <div className={styles.actions}>
        <button className={styles.bookNow}>Book Now</button>
      </div>
    </header>
  );
};

export default Header;

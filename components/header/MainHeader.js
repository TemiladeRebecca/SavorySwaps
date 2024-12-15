'use client';
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import HeaderBackground from "./HeaderBackground.js";
import NavLink from "./navLink.js";

// Function to toggle the menu and button styles
export function toggleMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  
  // Toggle the 'open' class on the hamburger button
  btn.classList.toggle(classes.open);
  
  // Toggle the visibility of the menu (flex or hidden)
  menu.classList.toggle(classes.flex);
}

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoPng} alt="A plate with food on it" priority />
          SavorySwap
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>

          {/* Hamburger button */}
          <div className={classes.hamburgerWrapper}>
            <button
              id="menu-btn"
              type="button"
              className={classes.hamburger}
              onClick={toggleMenu}
            >
              <span className={classes.hamburgerTop}></span>
              <span className={classes.hamburgerMiddle}></span>
              <span className={classes.hamburgerBottom}></span>
            </button>
          </div>

          <div
            id="menu"
            className={classes.menu}
          >
            <Link href="/meals" className={classes.noUnderline}>Browse Meals</Link>
            <Link href="/community" className={classes.noUnderline}>Community</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

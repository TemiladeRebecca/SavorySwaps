//
'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import HeaderBackground from "./HeaderBackground.js";
import NavLink from "./navLink.js";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log("Menu open state:", !isMenuOpen);
  };

  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoPng} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul className={`${isMenuOpen ? classes.hidden : ""}`}>
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
              className={`${classes.hamburger} ${isMenuOpen ? classes.open : ""}`}
              onClick={handleMenuToggle}
            >
              <span className={classes.hamburgerTop}></span>
              <span className={classes.hamburgerMiddle}></span>
              <span className={classes.hamburgerBottom}></span>
            </button>
          </div>

          <div
            id="menu"
            className={`${classes.menu} ${isMenuOpen ? classes.flex : classes.hidden}`}
          >{isMenuOpen && (
            <>
              <Link href="/meals" className={classes.noUnderline}>Browse Meals</Link>
              <Link href="/community" className={classes.noUnderline}>Community</Link>
            </>
          )}
            
          </div>
        </nav>
      </header>
    </>
  );
}

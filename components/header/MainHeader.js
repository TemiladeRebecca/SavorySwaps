import Link from "next/link";
import Image from "next/image";
import logoPng from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import HeaderBackground from "./HeaderBackground.js";
import NavLink from "./navLink.js";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoPng} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies commmunity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

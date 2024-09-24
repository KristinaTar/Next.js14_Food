import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import NavLink from "@/component/NavLink/navLink";

export default function MainHeader() {

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals" menuItemName="Browse Meals"/>
          </li>
          <li>
            <NavLink href="/community" menuItemName="Foodies Community"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

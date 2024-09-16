"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";

type Props = {
  href: string;
  menuItemName: string;
}

export default function NavLink({ href, menuItemName }: Props) {

  const path = usePathname();
  return <Link
    href={href}
    className={path=== href ? `${classes.link}${classes.active}`: classes.link}>
    {menuItemName}
  </Link>;
}
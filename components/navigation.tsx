"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname(); // usePathname 때문에 use client를 쓰라고 함 왜냐면 interacive해야하기 때문
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home {path === "/" ? "🔥" : ""}</Link>
        </li>
        <li>
          <Link href="/about-us">
            About Us {path === "/about-us" ? "🔥" : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

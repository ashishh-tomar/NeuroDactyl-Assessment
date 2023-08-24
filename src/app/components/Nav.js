import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Dropdown from "./Dropdown"
const Nav = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>Products</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>Solutions</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>Advantages</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>Markets</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>News</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>About Us</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='/'>Contacts</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
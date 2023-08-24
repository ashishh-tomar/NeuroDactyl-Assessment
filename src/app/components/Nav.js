import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Dropdown from "./Dropdown"
const Nav = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#products'>Products</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#solution'>Solutions</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#advantages'>Advantages</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#markets'>Markets</Link>
                </li>


                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#news'>News</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#about'>About Us</Link>
                </li>

                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href='#contacts'>Contacts</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
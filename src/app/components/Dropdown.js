import Link from 'next/link'
import styles from "@/app/styles/navbar.module.css"

const Dropdown = () => {
  return (
    <div className='dropdown'>
        <button className='dropbtn'>Products</button>
        <div className='dropdown-content'>
            <Link className={styles.navbarLink} href='/'>Server SDK for Fingerprint Recognition</Link>
            <Link className={styles.navbarLink} href='/'>Server Platform for Fingerprint Recognition</Link>
            <Link className={styles.navbarLink} href='/'>Mobile SDK for touchless Fingerprint Capture</Link>
        </div>

    </div>
  )
}

export default Dropdown
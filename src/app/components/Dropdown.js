
import styles from '@/app/styles/dropdown.module.css';
import Link from 'next/link';

const Dropdown = () => {
  
  return (
    <>
      <div className={styles.dropdown}> 
      <button className={styles.dropbtn}>Products</button>
      <div className={styles.dropdown_content}>
        <Link className={styles.dropdown_content_link} href="/serversdk">Server SDK</Link>
        <Link className={styles.dropdown_content_link} href="serverplatform">Server Platform</Link>
        <Link className={styles.dropdown_content_link} href="mobilesdk">Mobile SDK</Link>
      </div>
      </div>
    </>
  )
};

export default Dropdown;

import heroStyles from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Herosection = () => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>Contactless fingerprint recognition</h1>
            <ul>
              <li>1. Highly Accurate Neural network algorithms</li>
              <li>2. Work with scans and photo images</li>
              <li>3. All types of fingerprints are supported</li>
            </ul>

            <Link href="https://pages.nist.gov/pft/results/pftiii/">
              <button>Top-tier algorithm accuracy in NIST PFT III evaluation</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src='/heroSectionImage.svg' alt="Home Page Image"  width={400} height={500}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Herosection
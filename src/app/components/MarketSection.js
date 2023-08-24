import marketStyles from "@/app/styles/market.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MarketSection = () => {
  return (
    <main className={marketStyles.main_section}>
      <div className={styles.container}>
        <h1>Markets</h1>


        <div className={styles.grid_two_section}>
          <div className={marketStyles.market_content}>
            <h2>National ID</h2>
            <p>National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a "must-have" biometric modality in such systems: it's reliable, unique for any individuals including identical twins and changes less over time than face.
Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer's budget: numbers of required matching servers is up to 100 times less than the same numbers for "traditional" recognition algorithms.</p>
          </div>
          <div className={marketStyles.market_image}>
            <Image
              src="/card.svg"
              alt="Home Page Image"
              width={400}
              height={500}
            />
          </div>
        </div>

        <div className={styles.grid_two_section}>
          <div className={marketStyles.market_image_reverse}>
            <Image
              src="/banks.svg"
              alt="Home Page Image"
              width={400}
              height={500}
            />
          </div>
          <div className={marketStyles.market_content_reverse}>
            <h2>Banks</h2>
            <p>Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing.
Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.</p>
          </div>
        </div>

        <div className={styles.grid_two_section}>
          <div className={marketStyles.market_content}>
            <h2>Governmental Services</h2>
            <p>Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services.
Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.
Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.</p>
          </div>
          <div className={marketStyles.market_image}>
            <Image
              src="/services.svg"
              alt="Home Page Image"
              width={400}
              height={500}
            />
          </div>
        </div>


        <div className={styles.grid_two_section}>
          <div className={marketStyles.market_image_reverse}>
            <Image
              src="/police.svg"
              alt="Home Page Image"
              width={400}
              height={500}
            />
          </div>
          <div className={marketStyles.market_content_reverse}>
            <h2>Police and Migrations</h2>
            <p>Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions.
Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.</p>
          </div>
        </div>

      
      </div>
    </main>
  );
};

export default MarketSection;

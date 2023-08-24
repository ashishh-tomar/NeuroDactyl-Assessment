import advantageStyles from "@/app/styles/advantages.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const AdvantagesSection = () => {
  return (
    <section className={advantageStyles.main_section} id="advantages">
      <div className={styles.container}>
        <div>
          <h1>Advantages</h1>
          <div className={advantageStyles.advantages_content}>
            <div>


            <div className={advantageStyles.advantages_image}>
                <Image src="/rocket.png" width={45} height={45} />
              </div>
              <p className={advantageStyles.bold}>
              Superior accuracy
              </p>
              <div>
                <p>
                Neural network based technology provides
extremely high recognition accuracy
for verification and identification
                </p>
              </div>
            </div>


            <div>
              <div className={advantageStyles.advantages_image}>
                <Image src="/fingerprint-scan.png" width={45} height={45} />
              </div>
              <p className={advantageStyles.bold}>
              Superior accuracy
              </p>
              <div>
                <p>
                Processing of photo images and standard scans
(flats, rolls, latents) with one technology
creating templates compatible between each other
                </p>
              </div>
            </div>


            
            <div>
            <div className={advantageStyles.advantages_image}>
                <Image src="/database.png" width={45} height={45} />
              </div>
              
              <p className={advantageStyles.bold}>
              Fixed size of biometric template
              </p>
            
              <div>
                <p>
                Fingerprint biometric templates
always have standard size - 512 bytes
regardless of fingerprint or image type
                </p>
              </div>
            </div>





          </div>

        
          <div className={advantageStyles.advantages_content}>
            <div>


            <div className={advantageStyles.advantages_image}>
                <Image src="/flash.png" width={45} height={45} />
              </div>
              <p className={advantageStyles.bold}>
              High matching speed
              </p>
              <div>
                <p>
                Matching performance is 100+ million matches
per 1 s on one modern CPU and up to 1 billion
matches per 1 s using batch mode or GPU
                </p>
              </div>
            </div>


            <div>
              <div className={advantageStyles.advantages_image}>
                <Image src="/bubbles.png" width={45} height={45} />
              </div>
              <p className={advantageStyles.bold}>
              DPI tolerant technology
              </p>
              <div>
                <p>
                Algorithm works with images or scans from 250 dpi and higher and doesn't require exact DPI values
(for example, exactly 500 dpi)
                </p>
              </div>
            </div>


            
            <div>
            <div className={advantageStyles.advantages_image}>
                <Image src="/target.png" width={45} height={45} />
              </div>
              
              <p className={advantageStyles.bold}>
              Identification with the highest confidence
              </p>
            
              <div>
                <p>
                By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable
and user-friendly identification
                </p>
              </div>
            </div>





          </div>



        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
import contactStyles from "@/app/styles/contact.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <div id="contacts">
      <div className={styles.container}>
        <div className={contactStyles.contact_content}>
        <h1 >Contact Us</h1>
        <p>
            Any question about our products or technologies? Just text us!
          </p>
        </div>

        <section className={styles.contact_section}>
          
          <ContactCard />
        </section>
      </div>
    </div>
  );
};

export default ContactSection;

import contactStyles from "@/app/styles/contact.module.css"
import styles from "@/app/styles/common.module.css"

const ContactCard = () => {
  return (
   <>
     <div className={contactStyles.container}>
    
        <form className={contactStyles.contact_form} action="#">
        <label className={contactStyles.contact_label}for="name">Name:</label>
        <input className={contactStyles.contact_input} type="text" id="name" name="name" required/>
      
        <label className={contactStyles.contact_label} for="email">Email:</label>
        <input className={contactStyles.contact_input} type="email" id="email" name="email" required />

        <label className={contactStyles.contact_label} for="phone">Phone:</label>
        <input className={contactStyles.contact_input} type="text" id="phone" name="Phone" required />
      
        <label className={contactStyles.contact_label} for="message">Message:</label>
        <textarea className={contactStyles.contact_textarea} id="message" name="message" rows="4" required></textarea>
      
        <button  type="submit">Submit</button>
        </form>
    </div>
   </>
  )
}

export default ContactCard
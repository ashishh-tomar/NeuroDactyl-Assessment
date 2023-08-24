import footerStyles from '@/app/styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <div id={footerStyles.page_container}>
    
    <footer className={footerStyles.footer}>
     <Link href="/">
                <Image src="/logo.svg" alt="logo" width={100} height={40}/>
                <h3>NEURODACTYL</h3>
            </Link>
      <p>All Right Reserved, 2023. Neurodactyl, LLC.
Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street, N15. Identification Number: 400354488
E-mail us: info@neurodactyl.com</p>
    </footer>
    </div>
    
  )
}

export default Footer
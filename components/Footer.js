import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>Stay Connected with JC Luxury Transport</h2>
        <p>
          Join our mailing list to receive the latest news, exclusive offers, and updates on our premium transportation services.
        </p>
        <div className={styles.emailSubscription}>
          <input type="email" placeholder="Enter your email address here" />
          <button>Subscribe Now</button>
        </div>
        <p>By subscribing, you agree with our privacy policy and terms of service.</p>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.companyInfo}>
          <img src="/logo-netlify.svg" alt="JC Luxury Transport Logo" className={styles.logo} />
          <p>
            JC Luxury Transport offers professional and affordable transportation services throughout the city and beyond.
          </p>
          <div className={styles.socialMedia}>
            <a href="#"><img src="/iconsP-facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/iconsP-instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Fleet</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Book Online</a></li>
          </ul>
        </div>

        <div className={styles.services}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Corporate Services</a></li>
            <li><a href="#">Special Events</a></li>
            <li><a href="#">Wedding and Prom</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> City, Country</p>
          <p><i className="fas fa-phone"></i> +123 456 7890</p>
          <p><i className="fas fa-envelope"></i> info@jcluxurytransport.com</p>
          <div className={styles.paymentMethods}>
            <img src="/visa-icon.svg" alt="Visa" />
            <img src="/mastercard-icon.svg" alt="Mastercard" />
            <img src="/amex-icon.svg" alt="Amex" />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <a href="#">Complaints Policy</a> | 
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms & Conditions</a>
        <p>© 2024 JC Luxury Transport</p>
      </div>
    </footer>
  );
}

import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.css'; // Importando o CSS module

export default function Home() {
  return (
    <>
      <Head>
        <title>JC Luxury Transport | Premier Chauffeur Services</title>
        <meta
          name="description"
          content="Experience luxury and comfort with JC Luxury Transport. Reliable chauffeur services for your business and personal travel needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header fora do container */}
      <Header />

      <div className={styles.container}>
        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1>Welcome to JC Luxury Transport</h1>
            <p className={styles.description}>
              Discover the elegance of bespoke transportation, tailored for those who demand the finest.
            </p>
            <button className={styles.ctaButton}>Book Now</button>
          </section>

          {/* Services Section */}
          <section className={styles.services}>
            <h2>Our Services</h2>
            <p>Offering a seamless travel experience with comfort, reliability, and sophistication.</p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>
                <h3>Airport Transfers</h3>
                <p>Smooth and stress-free transfers to and from the airport.</p>
              </div>
              <div className={styles.serviceItem}>
                <h3>Corporate Travel</h3>
                <p>Professional and luxurious travel solutions for business executives.</p>
              </div>
              <div className={styles.serviceItem}>
                <h3>Event Chauffeur</h3>
                <p>Arrive in style for any event or special occasion.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer fora do container */}
      <Footer />
    </>
  );
}

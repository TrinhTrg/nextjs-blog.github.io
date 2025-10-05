import Link from 'next/link';
import styles from '../styles/Page.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <p className={styles.text}>Email: truongtuyettrinh@gmail.com</p>
      <p className={styles.text}>
        LinkedIn: <a className={styles.link} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/</a>
      </p>
      <p className={styles.text}>
        GitHub: <a className={styles.link} href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a>
      </p>
      <Link href="/" className={`${styles.link} ${styles.backLink}`}>← Back to Home</Link>
    </div>
  );
}

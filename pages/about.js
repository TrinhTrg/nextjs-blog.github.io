import Link from 'next/link';
import styles from '../styles/Page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <img src="/image/image.jpg" alt="My profile" width="790" />
      <p className={styles.text}>
        Xin chào! Tôi là <strong>Trương Tuyết Trinh</strong>, một sinh viên yêu thích công nghệ thông tin.
        Tôi đam mê lập trình web, thiết kế giao diện và khám phá các công nghệ mới.
      </p>
      <p className={styles.text}>
        Mục tiêu của tôi là trở thành một lập trình viên chuyên nghiệp, có khả năng xây dựng các dự án
        sáng tạo và hữu ích.
      </p>
      <p className={styles.text}>
        Kỹ năng chính: HTML, CSS, JavaScript, React, Next.js, Node.js
      </p>
      <Link href="/" className={`${styles.link} ${styles.backLink}`}>← Back to Home</Link>
    </div>
  );
}

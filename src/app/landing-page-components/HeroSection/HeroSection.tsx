import styles from "./HeroSection.module.scss";
import { Icon } from "../Icon";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          YOUR QURAN, YOUR WAY
        </div>

        <h1>
          Come closer
          <br />
          to the <span>Quran.</span>
        </h1>

        <p className={styles.heroDescription}>
          Read, reflect, and listen in the language that speaks to you. A
          thoughtful space for your daily connection with the Quran.
        </p>

        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="#download">
            Get Baseerah <Icon name="arrow" size={18} />
          </a>

          <a className={styles.textLink} href="#features">
            Explore the app <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroNote}>
          <span className={styles.avatarStack} aria-hidden="true">
            <i>ا</i>
            <i>ق</i>
            <i>ن</i>
          </span>

          <span>Make space for what matters.</span>
        </div>
      </div>

      <div
        className={styles.heroVisual}
        aria-label="Preview of the Baseerah Quran mobile application"
      >
        <div className={styles.heroOrb} />

        <Image
          src="/images/baseerah-app-mockup.webp"
          alt="Baseerah Quran mobile application displayed on a smartphone"
          className={styles.phoneImage}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </section>
  );
}

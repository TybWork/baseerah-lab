import styles from "./HeroSection.module.scss";
import { Icon } from "../Icon";

export function HeroSection1() {
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
        aria-label="Preview of the Baseerah Quran app"
      >
        <div className={styles.heroOrb} />
        <div className={styles.floatCard}>
          <span className={styles.floatIcon}>
            <Icon name="sparkles" size={17} />
          </span>
          <span>
            <strong>A moment of calm</strong>
            <small>Pick up where you left off</small>
          </span>
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneTop}>
            <span>9:41</span>
            <span className={styles.phoneCamera} />
            <span>●●●</span>
          </div>
          <div className={styles.appTopline}>
            <span className={styles.appBrand}>baseerah</span>
            <span className={styles.appProfile}>ع</span>
          </div>
          <div className={styles.phoneGreeting}>Assalamu alaikum</div>
          <div className={styles.phoneSubheading}>Continue your journey</div>
          <div className={styles.progressCard}>
            <div className={styles.progressLabel}>
              LAST READ <span>•••</span>
            </div>
            <div className={styles.surahArabic}>سُورَةُ الرَّحْمَٰن</div>
            <div className={styles.surahName}>
              Ar-Rahman <span>Surah 55</span>
            </div>
            <div className={styles.progressTrack}>
              <span />
            </div>
            <div className={styles.progressMeta}>
              <span>Ayah 13 of 78</span>
              <span>17%</span>
            </div>
          </div>
          <div className={styles.phoneSectionTitle}>
            Your daily practice <span>See all</span>
          </div>
          <div className={styles.practiceRow}>
            <div className={styles.practiceIcon}>
              <Icon name="book" size={17} />
            </div>
            <div>
              <strong>Read the Quran</strong>
              <small>Explore 114 surahs</small>
            </div>
            <Icon name="arrow" size={15} className={styles.rowArrow} />
          </div>
          <div className={styles.practiceRow}>
            <div className={`${styles.practiceIcon} ${styles.audioIcon}`}>
              <Icon name="headphones" size={17} />
            </div>
            <div>
              <strong>Listen & reflect</strong>
              <small>Choose your reciter</small>
            </div>
            <Icon name="arrow" size={15} className={styles.rowArrow} />
          </div>
          <div className={styles.phoneNav}>
            <span className={styles.activeNav}>
              <Icon name="book" size={16} />
              Read
            </span>
            <span>
              <Icon name="headphones" size={16} />
              Listen
            </span>
            <span>
              <Icon name="bookmark" size={16} />
              Saved
            </span>
          </div>
        </div>
        <div className={styles.audioToast}>
          <span className={styles.toastPlay}>
            <Icon name="play" size={14} />
          </span>
          <span>
            <strong>Surah Ar-Rahman</strong>
            <small>Abdul Rahman Al-Sudais</small>
          </span>
          <span className={styles.audioBars} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    </section>
  );
}

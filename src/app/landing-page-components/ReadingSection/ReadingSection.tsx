import styles from "./ReadingSection.module.scss";
import { Icon } from "../Icon";

export function ReadingSection() {
  return (
    <section className={styles.readingSection} id="reading">
      <div className={styles.readingVisual} aria-hidden="true">
        <div className={styles.readingCard}>
          <div className={styles.readingCardTop}><span>AL-BAQARAH · 2:255</span><Icon name="bookmark" size={18} /></div>
          <div className={styles.verseArabic}>اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ</div>
          <div className={styles.verseDivider}><span>۞</span></div>
          <p>Allah—there is no deity except Him, the Ever-Living, the Sustainer of existence.</p>
          <div className={styles.translationLabel}>SAHIH INTERNATIONAL <span>EN</span></div>
          <div className={styles.tafseerNote}><span className={styles.tafseerAccent} /> <span><strong>Explore the tafseer</strong><small>Understand the meaning behind every ayah</small></span><Icon name="arrow" size={16} /></div>
        </div>
        <div className={styles.readingDecoration}>۞</div>
      </div>
      <div className={styles.readingCopy}>
        <div className={styles.eyebrow}>READ. UNDERSTAND. REFLECT.</div>
        <h2>Let every verse meet you where you are.</h2>
        <p>Follow along in Arabic, then explore translations and tafseers across languages. Read at your pace, and save the verses you want to carry with you.</p>
        <ul className={styles.checkList}>
          <li><span>✓</span> Multiple Quran translations</li>
          <li><span>✓</span> Tafseers in different languages</li>
          <li><span>✓</span> Favourite verses, surahs & duas</li>
        </ul>
        <a className={styles.inlineLink} href="#download">Discover your reading space <Icon name="arrow" size={17} /></a>
      </div>
    </section>
  );
}

import styles from "./ListeningSection.module.scss";
import { Icon } from "../Icon";

const reciters = [
  { initials: "س", name: "Abdul Rahman Al-Sudais", detail: "Murattal · Makkah", selected: true },
  { initials: "م", name: "Mishary Rashid Alafasy", detail: "Murattal · Kuwait", selected: false },
  { initials: "ع", name: "Abdul Basit Abdus Samad", detail: "Mujawwad · Egypt", selected: false },
];

export function ListeningSection() {
  return (
    <section className={styles.listeningSection}>
      <div className={styles.listeningCopy}>
        <div className={styles.eyebrow}>LISTEN & REFLECT</div>
        <h2>Find the voice that moves you.</h2>
        <p>Let the words flow around you. Choose a Qari you love, press play, and make room for a little stillness in your day.</p>
        <a className={styles.inlineLink} href="#download">Explore Quran recitations <Icon name="arrow" size={17} /></a>
      </div>
      <div className={styles.playerCard}>
        <div className={styles.playerHeader}><span>NOW PLAYING</span><span className={styles.liveDot} /> <span>RECITATION</span></div>
        <div className={styles.playerSurah}>سُورَةُ الرَّحْمَٰن</div>
        <div className={styles.playerSurahName}>Surah Ar-Rahman <span>· 78 Ayahs</span></div>
        <div className={styles.waveform} aria-hidden="true">
          {Array.from({ length: 44 }, (_, index) => (
            <i key={index} style={{ height: `${15 + ((index * 17 + 13) % 35)}px` }} />
          ))}
        </div>
        <div className={styles.audioProgress}><span /></div>
        <div className={styles.audioTimes}><span>08:24</span><span>16:32</span></div>
        <div className={styles.playerControls}>
          <button type="button" aria-label="Previous track" className={styles.controlButton}>◀◀</button>
          <button type="button" aria-label="Play recitation" className={styles.bigPlay}><Icon name="play" size={19} /></button>
          <button type="button" aria-label="Next track" className={styles.controlButton}>▶▶</button>
        </div>
        <div className={styles.reciterDivider}><span>CHOOSE A QARI</span><span>View all</span></div>
        <div className={styles.reciterList}>
          {reciters.map((reciter) => (
            <div className={styles.reciterRow} key={reciter.name}>
              <span className={`${styles.reciterAvatar} ${reciter.selected ? styles.selectedAvatar : ""}`}>{reciter.initials}</span>
              <span className={styles.reciterText}><strong>{reciter.name}</strong><small>{reciter.detail}</small></span>
              {reciter.selected && <span className={styles.selectedCheck}>✓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

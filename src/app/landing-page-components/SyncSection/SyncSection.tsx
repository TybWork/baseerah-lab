import styles from "./SyncSection.module.scss";
import { Icon } from "../Icon";

export function SyncSection() {
  return (
    <section className={styles.syncSection}>
      <div className={styles.syncBadge}><Icon name="sync" size={21} /></div>
      <div className={styles.syncCopy}>
        <div className={styles.eyebrow}>YOUR JOURNEY, KEPT IN SYNC</div>
        <h2>Your saved moments travel with you.</h2>
        <p>Sign in with your Google account to keep your favourite verses, surahs, and duas together with you—ready whenever you return.</p>
      </div>
      <div className={styles.syncVisual} aria-hidden="true">
        <div className={styles.syncLine} />
        <div className={styles.syncNode}><Icon name="heart" size={19} /><span>Favourites</span></div>
        <div className={styles.syncCenter}><span className={styles.googleG}>G</span><strong>Google account</strong><small>Secure sync</small></div>
        <div className={styles.syncNode}><Icon name="bookmark" size={19} /><span>Your library</span></div>
      </div>
    </section>
  );
}

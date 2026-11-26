import { GooglePlayIcon } from "@/icons";
import { Icon } from "../Icon";
import styles from "./DownloadSection.module.scss";

export function DownloadSection() {
  return (
    <section className={styles.downloadSection} id="download">
      <div className={styles.downloadOrnament} aria-hidden="true">
        ۞
      </div>
      <div className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</div>
      <h2>Make room for a more meaningful day.</h2>
      <p>
        Bring your Quran journey with you. Download Baseerah and begin wherever
        you are.
      </p>
      <a
        className={styles.storeButton}
        href={process.env.NEXT_PUBLIC_QURAN_APP_URL ?? ""}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.playStoreIcon}>
          <GooglePlayIcon fontSize={20} />
        </span>
        <span>
          <small>GET IT ON</small>
          <strong>Google Play</strong>
        </span>
        <Icon name="arrow" size={18} className={styles.storeArrow} />
      </a>
      <span className={styles.downloadFootnote}>
        A little time for what matters most.
      </span>
    </section>
  );
}

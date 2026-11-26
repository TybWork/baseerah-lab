import styles from "./FeaturesSection.module.scss";
import { Icon } from "../Icon";

const features = [
  {
    icon: "globe" as const,
    title: "Read in your language",
    description: "Explore Quran translations and tafseers in the language you understand best.",
  },
  {
    icon: "headphones" as const,
    title: "Listen your way",
    description: "Choose from a selection of Qaris and listen to beautiful Quran recitations.",
  },
  {
    icon: "heart" as const,
    title: "Keep what moves you",
    description: "Save your favourite verses, surahs, and duas to revisit whenever you need.",
  },
];

export function FeaturesSection() {
  return (
    <section className={styles.featuresSection} id="features">
      <div className={styles.sectionIntro}>
        <div className={styles.eyebrow}>MADE FOR YOUR JOURNEY</div>
        <h2>A little more meaning, in every moment.</h2>
        <p>Everything you need to build a Quran practice that feels personal.</p>
      </div>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <article className={styles.featureCard} key={feature.title}>
            <div className={styles.featureIcon}><Icon name={feature.icon} size={22} /></div>
            <span className={styles.featureNumber}>0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

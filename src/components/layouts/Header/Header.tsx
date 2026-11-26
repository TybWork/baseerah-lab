import { Icon } from "@/app/landing-page-components/Icon";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label="Baseerah home">
        <Image
          className={styles.desktopLogo}
          src="/images/desktop-logo.webp"
          alt=""
          width={1688}
          height={452}
          priority
        />
        <Image
          className={styles.mobileLogo}
          src="/images/mobile-logo.webp"
          alt=""
          width={483}
          height={452}
          priority
        />
      </Link>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link href="/#features">Features</Link>
        <Link href="/#reading">The experience</Link>
        <Link href="/#download">Get the app</Link>
      </nav>
      <Link className={styles.headerCta} href="/#download">
        Start reading <Icon name="arrow" size={16} />
      </Link>
    </header>
  );
}

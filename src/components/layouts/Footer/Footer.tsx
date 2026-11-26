import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const footerLinks = [{ label: "Privacy Policy", href: "/baseerah/privacy" }];

export async function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.footerWordmark}
        href="/"
        aria-label="Baseerah home"
      >
        <Image
          className={styles.desktopLogo}
          src="/images/desktop-logo.webp"
          alt=""
          width={1688}
          height={452}
        />
        <Image
          className={styles.mobileLogo}
          src="/images/mobile-logo.webp"
          alt=""
          width={483}
          height={452}
        />
      </Link>

      <p>A more meaningful connection with the Quran.</p>

      <nav className={styles.footerLinks} aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <span className={styles.copyright}>© 2026 Baseerah</span>
    </footer>
  );
}

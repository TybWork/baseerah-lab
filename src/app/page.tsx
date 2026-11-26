import {
  DownloadSection,
  FeaturesSection,
  HeroSection,
  ListeningSection,
  ReadingSection,
  SyncSection,
} from "./landing-page-components";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ReadingSection />
      <ListeningSection />
      <SyncSection />
      <DownloadSection />
    </>
  );
}

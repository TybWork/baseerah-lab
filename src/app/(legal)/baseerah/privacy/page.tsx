import Link from "next/link";
import { LegalContent } from "../../components";
import styles from "../../legalPages.module.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <LegalContent>
        <LegalContent.MainHeader
          heading="Privacy Policy"
          operatedBy="Baseerah Labs"
          effectiveDate="November 2026"
          lastReviewed="November 2026"
        />
      </LegalContent>

      <div className={styles.mainWrapper}>
        <LegalContent>
          <LegalContent.P>
            Your privacy matters to us. Baseerah is designed to help you connect
            with the Quran and build a consistent worship routine. This Privacy
            Policy explains what information we collect, how we use it, how it
            is stored, and the choices you have when using the Baseerah mobile
            application and related services.
          </LegalContent.P>

          <LegalContent.P>
            We aim to collect only the information needed to provide, maintain,
            and improve the Baseerah experience. We do not sell your personal
            information.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">1. Who We Are</LegalContent.Heading>

          <LegalContent.P>
            Baseerah is a Quran and Islamic lifestyle application developed and
            operated by Baseerah Labs.
          </LegalContent.P>

          <LegalContent.P>
            For questions about this Privacy Policy, personal information, or
            your privacy rights, contact us:
          </LegalContent.P>

          <LegalContent.P>
            <strong>Company:</strong> Baseerah Labs
          </LegalContent.P>

          <LegalContent.P>
            <strong>Website:</strong>{" "}
            <a href={process.env.NEXT_PUBLIC_CLIENT_URL}>baseerahlabs.com</a>
          </LegalContent.P>

          <LegalContent.P>
            <strong>Privacy Contact:</strong>{" "}
            <a href="mailto:hi@tybwork.com">hi@tybwork.com</a>
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            2. Information We Collect
          </LegalContent.Heading>

          <LegalContent.P>
            Depending on the features you use, Baseerah may process the
            following categories of information:
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            2.1 Account and Authentication Information
          </LegalContent.Heading>

          <LegalContent.P>
            If you create an account or sign in using Google, we may process
            information associated with your authentication, including:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              Name, profile picture and email address provided by your
              authentication provider.
            </LegalContent.Li>
            <LegalContent.Li>
              Google account identifier used to identify your account.
            </LegalContent.Li>
            <LegalContent.Li>
              Profile information made available through Google Sign-In.
            </LegalContent.Li>
            <LegalContent.Li>
              Authentication tokens required to maintain your session.
            </LegalContent.Li>
          </LegalContent.Ul>

          <LegalContent.Heading as="h3">
            2.2 Quran and Reading Activity
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah provides Quran reading and learning features. Depending on
            the features you use, information associated with your activity may
            include:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              Favorite Ayahs, Surahs, and other saved content.
            </LegalContent.Li>
            <LegalContent.Li>
              Reading progress and selected Quran content.
            </LegalContent.Li>
            <LegalContent.Li>
              Selected translation and language preferences.
            </LegalContent.Li>
            <LegalContent.Li>
              Saved references and footnote interactions.
            </LegalContent.Li>
          </LegalContent.Ul>

          <LegalContent.P>
            Some Quran content, translations, and reading data may be cached
            locally on your device to support offline access. Where account
            synchronization is available, selected user data, such as favorites,
            may also be processed by our backend services.
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            2.3 Location Information
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah may request access to your device location to provide
            location-dependent features, including prayer timings and related
            Islamic reminders.
          </LegalContent.P>

          <LegalContent.P>
            Location access is permission-based. You can manage or revoke
            location permission through your device settings. Some
            location-dependent features may not work correctly without this
            permission.
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            2.4 Notification Information
          </LegalContent.Heading>

          <LegalContent.P>
            If you enable notifications, Baseerah may schedule and deliver
            reminders such as Verse of the Day, prayer notifications, and other
            reminders you choose to receive.
          </LegalContent.P>

          <LegalContent.P>
            Notification preferences and scheduling information may be stored
            locally on your device to manage scheduled notifications.
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            2.5 Technical and Device Information
          </LegalContent.Heading>

          <LegalContent.P>
            When you access our services, technical information may be processed
            to operate, secure, troubleshoot, and maintain the application. This
            may include:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              Device operating system and application version.
            </LegalContent.Li>
            <LegalContent.Li>
              Network and connection information.
            </LegalContent.Li>
            <LegalContent.Li>
              Server request information and timestamps.
            </LegalContent.Li>
            <LegalContent.Li>
              Error and diagnostic information, where available.
            </LegalContent.Li>
          </LegalContent.Ul>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            3. How We Use Your Information
          </LegalContent.Heading>

          <LegalContent.P>
            We use information for purposes related to providing and maintaining
            Baseerah, including:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              Creating and managing user accounts.
            </LegalContent.Li>
            <LegalContent.Li>
              Authenticating users and maintaining secure sessions.
            </LegalContent.Li>
            <LegalContent.Li>
              Providing Quran text, translations, Tafsir, and footnotes.
            </LegalContent.Li>
            <LegalContent.Li>
              Saving and synchronizing favorites where supported.
            </LegalContent.Li>
            <LegalContent.Li>
              Maintaining reading preferences and app functionality.
            </LegalContent.Li>
            <LegalContent.Li>
              Calculating location-dependent prayer timings.
            </LegalContent.Li>
            <LegalContent.Li>
              Scheduling and delivering requested notifications.
            </LegalContent.Li>
            <LegalContent.Li>
              Maintaining application security and preventing misuse.
            </LegalContent.Li>
            <LegalContent.Li>
              Identifying and fixing technical problems.
            </LegalContent.Li>
            <LegalContent.Li>
              Improving application performance and reliability.
            </LegalContent.Li>
            <LegalContent.Li>
              Responding to support requests and user enquiries.
            </LegalContent.Li>
          </LegalContent.Ul>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            4. Local Storage and Offline Access
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah uses local device storage, including SQLite, to make
            selected Quran-related content available without an active internet
            connection.
          </LegalContent.P>

          <LegalContent.P>
            Depending on the features you use, locally stored information may
            include:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              Quran Arabic text and related metadata.
            </LegalContent.Li>
            <LegalContent.Li>
              Downloaded or cached translations.
            </LegalContent.Li>
            <LegalContent.Li>
              Cached Tafsir and related content.
            </LegalContent.Li>
            <LegalContent.Li>
              Local notification scheduling information.
            </LegalContent.Li>
            <LegalContent.Li>
              Other application data required for offline functionality.
            </LegalContent.Li>
          </LegalContent.Ul>

          <LegalContent.P>
            Local application data is stored within the app&apos;s private
            storage area. Removing the application may remove locally stored
            application data. Information synchronized with our backend may
            remain associated with your account until it is deleted in
            accordance with our retention practices.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            5. Third-Party Services
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah may rely on third-party services and providers to deliver
            certain features. These providers may process information when
            required to perform their services.
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            5.1 Google Sign-In
          </LegalContent.Heading>

          <LegalContent.P>
            We use Google authentication to allow users to sign in. When you
            choose Google Sign-In, Google processes your authentication
            information under its own privacy policy. We receive the information
            required to verify your identity and manage your Baseerah account.
          </LegalContent.P>

          <LegalContent.P>
            Learn more about Google&apos;s privacy practices at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            5.2 Quran Content Services
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah may retrieve Quran-related content, translations, and other
            religious resources through external content services, including
            Quran Foundation APIs. Requests to these services may be processed
            to retrieve the content requested by the application.
          </LegalContent.P>

          <LegalContent.Heading as="h3">
            5.3 Infrastructure and Hosting Providers
          </LegalContent.Heading>

          <LegalContent.P>
            Our application infrastructure may use third-party hosting,
            database, and server providers to operate backend services,
            authenticate users, synchronize supported information, and maintain
            application functionality.
          </LegalContent.P>

          <LegalContent.P>
            Third-party providers are expected to process information only as
            necessary to provide their services and in accordance with
            applicable contractual and legal requirements.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            6. Notifications and User Permissions
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah may request certain device permissions to provide optional
            application features.
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              <strong>Location:</strong> Used for location-dependent features
              such as prayer timings.
            </LegalContent.Li>
            <LegalContent.Li>
              <strong>Notifications:</strong> Used to deliver reminders,
              including Verse of the Day and prayer-related notifications.
            </LegalContent.Li>
            <LegalContent.Li>
              <strong>Scheduled alarms:</strong> Used where supported by the
              device to deliver notifications at scheduled times.
            </LegalContent.Li>
          </LegalContent.Ul>

          <LegalContent.P>
            You can manage permissions through your device settings. Disabling a
            permission may limit the availability of the feature that depends on
            it.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            7. Sharing of Information
          </LegalContent.Heading>

          <LegalContent.P>
            We do not sell your personal information. We may share or make
            information available only where necessary for legitimate
            operational purposes, including:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              <strong>Service providers:</strong> Providers that support
              authentication, hosting, databases, infrastructure, and
              application functionality.
            </LegalContent.Li>
            <LegalContent.Li>
              <strong>Content providers:</strong> External services required to
              retrieve Quran-related content.
            </LegalContent.Li>
            <LegalContent.Li>
              <strong>Legal requirements:</strong> Where disclosure is required
              by applicable law, regulation, or valid legal process.
            </LegalContent.Li>
            <LegalContent.Li>
              <strong>Security:</strong> Where reasonably necessary to protect
              users, our services, or the rights and safety of others.
            </LegalContent.Li>
          </LegalContent.Ul>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">8. Data Security</LegalContent.Heading>

          <LegalContent.P>
            We take reasonable technical and organizational measures to protect
            information processed through Baseerah against unauthorized access,
            loss, misuse, alteration, or disclosure.
          </LegalContent.P>

          <LegalContent.P>
            These measures may include access controls, secure authentication
            mechanisms, protected server communications, and appropriate
            infrastructure safeguards.
          </LegalContent.P>

          <LegalContent.P>
            However, no application, internet transmission, or electronic
            storage method can be guaranteed to be completely secure.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            9. Data Retention and Deletion
          </LegalContent.Heading>

          <LegalContent.P>
            We retain personal information only for as long as reasonably
            necessary to provide our services, maintain user accounts, meet
            operational requirements, resolve disputes, and comply with
            applicable legal obligations.
          </LegalContent.P>

          <LegalContent.P>
            You may request access to, correction of, or deletion of personal
            information associated with your account by contacting us at:
          </LegalContent.P>

          <LegalContent.P>
            <a href="mailto:hi@tybwork.com">hi@tybwork.com</a>
          </LegalContent.P>

          <LegalContent.P>
            Deleting the application from your device does not necessarily
            delete information already synchronized with our backend.
            Account-related deletion requests may require verification before
            processing.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            10. Your Privacy Rights
          </LegalContent.Heading>

          <LegalContent.P>
            Depending on your location and applicable privacy laws, you may have
            rights regarding your personal information, including:
          </LegalContent.P>

          <LegalContent.Ul>
            <LegalContent.Li>
              The right to request access to your personal information.
            </LegalContent.Li>
            <LegalContent.Li>
              The right to request correction of inaccurate information.
            </LegalContent.Li>
            <LegalContent.Li>
              The right to request deletion of your information.
            </LegalContent.Li>
            <LegalContent.Li>
              The right to object to or restrict certain processing.
            </LegalContent.Li>
            <LegalContent.Li>
              The right to withdraw consent where processing is based on
              consent.
            </LegalContent.Li>
            <LegalContent.Li>
              The right to request a copy of certain information in a portable
              format.
            </LegalContent.Li>
          </LegalContent.Ul>

          <LegalContent.P>
            To exercise any applicable privacy rights, contact us using the
            details provided in this policy.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            11. Children&apos;s Privacy
          </LegalContent.Heading>

          <LegalContent.P>
            Baseerah is not intended to knowingly collect personal information
            from children without appropriate authorization where required by
            applicable law.
          </LegalContent.P>

          <LegalContent.P>
            If you believe that a child has provided personal information to us
            inappropriately, please contact us so that we can review the matter
            and take appropriate action.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            12. International Data Transfers
          </LegalContent.Heading>

          <LegalContent.P>
            Depending on the location of our infrastructure and service
            providers, information may be processed or stored in countries other
            than your country of residence.
          </LegalContent.P>

          <LegalContent.P>
            Where required by applicable law, we take appropriate steps to
            ensure that international transfers of personal information are
            protected by suitable safeguards.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">
            13. Changes to This Privacy Policy
          </LegalContent.Heading>

          <LegalContent.P>
            We may update this Privacy Policy from time to time to reflect
            changes in our application, services, technology, or applicable
            legal requirements.
          </LegalContent.P>

          <LegalContent.P>
            When we make changes, we will update the effective date and last
            reviewed date at the beginning of this policy. Where required, we
            will provide additional notice through the application or another
            appropriate channel.
          </LegalContent.P>
        </LegalContent>

        <LegalContent>
          <LegalContent.Heading as="h2">14. Contact Us</LegalContent.Heading>

          <LegalContent.P>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or how Baseerah handles your information, please contact us:
          </LegalContent.P>

          <LegalContent.P>
            <strong>Company:</strong> Baseerah Labs
          </LegalContent.P>

          <LegalContent.P>
            <strong>Website:</strong>{" "}
            <Link href={process.env.NEXT_PUBLIC_CLIENT_URL ?? ""}>
              baseerahlabs.com
            </Link>
          </LegalContent.P>

          <LegalContent.P>
            <strong>Privacy Email:</strong>{" "}
            <a href="mailto:hi@tybwork.com">hi@tybwork.com</a>
          </LegalContent.P>

          <LegalContent.P>
            We will review privacy-related enquiries and respond in accordance
            with applicable legal requirements.
          </LegalContent.P>
        </LegalContent>
      </div>

      <LegalContent.Hr />
    </>
  );
};

export default PrivacyPolicy;

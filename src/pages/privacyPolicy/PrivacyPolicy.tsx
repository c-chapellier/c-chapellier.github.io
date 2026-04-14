import React from 'react'
import './PrivacyPolicy.scss'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: April 14, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how the Position History mobile
            application ({'"the App"'}) handles data and protects your privacy.
            We are committed to being transparent about data practices.
          </p>
        </section>

        <section>
          <h2>2. Data Collection</h2>
          <p>
            <strong>
              The App does not collect, store, or process any personal data.
            </strong>
          </p>
          <ul>
            <li>No location data is collected remotly or shared, all data is kept on-device</li>
            <li>No personal information is saved</li>
            <li>No user analytics or tracking is performed</li>
            <li>No cookies or tracking technologies are used</li>
          </ul>
        </section>

        <section>
          <h2>3. No Backend Infrastructure</h2>
          <p>
            The App operates entirely on your device with no backend server. All
            functionality is self-contained and runs locally on your mobile
            device. There are no remote servers collecting or storing any
            information about you or your usage.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            <strong>
              We do not share any data with third parties because the App does
              not collect any data.
            </strong>{' '}
            There are no integrations with external services that would transmit
            your information.
          </p>
        </section>

        <section>
          <h2>5. Device Permissions</h2>
          <p>
            Depending on the features used, the App may request certain device
            permissions (such as location access). These permissions are only
            used for the specific features you explicitly use within the App and
            are never transmitted, stored, or shared externally.
          </p>
        </section>

        <section>
          <h2>6. Security</h2>
          <p>
            Since the App operates locally without transmitting data, there is
            no risk of data being intercepted during transmission. However, the
            security of your device is your responsibility.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated {'"Last updated"'} date.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or the App
            {String.fromCharCode(39)}s privacy practices, please contact me at{' '}
            <a href="mailto:chapellier.corentin@icloud.com">chapellier.corentin@icloud.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy

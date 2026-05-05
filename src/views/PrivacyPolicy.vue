<template>
  <div class="legal-page">
    <div class="container legal-container">
      <div class="legal-header">
        <h1 class="legal-title">Privacy Policy</h1>
        <p class="legal-date">Last updated: May 4, 2026</p>
      </div>

      <div class="legal-body">
        <section class="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you request a demo, contact us, or use our services. This may include your name, email address, company name, job title, and any other information you choose to provide.</p>
          <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.</p>
        </section>

        <section class="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you technical notices, updates, and security alerts</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
          <p>We may disclose your information when required by law or to protect our rights, property, or safety.</p>
        </section>

        <section class="legal-section">
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section class="legal-section">
          <h2>5. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.</p>
        </section>

        <section class="legal-section">
          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, please contact us at <a href="mailto:privacy@mutesecurity.com">privacy@mutesecurity.com</a>.</p>
        </section>

        <section class="legal-section">
          <h2>7. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section class="legal-section">
          <h2>8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.</p>
        </section>

        <section class="legal-section">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.</p>
        </section>

        <section class="legal-section">
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@mutesecurity.com">privacy@mutesecurity.com</a> or at Mute Security, Inc.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'PrivacyPolicy' };
</script>

<style scoped>
.legal-page {
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 100vh;
}

.legal-container {
  max-width: 720px;
}

.legal-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-subtle);
}

.legal-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.legal-date {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.legal-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.legal-section h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.875rem;
}

.legal-section p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 0.75rem;
}

.legal-section p:last-child {
  margin-bottom: 0;
}

.legal-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.legal-section ul li {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.75;
  position: relative;
  padding-left: 1rem;
}

.legal-section ul li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--text-muted);
}

.legal-section a {
  color: var(--blue-primary, #3b82f6);
  text-decoration: none;
}

.legal-section a:hover {
  text-decoration: underline;
}
</style>

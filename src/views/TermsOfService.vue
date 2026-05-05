<template>
  <div class="legal-page">
    <div class="container legal-container">
      <div class="legal-header">
        <h1 class="legal-title">Terms of Service</h1>
        <p class="legal-date">Last updated: May 4, 2026</p>
      </div>

      <div class="legal-body">
        <section class="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Mute Security website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
        </section>

        <section class="legal-section">
          <h2>2. Description of Services</h2>
          <p>Mute Security provides AI-powered cryptographic security solutions for enterprises, including discovery, management, and upgrade of cryptographic infrastructure to prepare for the post-quantum era.</p>
        </section>

        <section class="legal-section">
          <h2>3. Use of Services</h2>
          <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Services in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Interfere with or disrupt the integrity or performance of the Services</li>
            <li>Reproduce, duplicate, copy, sell, or resell any portion of the Services without express written permission</li>
            <li>Use the Services to transmit any harmful, offensive, or unlawful content</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>4. Intellectual Property</h2>
          <p>All content, features, and functionality of the Services, including but not limited to text, graphics, logos, and software, are the exclusive property of Mute Security, Inc. and are protected by applicable intellectual property laws.</p>
          <p>You may not use our trademarks, trade names, or logos without our prior written consent.</p>
        </section>

        <section class="legal-section">
          <h2>5. Confidentiality</h2>
          <p>Any non-public information you receive about Mute Security's products, technology, or business in connection with your use of the Services is considered confidential and must not be disclosed to third parties without our prior written consent.</p>
        </section>

        <section class="legal-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>The Services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p>We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
        </section>

        <section class="legal-section">
          <h2>7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Mute Security, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services, even if we have been advised of the possibility of such damages.</p>
        </section>

        <section class="legal-section">
          <h2>8. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Mute Security, Inc. and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from your use of the Services or violation of these Terms.</p>
        </section>

        <section class="legal-section">
          <h2>9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.</p>
        </section>

        <section class="legal-section">
          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page with a new effective date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.</p>
        </section>

        <section class="legal-section">
          <h2>11. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@mutesecurity.com">legal@mutesecurity.com</a> or at Mute Security, Inc.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'TermsOfService' };
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

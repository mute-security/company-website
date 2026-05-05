<template>
  <footer class="footer">
    <div class="divider"></div>
    <div class="footer-inner container">
      <div class="footer-brand">
        <img src="../assets/logo.svg" alt="Mute Security" class="footer-logo" />
        <p class="footer-tagline">Post-Quantum Cryptography<br>for the Enterprise.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/mutesecurity" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-col-title">Resources</h4>
        <ul class="footer-links">
          <li><a href="mailto:contact@mutesecurity.com" class="footer-link">Contact</a></li>
          <li><router-link to="/privacy" class="footer-link">Privacy Policy</router-link></li>
          <li><router-link to="/terms" class="footer-link">Terms of Service</router-link></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="footer-copy">© 2026 Mute Security, Inc. All rights reserved.</span>
        <span class="footer-legal">
          <router-link to="/privacy" class="footer-link-sm">Privacy</router-link>
          <router-link to="/terms" class="footer-link-sm">Terms</router-link>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'Footer' };
</script>

<style scoped>
.footer {
  background-color: var(--bg-surface);
  margin-top: auto;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.footer-brand { display: flex; flex-direction: column; gap: 1rem; }
.footer-logo {
  height: 22px;
  width: 82px;
  opacity: 0.9;
}
.footer-tagline {
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.6;
}
.social-links { display: flex; gap: 0.75rem; margin-top: 0.25rem; }
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  transition: color var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
}
.social-link:hover {
  color: var(--text-primary);
  border-color: var(--border-default);
  background-color: var(--blue-bg);
}

.footer-col { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-col-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.footer-link {
  font-size: 0.8125rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.footer-link:hover { color: var(--text-secondary); }

.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 1rem 0;
}
.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.footer-copy { font-size: 0.75rem; color: var(--text-muted); }
.footer-legal { display: flex; gap: 1.25rem; }
.footer-link-sm {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.footer-link-sm:hover { color: var(--text-secondary); }

@media (max-width: 1024px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .footer-inner { grid-template-columns: 1fr; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>

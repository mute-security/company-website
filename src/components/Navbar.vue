<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="nav-inner container">
      <router-link to="/" class="nav-brand" @click="closeMenu">
        <img src="../assets/logo.svg" alt="Mute Security" class="nav-logo" />
      </router-link>

      <div class="nav-right">
        <a href="mailto:contact@mutesecurity.com" class="btn btn-primary">
          Book a Demo
        </a>
      </div>


    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrolled: false,
      menuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 16;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}
.navbar--scrolled {
  background-color: rgba(11, 17, 32, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border-subtle);
}

.nav-inner {
  display: flex;
  align-items: center;
  height: 68px;
  gap: 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.nav-logo {
  height: 22px;
  width: auto;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
}

.nav-center {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 6px;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  letter-spacing: 0.01em;
}
.nav-link:hover,
.nav-link--active {
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.06);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 22px;
}
.hamburger span {
  display: block;
  height: 1.5px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.hamburger.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 1.25rem 1.5rem;
  background-color: rgba(11, 17, 32, 0.97);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--border-subtle);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.mobile-menu--open {
  max-height: 300px;
}
.mobile-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 10px 4px;
  width: 100%;
  border-bottom: 1px solid var(--border-subtle);
  transition: color var(--transition-fast);
}
.mobile-link:hover { color: var(--text-primary); }

@media (max-width: 768px) {
  .nav-center,
  .nav-right { display: none; }
  .nav-toggle { display: flex; }
  .mobile-menu { display: flex; }
}
</style>

<template>
  <div class="home">

    <!-- ═══ HERO ═══ -->
    <section class="hero" ref="heroSection" @mousemove="handleMouseMove">
      <canvas ref="heroCanvas" class="hero-canvas"></canvas>
      <div class="hero-grid-overlay"></div>
      <div class="hero-radials"></div>

      <div class="container hero-content">
        <div class="hero-text">
  

          <h1 class="hero-headline" v-reveal="{ delay: 80 }">
            AI-Powered Cryptographic Security
            <span class="gradient-text">for the Post-Quantum Era.</span>
          </h1>

          <p class="hero-sub" v-reveal="{ delay: 160 }">
            Discover, manage, and safely upgrade your cryptography.
            Protect against <em>"Harvest Now, Decrypt Later"</em> attacks
            without breaking production.
          </p>

          <div class="hero-ctas" v-reveal="{ delay: 240 }">
            <a href="mailto:contact@mutesecurity.com" class="btn btn-primary btn-lg">
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="hero-trust" v-reveal="{ delay: 320 }">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green)" stroke="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Authorizing for FedRAMP</span>
          </div>
        </div>

        <div class="hero-visual" v-reveal="{ delay: 120 }">
          <div class="dashboard-card">
            <div class="dc-header">
              <div class="dc-title-row">
                <div class="dc-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span class="dc-name">CBOM Dashboard</span>
              </div>
              <span class="dc-live"><span class="dc-live-dot"></span>LIVE</span>
            </div>

            <div class="dc-stats">
              <div class="dc-stat">
                <span class="dc-stat-num">247</span>
                <span class="dc-stat-lbl">Assets Scanned</span>
              </div>
              <div class="dc-stat dc-stat--warn">
                <span class="dc-stat-num">12</span>
                <span class="dc-stat-lbl">Critical</span>
              </div>
              <div class="dc-stat dc-stat--ok">
                <span class="dc-stat-num">89%</span>
                <span class="dc-stat-lbl">PQC Coverage</span>
              </div>
            </div>

            <div class="dc-section-label">Algorithm Inventory</div>
            <div class="dc-bars">
              <div class="dc-bar-row">
                <span class="dc-algo">RSA-4096</span>
                <div class="dc-bar-track"><div class="dc-bar-fill dc-bar--ok" :style="{ '--bar-w': '72%' }"></div></div>
                <span class="dc-algo-count ok">126 ✓</span>
              </div>
              <div class="dc-bar-row">
                <span class="dc-algo">AES-256-GCM</span>
                <div class="dc-bar-track"><div class="dc-bar-fill dc-bar--ok" :style="{ '--bar-w': '58%' }"></div></div>
                <span class="dc-algo-count ok">84 ✓</span>
              </div>
              <div class="dc-bar-row">
                <span class="dc-algo">TLS 1.2</span>
                <div class="dc-bar-track"><div class="dc-bar-fill dc-bar--warn" :style="{ '--bar-w': '34%' }"></div></div>
                <span class="dc-algo-count warn">38 ⚠</span>
              </div>
              <div class="dc-bar-row">
                <span class="dc-algo">RSA-1024</span>
                <div class="dc-bar-track"><div class="dc-bar-fill dc-bar--crit" :style="{ '--bar-w': '13%' }"></div></div>
                <span class="dc-algo-count crit">12 ✗</span>
              </div>
            </div>

            <div class="dc-ai-queue">
              <div class="dc-ai-header">
                <span class="dc-section-label" style="margin:0">AI Remediation Queue</span>
                <button class="dc-run-btn">Run Simulation ▶</button>
              </div>
              <div class="dc-queue-item dc-queue-item--done">
                <span class="dc-qi-icon">✓</span>
                <span>Upgrade TLS 1.2 → 1.3 on <code>api-gateway</code></span>
              </div>
              <div class="dc-queue-item dc-queue-item--active">
                <span class="dc-qi-icon dc-qi-spin">⟳</span>
                <span>Simulating RSA-1024 removal on <code>legacy-svc</code>…</span>
              </div>
            </div>
          </div>

          <div class="dc-scan-strip">
            <span class="dc-scan-label">Agentless scan running</span>
            <div class="dc-scan-bar"><div class="dc-scan-progress"></div></div>
            <span class="dc-scan-pct">67%</span>
          </div>
        </div>
      </div>

      <div class="hero-scroll-hint">
        <div class="scroll-chevron"></div>
      </div>
    </section>

    <!-- ═══ SOCIAL PROOF BAR ═══ -->
    <section class="proof-bar">
      <div class="container proof-inner">
        <p class="proof-label">Trusted by industry leaders · Developed with a Fortune 500 Design Partner</p>
        <div class="proof-logos">
          <div class="proof-logo" v-for="(label, i) in proofLogos" :key="i">
            <svg :viewBox="label.vb" class="proof-icon" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="label.path"/></svg>
            <span>{{ label.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROBLEM SECTION ═══ -->
    <section class="problem">
      <div class="container">
        <div class="problem-card card card-glow-blue" v-reveal>
          <div class="problem-deco">
            <span class="mono-label">The Challenge</span>
          </div>
          <div class="problem-grid">
            <div class="problem-left">
              <h2 class="problem-headline">The Cryptography<br><span class="gradient-text">Blind Spot.</span></h2>
              <p class="problem-body">
                Large organizations have <strong>zero visibility</strong> into where their
                vulnerable cryptography is hidden - making NIST, FedRAMP, and DORA
                compliance a nightmare. Worse, updating it risks breaking critical
                production systems.
              </p>
              <div class="problem-quote">
                <blockquote>"We didn't know we had RSA-1024 in production until it was flagged by an auditor."</blockquote>
                <cite>- CISO, Fortune 100 Manufacturing Company</cite>
              </div>
            </div>
            <div class="problem-stats">
              <div class="p-stat" v-for="stat in problemStats" :key="stat.val">
                <span class="p-stat-val" :style="{ color: stat.color }">{{ stat.val }}</span>
                <span class="p-stat-lbl">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SOLUTION (BENTO) ═══ -->
    <section class="solution">
      <div class="container">
        <div class="solution-header" v-reveal>
          <span class="section-label">The Platform</span>
          <h2 class="section-title">One Platform.<br>Three Capabilities.</h2>
          <p class="section-body">
            From discovery to remediation to governance - a complete
            cryptographic control layer for your enterprise.
          </p>
        </div>

        <div class="bento-grid">
          <div
            class="bento-card card"
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            v-reveal="{ delay: i * 100 }"
            :class="pillar.cls"
          >
            <div class="bento-icon" :style="{ background: pillar.iconBg }">
              <svg :viewBox="pillar.icon.vb" fill="none" :stroke="pillar.icon.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path :d="pillar.icon.d"/></svg>
            </div>
            <div class="bento-tag badge" :class="pillar.badgeCls">
              <span class="badge-dot" :style="{ background: pillar.dotColor }"></span>
              {{ pillar.tag }}
            </div>
            <h3 class="bento-title">{{ pillar.title }}</h3>
            <p class="bento-body">{{ pillar.body }}</p>
            <ul class="bento-list">
              <li v-for="item in pillar.items" :key="item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :stroke="pillar.dotColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ BOTTOM CTA ═══ -->
    <section class="bottom-cta">
      <div class="container bottom-cta-inner" v-reveal>
        <div class="bottom-cta-text">
          <h2 class="section-title" style="margin-bottom: 0.75rem">Ready to eliminate<br>your cryptographic blind spot?</h2>
          <p class="section-body">See how Mute Security maps your entire cryptographic estate for Cloud, SaaS and on-prem.</p>
        </div>
        <div class="bottom-cta-actions">
          <a href="mailto:contact@mutesecurity.com" class="btn btn-primary btn-lg">Request a Demo</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      animFrameId: null,
      mouseX: 0,
      mouseY: 0,
      particles: [],
proofLogos: [
  // Defense: shield + check (trust / protection)
  { name: 'Global Defense', vb: '0 0 24 24', path: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4zm-1 11l-2-2-1.5 1.5L11 16l6-6-1.5-1.5L11 13z' },

  // Aerospace: jet silhouette
  { name: 'Aero Systems', vb: '0 0 24 24', path: 'M2 16l20-4-20-4v4l14 0-14 0v4z' },

  // Government: classical building (pillars)
  { name: 'Government Vendors', vb: '0 0 24 24', path: 'M3 10h18v2H3v-2zm2 3h2v6H5v-6zm4 0h2v6H9v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6zM2 20h20v2H2v-2zM12 2l10 6H2l10-6z' },

  // Banking: bank building icon
  { name: 'Banking', vb: '0 0 24 24', path: 'M3 10h18v2H3v-2zm2 3h2v6H5v-6zm4 0h2v6H9v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6zM2 20h20v2H2v-2zM12 2l10 6H2l10-6z' },

  // Healthcare: medical cross
  { name: 'Healthcare', vb: '0 0 24 24', path: 'M10 2h4v6h6v4h-6v6h-4v-6H4v-4h6V2z' },
],
      problemStats: [
        { val: '95%', label: 'of organizations do not have a complete inventory of their cryptographic assets', color: 'var(--red)' },
{ val: 'New Standards', label: '47-day max certificate lifetime, transition from RSA and ECC to PQC (Kyber and Dilithium)', color: 'var(--amber)' },
        { val: 'Deadlines', label: 'PQC migration deadlines with attestations for inventory, planning, and migration', color: 'var(--blue-light)' },
      ],
      pillars: [
        {
          cls: 'bento-card--blue',
          title: 'Discover & Assess',
          tag: '01 · Discovery',
          badgeCls: '',
          dotColor: 'var(--blue)',
          iconBg: 'rgba(59,130,246,0.1)',
          icon: { vb: '0 0 24 24', color: 'var(--blue-light)', d: 'M21 21l-4.35-4.35M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16zM11 8v3l2 2' },
          body: 'Agentless scanning for hybrid environments. Hybrid Cryptographic Bill of Materials (CBOM) generated automatically.',
          items: ['Multi-cloud & on-prem coverage', 'No endpoint agents required', 'Hybrid CBOM generation', 'NIST PQC readiness scoring'],
        },
        {
          cls: 'bento-card--green',
          title: 'Remediate with AI',
          tag: '02 · Remediation',
          badgeCls: 'badge-green',
          dotColor: 'var(--green)',
          iconBg: 'rgba(16,185,129,0.1)',
          icon: { vb: '0 0 24 24', color: 'var(--green-light)', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
          body: 'Human-in-the-loop AI agents simulate configuration changes to predict impact - enabling safe, automated upgrades at scale.',
          items: ['Impact simulation before any change', 'Human approval workflow', 'Automated rollback safety net', 'Audit trail for every action'],
        },
        {
          cls: 'bento-card--teal',
          title: 'Govern & Automate',
          tag: '03 · Governance',
          badgeCls: 'badge-amber',
          dotColor: 'var(--green-light)',
          iconBg: 'rgba(16,185,129,0.08)',
          icon: { vb: '0 0 24 24', color: '#34D399', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          body: 'Enforce policies enterprise-wide. React fast to emerging threats. Continuous compliance reporting for NIST, FedRAMP, and DORA.',
          items: ['Policy-as-code enforcement', 'Certificate lifecycle automation', 'Continuous compliance reports', 'Real-time alert integrations'],
        },
      ],
    };
  },
  mounted() {
    this.initCanvas();
    this.animate();
    window.addEventListener('resize', this.resizeCanvas);
  },
  beforeUnmount() {
    cancelAnimationFrame(this.animFrameId);
    window.removeEventListener('resize', this.resizeCanvas);
  },
  methods: {
    handleMouseMove(e) {
      const rect = this.$refs.heroSection.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    resizeCanvas() {
      const canvas = this.$refs.heroCanvas;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    },
    initCanvas() {
      const canvas = this.$refs.heroCanvas;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.particles = [];
      for (let i = 0; i < 55; i++) {
        this.particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.45 + 0.05,
        });
      }
    },
    animate() {
      const canvas = this.$refs.heroCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;

      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        if (this.mouseX && this.mouseY) {
          const dx = this.mouseX - p.x;
          const dy = this.mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            p.vx += (dx / dist) * 0.15;
            p.vy += (dy / dist) * 0.15;
          }
        }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.8) { p.vx = (p.vx / spd) * 1.8; p.vy = (p.vy / spd) * 1.8; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.opacity})`;
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(59,130,246,0.07)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }

      this.animFrameId = requestAnimationFrame(this.animate);
    }
  }
};
</script>

<style scoped>
/* ═══ HERO ═══ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
  background: var(--bg-primary);
}
.hero-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}
.hero-grid-overlay {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
  opacity: 0.6;
}
.hero-radials {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 15% 55%, rgba(59,130,246,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 85% 20%, rgba(16,185,129,0.05) 0%, transparent 55%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 4rem;
}

.hero-text { display: flex; flex-direction: column; gap: 1.5rem; }
.hero-badge { align-self: flex-start; }
.hero-headline {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.04em;
  display: flex;
  flex-direction: column;
  gap: 0.15em;
}
.hero-sub {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 520px;
}
.hero-sub em { font-style: normal; color: var(--text-blue); }
.hero-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.hero-trust {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* Dashboard Card */
.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.dashboard-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.1);
  animation: float 6s ease-in-out infinite;
}
.dc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dc-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dc-icon {
  width: 26px; height: 26px;
  background: rgba(59,130,246,0.12);
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
}
.dc-name {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.03em;
}
.dc-live {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--green-light);
  letter-spacing: 0.08em;
}
.dc-live-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 1.5s ease-in-out infinite;
}
.dc-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.dc-stat {
  background: rgba(59,130,246,0.05);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.dc-stat--warn .dc-stat-num { color: var(--amber); }
.dc-stat--ok .dc-stat-num { color: var(--green-light); }
.dc-stat-num {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}
.dc-stat-lbl {
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.dc-section-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: -0.25rem;
}
.dc-bars { display: flex; flex-direction: column; gap: 0.55rem; }
.dc-bar-row {
  display: grid;
  grid-template-columns: 90px 1fr 50px;
  align-items: center;
  gap: 0.5rem;
}
.dc-algo {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-secondary);
  white-space: nowrap;
}
.dc-bar-track {
  height: 4px;
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
  overflow: hidden;
}
.dc-bar-fill {
  height: 100%;
  border-radius: 4px;
  width: 0;
  animation: bar-grow 1.2s ease forwards;
  animation-delay: 0.4s;
}
@keyframes bar-grow {
  to { width: var(--bar-w); }
}
.dc-bar--ok { background: linear-gradient(90deg, var(--green), var(--green-light)); }
.dc-bar--warn { background: linear-gradient(90deg, var(--amber), #FCD34D); }
.dc-bar--crit { background: linear-gradient(90deg, var(--red), #FCA5A5); }
.dc-algo-count {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  text-align: right;
}
.dc-algo-count.ok { color: var(--green-light); }
.dc-algo-count.warn { color: var(--amber); }
.dc-algo-count.crit { color: var(--red); }

.dc-ai-queue {
  background: rgba(0,0,0,0.2);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.dc-ai-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dc-run-btn {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--blue-light);
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.25);
  border-radius: 4px;
  padding: 3px 8px;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.dc-run-btn:hover { background: rgba(59,130,246,0.2); }
.dc-queue-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
}
.dc-queue-item code {
  background: rgba(255,255,255,0.06);
  padding: 1px 5px;
  border-radius: 3px;
  color: var(--text-blue);
}
.dc-qi-icon { font-size: 0.75rem; width: 14px; flex-shrink: 0; }
.dc-queue-item--done .dc-qi-icon { color: var(--green); }
.dc-queue-item--active { color: var(--text-secondary); }
.dc-queue-item--active .dc-qi-icon { color: var(--blue-light); }
@keyframes spin { to { transform: rotate(360deg); } }
.dc-qi-spin { display: inline-block; animation: spin 1.5s linear infinite; }

/* Scan strip */
.dc-scan-strip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
}
.dc-scan-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  white-space: nowrap;
}
.dc-scan-bar {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px;
  overflow: hidden;
}
.dc-scan-progress {
  height: 100%;
  width: 67%;
  background: linear-gradient(90deg, var(--blue), var(--blue-light));
  border-radius: 3px;
  position: relative;
}
.dc-scan-progress::after {
  content: '';
  position: absolute;
  right: 0;
  top: -2px;
  width: 6px;
  height: 7px;
  background: var(--blue-light);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--blue-glow);
}
.dc-scan-pct {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--blue-light);
}

.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.scroll-chevron {
  width: 20px; height: 20px;
  border-right: 1.5px solid var(--text-muted);
  border-bottom: 1.5px solid var(--text-muted);
  transform: rotate(45deg);
  animation: bounce-down 2s ease-in-out infinite;
  margin: 0 auto;
}
@keyframes bounce-down {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.5; }
  50% { transform: rotate(45deg) translateY(4px); opacity: 1; }
}

/* ═══ PROOF BAR ═══ */
.proof-bar {
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(15, 26, 46, 0.6);
  padding: 2rem 0;
}
.proof-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.proof-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
}
.proof-logos {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.proof-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.35;
  transition: opacity var(--transition-base);
  color: var(--text-secondary);
}
.proof-logo:hover { opacity: 0.7; }
.proof-icon { width: 20px; height: 20px; }
.proof-logo span {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* ═══ PROBLEM ═══ */
.problem {
  padding: 6rem 0;
}
.problem-card {
  padding: 3rem;
  position: relative;
  overflow: hidden;
}
.problem-card::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -10%;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%);
  pointer-events: none;
}
.problem-deco { margin-bottom: 0.5rem; }
.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-top: 1.5rem;
}
.problem-headline {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.15;
  margin-bottom: 1.25rem;
}
.problem-body {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
.problem-body strong { color: var(--text-primary); }
.problem-quote {
  border-left: 2px solid var(--blue);
  padding-left: 1.25rem;
}
.problem-quote blockquote {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}
.problem-quote cite {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  font-style: normal;
}
.problem-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}
.p-stat {
  padding: 1.5rem;
  background: rgba(0,0,0,0.2);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
}
.p-stat-val {
  display: block;
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}
.p-stat-lbl {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* ═══ SOLUTION BENTO ═══ */
.solution {
  padding: 2rem 0 6rem;
}
.solution-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.solution-header .section-body { margin: 0 auto; }
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.bento-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}
.bento-card--blue { border-color: rgba(59,130,246,0.2); }
.bento-card--blue::before {
  content: '';
  position: absolute; bottom: -30px; right: -30px;
  width: 120px; height: 120px;
  background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.bento-card--green { border-color: rgba(16,185,129,0.2); }
.bento-card--green::before {
  content: '';
  position: absolute; bottom: -30px; right: -30px;
  width: 120px; height: 120px;
  background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.bento-card--teal { border-color: rgba(52,211,153,0.15); }
.bento-icon {
  width: 44px; height: 44px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}
.bento-tag { align-self: flex-start; }
.bento-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.bento-body {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}
.bento-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.bento-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

/* ═══ BOTTOM CTA ═══ */
.bottom-cta {
  padding: 5rem 0;
  background:
    radial-gradient(ellipse 60% 100% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%),
    var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}
.bottom-cta-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 3rem;
}
.bottom-cta-text .section-body { max-width: 480px; }
.bottom-cta-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .hero-content { grid-template-columns: 1fr; gap: 3rem; }
  .hero-visual { order: -1; }
  .dashboard-card { max-width: 480px; margin: 0 auto; }
  .problem-grid { grid-template-columns: 1fr; gap: 2rem; }
  .bento-grid { grid-template-columns: 1fr; }
  .bottom-cta-inner { grid-template-columns: 1fr; }
  .bottom-cta-actions { align-items: flex-start; flex-direction: row; flex-wrap: wrap; }
}
@media (max-width: 768px) {
  .hero { padding-top: 68px; }
  .hero-headline { font-size: 2rem; }
  .problem-card { padding: 1.75rem; }
}
</style>

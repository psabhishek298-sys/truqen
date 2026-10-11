<template>
  <footer class="site-footer">
    <div class="footer-glow" />
    <div class="footer-inner">

      <!-- Top row: brand + nav columns -->
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="brand-logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#06B6D4" stroke-width="1.5" />
              <circle cx="14" cy="14" r="5" fill="#06B6D4" opacity="0.8" />
              <circle cx="14" cy="6" r="2" fill="#06B6D4" opacity="0.5" />
              <circle cx="14" cy="22" r="2" fill="#06B6D4" opacity="0.5" />
              <circle cx="6" cy="14" r="2" fill="#06B6D4" opacity="0.5" />
              <circle cx="22" cy="14" r="2" fill="#06B6D4" opacity="0.5" />
            </svg>
            <span class="brand-name">Truqen</span>
          </div>
          <p class="brand-tagline">
            Next-generation interfaces built on<br />physics, emotion, and real-time interaction.
          </p>
          <div class="social-links">
            <a href="#" aria-label="GitHub" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Discord" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <nav class="footer-nav">
          <div class="nav-col" v-for="col in navColumns" :key="col.title">
            <h4 class="nav-col-title">{{ col.title }}</h4>
            <ul>
              <li v-for="link in col.links" :key="link">
                <a href="#" class="nav-link">{{ link }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Divider -->
      <div class="footer-divider" />

      <!-- Bottom row -->
      <div class="footer-bottom">
        <p class="copyright">© {{ year }} Truqen. All rights reserved.</p>
        <div class="legal-links">
          <a href="#" class="legal-link">Privacy Policy</a>
          <span class="legal-dot">·</span>
          <a href="#" class="legal-link">Terms of Service</a>
          <span class="legal-dot">·</span>
          <a href="#" class="legal-link">Cookies</a>
        </div>
        <div class="status-pill">
          <span class="status-dot" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const navColumns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API Reference', 'Components', 'GitHub'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
]
</script>

<style scoped>
.site-footer {
  position: relative;
  background: #020b12;
  border-top: 1px solid rgba(6, 182, 212, 0.12);
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.footer-inner {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
}

/* Top */
.footer-top {
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
}

/* Brand */
.footer-brand {
  flex: 0 0 280px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.brand-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #e0f2fe;
  letter-spacing: -0.02em;
}

.brand-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(148, 163, 184, 0.65);
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(6, 182, 212, 0.2);
  background: rgba(6, 182, 212, 0.06);
  color: rgba(148, 163, 184, 0.7);
  text-decoration: none;
  transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s;
}

.social-link:hover {
  color: #06B6D4;
  background: rgba(6, 182, 212, 0.14);
  border-color: rgba(6, 182, 212, 0.5);
  transform: translateY(-2px);
}

/* Nav */
.footer-nav {
  flex: 1;
  display: flex;
  gap: 2.5rem;
  justify-content: flex-end;
}

.nav-col {
  min-width: 120px;
}

.nav-col-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #67e8f9;
  margin: 0 0 1rem;
}

.nav-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(148, 163, 184, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #e0f2fe;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(6, 182, 212, 0.1);
  margin-bottom: 1.75rem;
}

/* Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(100, 116, 139, 0.7);
  margin: 0;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legal-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(100, 116, 139, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.legal-link:hover { color: #67e8f9; }

.legal-dot {
  color: rgba(100, 116, 139, 0.4);
  font-size: 0.8rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(148, 163, 184, 0.6);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(34, 197, 94, 0.2);
  background: rgba(34, 197, 94, 0.05);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
  animation: statusPulse 2.5s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 2.5rem;
  }
  .footer-brand { flex: none; }
  .footer-nav { justify-content: flex-start; flex-wrap: wrap; gap: 2rem; }
  .footer-bottom { flex-direction: column; align-items: center; text-align: center; }
}
</style>

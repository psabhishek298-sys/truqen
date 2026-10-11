<template>
  <section class="hero-section">
    <!-- Interactive DotField Background -->
    <DotField
      :dot-radius="1.5"
      :dot-spacing="14"
      :bulge-strength="70"
      :glow-radius="180"
      :sparkle="true"
      :wave-amplitude="0"
      gradient-from="#00f0ff"
      gradient-to="rgba(0, 240, 255, 0.12)"
      glow-color="#020813"
      style="position: absolute; inset: 0;"
    />

    <!-- Ambient glowing gradients for depth -->
    <div class="ambient-glow glow-left" />
    <div class="ambient-glow glow-right" />

    <!-- Wave particle mesh at bottom -->
    <div class="bottom-wave-particles" />

    <!-- Main Container -->
    <div class="hero-container">
      <!-- LEFT COLUMN -->
      <div class="left-col">
        <!-- Top Badge -->
        <div class="badge-pill">
          <span class="badge-dot" />
          <span class="badge-text">WEBSITE UNDER DEVELOPMENT</span>
        </div>

        <!-- Headline: Truqen (TechText animation) + Coming Soon -->
        <div class="brand-title-wrap">
          <div class="tech-text-box">
            <ClientOnly>
              <TechText
                text="Truqen"
                :font-size="115"
                :font-weight="800"
                color="#ffffff"
                secondary-color="#00f0ff"
                :secondary-from="3"
                align="left"
                accent-color="#00f0ff"
                reveal="letter"
                :dash-length="4"
                :dash-gap="2"
                :specks="15"
                :selection="true"
                :labels="true"
                :draggable="true"
                :sweep="true"
                :speed="1"
              />
            </ClientOnly>
          </div>
          <h1 class="coming-soon-title">
            Coming <span class="cyan-text">Soon</span>
          </h1>
        </div>

        <!-- Subtitle -->
        <div class="subtitle-box">
          <p class="sub-line">We’re building something exceptional.</p>
          <p class="sub-line">A new digital experience from Truqen is on the way.</p>
        </div>

        <!-- Progress Bar (70%) -->
        <div class="progress-section">
          <div class="progress-track">
            <div class="progress-bar-fill">
              <div class="progress-shimmer" />
            </div>
          </div>
          <span class="progress-label">70%</span>
        </div>

        <!-- Services Row -->
        <div class="services-row">
          <!-- Web Dev -->
          <div class="service-item">
            <div class="service-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div class="service-text">
              <span class="service-title">Web</span>
              <span class="service-sub">Development</span>
            </div>
          </div>

          <div class="service-divider" />

          <!-- Mobile App Dev -->
          <div class="service-item">
            <div class="service-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
                <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2.5" />
              </svg>
            </div>
            <div class="service-text">
              <span class="service-title">Mobile App</span>
              <span class="service-sub">Development</span>
            </div>
          </div>

          <div class="service-divider" />

          <!-- Custom Software -->
          <div class="service-item">
            <div class="service-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <div class="service-text">
              <span class="service-title">Custom</span>
              <span class="service-sub">Software Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Crystalized Ball + Orbit Rings + Callout Annotations -->
      <div class="right-col">
        <div class="visual-wrap">
          <!-- 3D Orbiting Rings -->
          <div class="orbit-ring ring-1" />
          <div class="orbit-ring ring-2" />
          <div class="orbit-glow-disc" />

          <!-- CrystalizedBall Container -->
          <div class="ball-wrapper">
            <ClientOnly>
              <CrystalizedBall
                preset="aurora"
                color="#00f0ff"
                :size="0.8"
                :crackle="0.9"
                :fill="0.4"
                :interactive="true"
                :hover-strength="0.8"
                :strands="6"
                :flares="0.9"
                :glow="1.3"
                :sparks="0.8"
                :particle-count="16000"
                particle-shape="round"
                :depth="0.75"
                :sway="0.35"
                :twinkle="0.8"
                :haze="0.9"
                :dust-speed="1.4"
              />
            </ClientOnly>
          </div>

          <!-- Annotation Pin: IDEAS (Top Right) -->
          <div class="pin pin-ideas">
            <svg class="pin-line" width="90" height="40" viewBox="0 0 90 40" fill="none">
              <circle cx="6" cy="10" r="3.5" fill="#00f0ff" />
              <polyline points="10 10, 45 10, 85 36" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.85" />
            </svg>
            <div class="pin-content">
              <span class="pin-node-dot" />
              <span class="pin-label">IDEAS</span>
            </div>
          </div>

          <!-- Annotation Pin: DEVELOP (Middle Right) -->
          <div class="pin pin-develop">
            <svg class="pin-line" width="80" height="20" viewBox="0 0 80 20" fill="none">
              <circle cx="68" cy="10" r="3.5" fill="#00f0ff" />
              <line x1="6" y1="10" x2="64" y2="10" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.85" />
            </svg>
            <div class="pin-content">
              <span class="pin-node-dot" />
              <span class="pin-label">DEVELOP</span>
            </div>
          </div>

          <!-- Annotation Pin: LAUNCH (Bottom Right) -->
          <div class="pin pin-launch">
            <svg class="pin-line" width="80" height="50" viewBox="0 0 80 50" fill="none">
              <circle cx="68" cy="40" r="3.5" fill="#00f0ff" />
              <polyline points="20 6, 45 40, 64 40" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.85" />
            </svg>
            <div class="pin-content">
              <span class="pin-node-dot" />
              <span class="pin-label">LAUNCH</span>
            </div>
          </div>

          <!-- Annotation Pin: DESIGN (Middle Left) -->
          <div class="pin pin-design">
            <svg class="pin-line" width="80" height="30" viewBox="0 0 80 30" fill="none">
              <circle cx="70" cy="15" r="3.5" fill="#00f0ff" />
              <line x1="8" y1="15" x2="66" y2="15" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.85" />
            </svg>
            <div class="pin-content">
              <span class="pin-label">DESIGN</span>
              <span class="pin-node-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DotField from './DotField.vue'
import CrystalizedBall from './CrystalizedBall.vue'
import TechText from './TechText.vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #02070e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 5rem;
}

/* Ambient glows */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.25;
}

.glow-left {
  top: 15%;
  left: 5%;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, transparent 70%);
}

.glow-right {
  top: 25%;
  right: 5%;
  width: 580px;
  height: 580px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%);
}

/* Bottom decorative wave simulation */
.bottom-wave-particles {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background:
    radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0, 240, 255, 0.12) 0%, transparent 70%),
    linear-gradient(to top, rgba(2, 7, 14, 0.95) 10%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Main Layout Grid */
.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.95fr;
  align-items: center;
  gap: 3.5rem;
}

/* LEFT COLUMN */
.left-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

/* Badge */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 1.2rem;
  border-radius: 9999px;
  background: rgba(0, 240, 255, 0.06);
  border: 1px solid rgba(0, 240, 255, 0.32);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 10px #00f0ff;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 10px #00f0ff; }
  50% { transform: scale(1.4); opacity: 0.6; box-shadow: 0 0 18px #00f0ff; }
}

.badge-text {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #5eead4;
}

/* Brand Title Wrap */
.brand-title-wrap {
  width: 100%;
  margin-bottom: 1.6rem;
}

.tech-text-box {
  position: relative;
  width: 100%;
  max-width: 580px;
  height: 125px;
  margin-left: -6px; /* align flush with text below */
}

.coming-soon-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(3rem, 6vw, 5.2rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 0 35px rgba(255, 255, 255, 0.1);
}

.cyan-text {
  color: #00f0ff;
  text-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.25);
}

/* Subtitle */
.subtitle-box {
  margin-bottom: 2.2rem;
}

.sub-line {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.65;
  margin: 0;
}

/* Progress Section */
.progress-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 480px;
  margin-bottom: 3.2rem;
}

.progress-track {
  flex: 1;
  height: 10px;
  border-radius: 9999px;
  background: rgba(15, 30, 48, 0.85);
  border: 1px solid rgba(0, 240, 255, 0.2);
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
}

.progress-bar-fill {
  position: relative;
  height: 100%;
  width: 70%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #0284c7 0%, #00f0ff 75%, #a5f3fc 100%);
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.85), 0 0 30px rgba(0, 240, 255, 0.4);
  animation: load-progress 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes load-progress {
  0% { width: 0%; }
  100% { width: 70%; }
}

.progress-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  animation: shimmer-bar 2.4s infinite;
}

@keyframes shimmer-bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

.progress-label {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #e0f2fe;
  letter-spacing: 0.02em;
}

/* Services Row */
.services-row {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  transition: transform 0.25s ease;
}

.service-item:hover {
  transform: translateY(-2px);
}

.service-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 240, 255, 0.06);
  border: 1px solid rgba(0, 240, 255, 0.35);
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00f0ff;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.service-item:hover .service-icon-box {
  border-color: #00f0ff;
  box-shadow: 0 0 24px rgba(0, 240, 255, 0.35);
}

.service-text {
  display: flex;
  flex-direction: column;
}

.service-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #f0f9ff;
  letter-spacing: -0.01em;
}

.service-sub {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.72rem;
  color: rgba(148, 163, 184, 0.75);
}

.service-divider {
  width: 1px;
  height: 38px;
  background: rgba(0, 240, 255, 0.18);
}

/* RIGHT COLUMN */
.right-col {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.visual-wrap {
  position: relative;
  width: 560px;
  height: 560px;
  max-width: 90vw;
  max-height: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 3D Orbiting Rings */
.orbit-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  border: 1.5px solid rgba(0, 240, 255, 0.38);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.1);
}

.ring-1 {
  width: 520px;
  height: 240px;
  transform: rotate(-25deg);
  animation: ring-pulse 6s ease-in-out infinite alternate;
}

.ring-2 {
  width: 480px;
  height: 210px;
  transform: rotate(40deg);
  border-color: rgba(0, 240, 255, 0.25);
  animation: ring-pulse 7s ease-in-out infinite alternate-reverse;
}

@keyframes ring-pulse {
  0% { opacity: 0.65; transform: rotate(-25deg) scale(0.98); }
  100% { opacity: 1; transform: rotate(-25deg) scale(1.02); }
}

.orbit-glow-disc {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(0, 240, 255, 0.05) 55%, transparent 75%);
  pointer-events: none;
  filter: blur(15px);
  animation: disc-glow 4s ease-in-out infinite alternate;
}

@keyframes disc-glow {
  0% { transform: scale(0.95); opacity: 0.7; }
  100% { transform: scale(1.05); opacity: 1; }
}

/* Ball Wrapper */
.ball-wrapper {
  position: relative;
  z-index: 5;
  width: 440px;
  height: 440px;
  max-width: 80vw;
  max-height: 80vw;
}

/* Callout Pins */
.pin {
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.pin:hover {
  transform: scale(1.08);
}

.pin-content {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.pin-node-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
  animation: node-pulse 2s ease-in-out infinite;
}

@keyframes node-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.6; }
}

.pin-label {
  font-family: 'Inter', ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #00f0ff;
  text-shadow: 0 0 12px rgba(0, 240, 255, 0.7);
  transition: text-shadow 0.2s, color 0.2s;
}

.pin:hover .pin-label {
  color: #ffffff;
  text-shadow: 0 0 16px #00f0ff, 0 0 25px #00f0ff;
}

.pin-line {
  position: absolute;
  pointer-events: none;
  filter: drop-shadow(0 0 6px rgba(0, 240, 255, 0.6));
}

/* Position Pins precisely matching reference */
/* 1. IDEAS (top right) */
.pin-ideas {
  top: 10%;
  right: 18%;
  flex-direction: column;
  align-items: flex-start;
}
.pin-ideas .pin-line {
  top: 14px;
  left: 3px;
  transform: rotate(-10deg);
}

/* 2. DEVELOP (middle right) */
.pin-develop {
  top: 48%;
  right: -2%;
}
.pin-develop .pin-line {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}

/* 3. LAUNCH (bottom right) */
.pin-launch {
  bottom: 18%;
  right: 14%;
}
.pin-launch .pin-line {
  bottom: 12px;
  right: 95%;
  transform: rotate(-15deg);
}

/* 4. DESIGN (middle left) */
.pin-design {
  top: 44%;
  left: -4%;
}
.pin-design .pin-line {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}

/* Responsive Breakpoints */
@media (max-width: 1080px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-top: 2rem;
  }
  .left-col {
    align-items: center;
    text-align: center;
  }
  .badge-pill {
    align-self: center;
  }
  .tech-text-box {
    margin-left: 0;
  }
  .services-row {
    justify-content: center;
  }
  .progress-section {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 3rem 1rem;
  }
  .tech-text-box {
    height: 90px;
  }
  .coming-soon-title {
    font-size: 2.6rem;
  }
  .visual-wrap {
    width: 340px;
    height: 340px;
  }
  .ball-wrapper {
    width: 280px;
    height: 280px;
  }
  .ring-1 { width: 340px; height: 160px; }
  .ring-2 { width: 320px; height: 140px; }
  .services-row {
    flex-direction: column;
    gap: 1.2rem;
    align-items: stretch;
    width: 100%;
  }
  .service-divider {
    display: none;
  }
}
</style>

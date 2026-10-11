<template>
  <div class="dot-field-container" v-bind="$attrs">
    <canvas
      ref="canvasRef"
      style="position: absolute; inset: 0; width: 100%; height: 100%;"
    />
    <svg
      ref="svgRef"
      style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"
    >
      <defs>
        <radialGradient :id="glowId">
          <stop offset="0%" :stop-color="glowColor" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle
        ref="glowRef"
        cx="-9999"
        cy="-9999"
        :r="glowRadius"
        :fill="`url(#${glowId})`"
        style="opacity: 0; will-change: opacity;"
      />
    </svg>
    <!-- slot so hero content sits above the canvas -->
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, useId } from 'vue'

const props = defineProps({
  dotRadius:    { type: Number, default: 1.5 },
  dotSpacing:   { type: Number, default: 14 },
  cursorRadius: { type: Number, default: 500 },
  cursorForce:  { type: Number, default: 0.1 },
  bulgeOnly:    { type: Boolean, default: true },
  bulgeStrength:{ type: Number, default: 67 },
  glowRadius:   { type: Number, default: 160 },
  sparkle:      { type: Boolean, default: false },
  waveAmplitude:{ type: Number, default: 0 },
  gradientFrom: { type: String, default: 'rgba(168, 85, 247, 0.35)' },
  gradientTo:   { type: String, default: 'rgba(180, 151, 207, 0.25)' },
  glowColor:    { type: String, default: '#120F17' },
})

const TWO_PI = Math.PI * 2
const canvasRef = ref(null)
const svgRef    = ref(null)
const glowRef   = ref(null)
const glowId    = `dot-field-glow-${useId()}`

let dots = []
let mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 }
let size  = { w: 0, h: 0, offsetX: 0, offsetY: 0 }
let glowOpacity = 0
let engagement  = 0
let rafId       = null
let resizeTimer = null
let speedInterval = null
let frameCount  = 0
let ctx         = null
const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)

function buildDots(w, h) {
  const step = props.dotRadius + props.dotSpacing
  const cols = Math.floor(w / step)
  const rows = Math.floor(h / step)
  const padX = (w % step) / 2
  const padY = (h % step) / 2
  dots = new Array(rows * cols)
  let idx = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const ax = padX + col * step + step / 2
      const ay = padY + row * step + step / 2
      dots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay }
    }
  }
}

function doResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.parentElement.getBoundingClientRect()
  const w = rect.width
  const h = rect.height
  canvas.width  = w * dpr
  canvas.height = h * dpr
  canvas.style.width  = `${w}px`
  canvas.style.height = `${h}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  size = { w, h, offsetX: rect.left + window.scrollX, offsetY: rect.top + window.scrollY }
  buildDots(w, h)
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(doResize, 100)
}

function onMouseMove(e) {
  mouse.x = e.pageX - size.offsetX
  mouse.y = e.pageY - size.offsetY
}

function tick() {
  frameCount++
  const { w, h } = size
  const m = mouse
  const len = dots.length
  const t = frameCount * 0.02

  const targetEng = Math.min(m.speed / 5, 1)
  engagement += (targetEng - engagement) * 0.06
  if (engagement < 0.001) engagement = 0
  const eng = engagement

  glowOpacity += (eng - glowOpacity) * 0.08
  const glowEl = glowRef.value
  if (glowEl) {
    glowEl.setAttribute('cx', m.x)
    glowEl.setAttribute('cy', m.y)
    glowEl.style.opacity = glowOpacity
  }

  ctx.clearRect(0, 0, w, h)
  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, props.gradientFrom)
  grad.addColorStop(1, props.gradientTo)
  ctx.fillStyle = grad

  const cr   = props.cursorRadius
  const crSq = cr * cr
  const rad  = props.dotRadius / 2
  const isBulge = props.bulgeOnly

  ctx.beginPath()

  for (let i = 0; i < len; i++) {
    const d = dots[i]
    const dx = m.x - d.ax
    const dy = m.y - d.ay
    const distSq = dx * dx + dy * dy

    if (distSq < crSq && eng > 0.01) {
      const dist = Math.sqrt(distSq)
      if (isBulge) {
        const factor = 1 - dist / cr
        const push = factor * factor * props.bulgeStrength * eng
        const angle = Math.atan2(dy, dx)
        d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.15
        d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.15
      } else {
        const angle = Math.atan2(dy, dx)
        const move = (500 / dist) * (m.speed * props.cursorForce)
        d.vx += Math.cos(angle) * -move
        d.vy += Math.sin(angle) * -move
      }
    } else if (isBulge) {
      d.sx += (d.ax - d.sx) * 0.1
      d.sy += (d.ay - d.sy) * 0.1
    }

    if (!isBulge) {
      d.vx *= 0.9
      d.vy *= 0.9
      d.x = d.ax + d.vx
      d.y = d.ay + d.vy
      d.sx += (d.x - d.sx) * 0.1
      d.sy += (d.y - d.sy) * 0.1
    }

    let drawX = d.sx
    let drawY = d.sy
    if (props.waveAmplitude > 0) {
      drawY += Math.sin(d.ax * 0.03 + t) * props.waveAmplitude
      drawX += Math.cos(d.ay * 0.03 + t * 0.7) * props.waveAmplitude * 0.5
    }

    if (props.sparkle) {
      const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0
      if ((hash % 100) < 3) {
        ctx.moveTo(drawX + rad * 1.8, drawY)
        ctx.arc(drawX, drawY, rad * 1.8, 0, TWO_PI)
      } else {
        ctx.moveTo(drawX + rad, drawY)
        ctx.arc(drawX, drawY, rad, 0, TWO_PI)
      }
    } else {
      ctx.moveTo(drawX + rad, drawY)
      ctx.arc(drawX, drawY, rad, 0, TWO_PI)
    }
  }

  ctx.fill()
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d', { alpha: true })

  doResize()
  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove, { passive: true })

  speedInterval = setInterval(() => {
    const dx = mouse.prevX - mouse.x
    const dy = mouse.prevY - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    mouse.speed += (dist - mouse.speed) * 0.5
    if (mouse.speed < 0.001) mouse.speed = 0
    mouse.prevX = mouse.x
    mouse.prevY = mouse.y
  }, 20)

  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  clearInterval(speedInterval)
  clearTimeout(resizeTimer)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', onMouseMove)
})

watch(() => [props.dotRadius, props.dotSpacing], () => {
  const { w, h } = size
  if (w > 0 && h > 0) buildDots(w, h)
})
</script>

<style scoped>
.dot-field-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

import AOS from 'aos'

// Scroll reveals via AOS + a hero scale/fade driven directly by scroll position.
// The live site fixes the hero and scrubs scale+opacity from 1.0 -> 0.5 over one
// viewport of scroll (measured), while the content below scrolls up over it.
export function initAnimations() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 90, disable: reduce })

  const inner = document.querySelector('.hero__inner')
  if (inner && !reduce) {
    let ticking = false
    const hero = document.querySelector('.hero')
    const apply = () => {
      const p = Math.min(window.scrollY / window.innerHeight, 1) // 0..1 over first viewport
      const v = 1 - 0.5 * p // 1.0 -> 0.5, linear (matches measured curve)
      inner.style.transform = `scale(${v.toFixed(4)})`
      inner.style.opacity = v.toFixed(4)
      inner.style.borderRadius = `${(p * 28).toFixed(1)}px` // corners round as it shrinks
      // once fully past the first screen, hide the fixed hero so its (still
      // playing) video can never peek through the content below.
      if (hero) hero.style.visibility = window.scrollY > window.innerHeight ? 'hidden' : 'visible'
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    apply()
  }

  const refresh = () => AOS.refreshHard()
  window.addEventListener('load', refresh)
  setTimeout(refresh, 1200)
}

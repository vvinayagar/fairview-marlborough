import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {
  heroVideo, heroPoster, topNav, menuNav, footerNav, introImg, boardingImg, exploreImg,
  panoramaImg, whyCards, news, areas, accreditations, socials,
} from './data.js'
import { initAnimations } from './anim.js'

/* ---------- crest logo ---------- */
function Crest() {
  return (
    <a href="#top" className="crest" aria-label="Fairview International School">
      <img className="crest__img" src="/fairview-logo-white.png" alt="Fairview International School" />
    </a>
  )
}

/* ---------- header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const solid = scrolled || menuOpen
  return (
    <>
      <header className={`header ${solid ? 'header--solid' : ''}`} id="top">
        <div className="header__inner">
          <Crest />
          <div className="header__right">
            <nav className="header__top">
              {topNav.map(n => <a key={n} href="#">{n}</a>)}
            </nav>
            <button className="header__search" aria-label="Search">&#128269;</button>
            {menuOpen
              ? <button className="header__burger header__burger--x" aria-label="Close" onClick={() => setMenuOpen(false)}>&times;</button>
              : <button className="header__burger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
                  <span /><span /><span />
                </button>}
          </div>
        </div>
      </header>

      {/* full-screen menu overlay */}
      <div className={`menu ${menuOpen ? 'menu--open' : ''}`}>
        <div className="menu__inner">
          <nav className="menu__links">
            {menuNav.map(n => <a key={n} href="#" onClick={() => setMenuOpen(false)}>{n}</a>)}
          </nav>
          <div className="menu__side">
            {/* stacked images — the hovered stage card crossfades its photo in */}
            <div className="menu__media">
              {areas.map((a, idx) => (
                <img key={a.name} src={a.img} alt="" className={idx === hovered ? 'is-active' : ''} loading="lazy" />
              ))}
            </div>
            <ul className="menu__areas">
              {areas.map((a, idx) => (
                <li key={a.name} className={idx === hovered ? 'is-active' : ''}
                  onMouseEnter={() => setHovered(idx)} onFocus={() => setHovered(idx)}
                  onPointerDown={() => setHovered(idx)} tabIndex={0}>
                  <span className="menu__area-name">{a.name}</span>
                  <span className="menu__area-ages">{a.ages}</span>
                  <span className="menu__area-arrow">&#8594;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

/* ---------- floating announcement card (over hero) ---------- */
function Announce() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="announce">
      <div>
        <span className="announce__kicker">Whole Campus Open Day</span>
        <span className="announce__date">Saturday, 4th October 2026</span>
      </div>
      <a href="#" className="btn-navy">RSVP HERE</a>
      <button className="announce__x" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
    </div>
  )
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <video className="hero__video" autoPlay muted loop playsInline poster={heroPoster}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <span className="hero__scrim" />
        <h1 className="hero__title" data-aos="fade-up" data-aos-duration="1000">
          Discover Fairview<br />International School
        </h1>
        <a href="#intro" className="hero__scroll" aria-label="Scroll down">&#8595;</a>
      </div>
      <Announce />
    </section>
  )
}

/* ---------- intro: space to flourish ---------- */
function Intro() {
  return (
    <section className="intro section-pad" id="intro">
      <div className="wrap">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5" data-aos="fade-up">
            <h2 className="serif-title">Space to <em>flourish</em></h2>
            <p>Fairview is where potential and ambitions take flight. As Malaysia’s oldest and
              largest IB World School — established in 1978 — we offer an extraordinary education
              in the heart of Asia, where academic rigour meets genuine care.</p>
            <p>A private international school welcoming students aged 3 to 19 across the full IB
              continuum, with a personalised approach that helps every child discover their
              strengths, build confidence and prepare for the world’s leading universities.</p>
            <a href="#" className="btn-outline">About Fairview</a>
          </div>
          <div className="col-12 col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="intro__media">
              <span className="intro__tab" />
              <img src={introImg} alt="Campus aerial view" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- navy encourage block ---------- */
function Encourage() {
  return (
    <section className="encourage">
      <div className="wrap">
        <div className="row align-items-center g-5 encourage__row">
          <div className="col-12 col-lg-6" data-aos="fade-up">
            <div className="encourage__media"><img src={boardingImg} alt="Pupils together" loading="lazy" /></div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h2 className="serif-title serif-title--light">We nurture minds like gardens —
              through <em>curiosity, compassion</em> and <em>conversation</em></h2>
            <p>We grow children, we don’t manufacture results. From that freedom to explore comes
              the confidence to lead, question and contribute.</p>
            <p>The result is well-rounded, balanced individuals who realise their considerable
              potential and go on to shape the world in a positive way.</p>
            <a href="#" className="btn-gold">Our Vision &amp; Mission</a>
          </div>
        </div>
        <div className="row align-items-center g-5 encourage__row encourage__row--rev">
          <div className="col-12 col-lg-6" data-aos="fade-up">
            <h2 className="serif-title serif-title--light">An environment that <em>feels like home</em></h2>
            <p>Every Fairview campus is a vibrant, supportive community where students thrive both
              academically and personally. With a strong emphasis on pastoral care and wellbeing,
              children learn in a warm environment that encourages independence, collaboration and
              personal growth.</p>
            <a href="#" className="btn-outline btn-outline--light">Student Life at Fairview +</a>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="encourage__media"><img src={exploreImg} alt="Boarding life" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- panorama invitation ---------- */
function Panorama() {
  const vref = useRef(null)
  useEffect(() => {
    const v = vref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() },
      { threshold: 0.3 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <section className="panorama">
      <video ref={vref} className="panorama__video" muted loop playsInline preload="metadata" poster={panoramaImg}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <span className="panorama__scrim" />
      <a href="#why" className="panorama__play" data-aos="zoom-in">
        <span className="panorama__icon">&#9658;</span>
        <span className="panorama__text">An invitation to <em>explore</em></span>
      </a>
    </section>
  )
}

/* ---------- why marlborough carousel ---------- */
function Why() {
  return (
    <section className="why section-pad" id="why">
      <div className="why__head" data-aos="fade-up">
        <h2 className="serif-title">Why <em>Fairview?</em></h2>
        <div className="why__nav">
          <button className="why-prev" aria-label="Previous">&#8592;</button>
          <button className="why-next" aria-label="Next">&#8594;</button>
        </div>
      </div>
      <div className="why__slider" data-aos="fade-up">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={20}
          navigation={{ prevEl: '.why-prev', nextEl: '.why-next' }}
          className="cursor-drag-slider"
        >
          {whyCards.map(c => (
            <SwiperSlide key={c.title} className="why-slide">
              <a href="#" className="why-card">
                <img src={c.photo} alt={c.title} loading="lazy" />
                <span className="why-card__label">{c.title}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

/* ---------- what's happening ---------- */
function News() {
  return (
    <section className="news section-pad">
      <div className="wrap">
        <div className="news__head" data-aos="fade-up">
          <h2 className="serif-title">What’s <em>happening?</em></h2>
          <a href="#" className="btn-navy btn-navy--pill">See all news</a>
        </div>
        <div className="row g-4">
          {news.map((n, i) => (
            <div className="col-12 col-md-6" key={n.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <article className="news-card">
                <div className="news-card__img">
                  <span className="news-card__tag">{n.tag}</span>
                  <img src={n.photo} alt="" loading="lazy" />
                </div>
                <div className="news-card__body">
                  <span className="news-card__badge">{n.badge}</span>
                  <h3>{n.title}</h3>
                </div>
              </article>
            </div>
          ))}
          <div className="col-12" data-aos="fade-up">
            <div className="follow">
              <span>Follow us on</span>
              <div className="follow__icons">{socials.slice(0, 4).map((s, i) => <a key={i} href="#">{s}</a>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- areas of our college ---------- */
function Areas() {
  return (
    <section className="areas section-pad">
      <div className="wrap">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6" data-aos="fade-up">
            <div className="areas__media">
              <img src={boardingImg} alt="Pupils at the College" loading="lazy" />
              <a href="#" className="areas__admissions">
                <span>Looking for admissions?</span>
                <span className="areas__admissions-btn">Find out how</span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h2 className="serif-title">Stages of <em>the journey</em></h2>
            <ul className="areas__list">
              {areas.map(a => (
                <li key={a.name}>
                  <span className="areas__name">{a.name}</span>
                  <span className="areas__ages">{a.ages}</span>
                  <span className="areas__arrow">&#8594;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- want to learn more band ---------- */
function LearnMore() {
  return (
    <section className="learn">
      <div className="wrap">
        <h2 className="learn__title" data-aos="fade-up">Want to learn more?</h2>
        <a href="#" className="btn-gold btn-gold--lg" data-aos="fade-up" data-aos-delay="100">Enquire now</a>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="row footer__grid">
          <div className="col-12 col-lg-4 footer__brand">
            <Crest />
            <div className="footer__social">
              {socials.map((s, i) => <a key={i} href="#" aria-label="social">{s}</a>)}
            </div>
            <p>A top global IB World School, welcoming students aged 3 to 19 across our network
              of private international campuses in Malaysia — a beacon of quality education since 1978.</p>
            <hr className="footer__rule" />
            <a href="#" className="footer__ext">International Baccalaureate &#8599;</a>
          </div>
          <div className="col-6 col-lg-4 footer__col">
            <h3>Quick Links</h3>
            <ul className="footer__links">{footerNav.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div className="col-6 col-lg-4 footer__col">
            <h3>Get in Touch</h3>
            <p className="footer__addr">Fairview International School<br />Lot 4178, Jalan 1/27<br />Seksyen 1 Wangsa Maju<br />53300 Kuala Lumpur<br />Malaysia</p>
            <p className="footer__addr">+603-4142 0888<br />enquiries@fairview.edu.my</p>
          </div>
        </div>
        <div className="footer__accred">
          <span className="footer__accred-label">Awards &amp; Accreditations</span>
          <Swiper
            className="awards-marquee"
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={40}
            loop
            freeMode={{ enabled: true }}
            allowTouchMove={false}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
          >
            {accreditations.concat(accreditations).map((a, i) => (
              <SwiperSlide key={i} className="award-slide">
                <span className="accred-chip">{a}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="footer__crest">
          <svg viewBox="0 0 48 56" width="40" height="46" aria-hidden>
            <path d="M24 3 L44 12 V32 C44 44 35 50 24 54 C13 50 4 44 4 32 V12 Z" fill="none" stroke="#fff" strokeWidth="1.6" />
          </svg>
        </div>
        <div className="footer__bar">
          <span>&copy; {new Date().getFullYear()} &nbsp;|&nbsp; Fairview International School &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Cookies</span>
          <span>A Top Global IB World School</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const id = requestAnimationFrame(() => initAnimations())
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <div className="hero-spacer" />
      <main className="content">
        <Intro />
        <Encourage />
        <Panorama />
        <Why />
        <News />
        <Areas />
        <LearnMore />
      </main>
      <Footer />
    </>
  )
}

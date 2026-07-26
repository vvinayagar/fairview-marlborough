// Open-source imagery via Unsplash CDN (free to use) — stands in for Fairview's own photography
const img = (id, w = 900, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&h=${h}`

export const heroVideo = '/hero.mp4' // CC0 school clip (Mixkit free license)
export const heroPoster = img('1523050854058-8df90110c9f1', 1600, 900)

export const topNav = ['Visit', 'Admissions', 'Parent Portal']
// Full-screen menu: large display links (left column)
export const menuNav = ['About Us', 'Admissions', 'Our Programmes', 'Student Life', 'Our Campuses', 'Newsroom', 'Contact Us']
// Footer quick links
export const footerNav = ['Admissions', 'Our Programmes', 'Newsroom', 'Dominus Arts Venue', 'Work With Us', 'Contact Us']

export const introImg = img('1580582932707-520aed937b7b', 800, 600) // campus

export const boardingImg = img('1509062522246-3755977927d7', 700, 520)
export const exploreImg = img('1544717305-2782549b5136', 700, 520)
export const panoramaImg = img('1466442929976-97f336a657be', 1600, 800)

export const whyCards = [
  { title: 'Academic Rigour', photo: img('1523240795612-9a054b0db644', 500, 640) },
  { title: 'Personalised Learning', photo: img('1503676260728-1c00da094a0b', 500, 640) },
  { title: 'Holistic Education', photo: img('1544717305-2782549b5136', 500, 640) },
  { title: 'Character & Values', photo: img('1507924538820-ede94a04019d', 500, 640) },
  { title: 'Individual Attention', photo: img('1522202176988-66273c2fd55f', 500, 640) },
  { title: 'Beyond the Classroom', photo: img('1533105079780-92b9be482077', 500, 640) },
]

export const news = [
  { tag: 'Results', badge: 'FRIDAY, 18 JULY 2026', title: 'Record university offers for the Class of 2026', photo: img('1523240795612-9a054b0db644', 700, 460) },
  { tag: 'Community', badge: 'FRIDAY, 27 JUNE 2026', title: 'Dominus Arts Venue hosts our largest student showcase', photo: img('1511671782779-c97d3d27a1d4', 700, 460) },
]

export const areas = [
  { name: 'Early Years', ages: 'Ages 3–6' },
  { name: 'Primary · PYP', ages: 'Ages 6–11' },
  { name: 'Middle Years · MYP', ages: 'Ages 11–16' },
  { name: 'IB Diploma', ages: 'Ages 16–19' },
]

// Accreditation / partner badges — text chips stand in for logos
export const accreditations = ['IB World School', 'PYP · MYP · DP', 'Cambridge International', 'Duke of Edinburgh’s Award', 'Council of International Schools', 'AMCIS']

export const socials = ['f', '◉', '\u{1D54F}', '▶', 'in']

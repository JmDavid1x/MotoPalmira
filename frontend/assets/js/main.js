/* ============================================
   MotoPalmira - Main Interactions (robust)
   Cada bloque va en try/catch para que un fallo
   no rompa el resto.
   ============================================ */

// ============== LOADER ==============
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1200);
});

// Fallback: si algo se cuelga, ocultar loader igual
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hidden');
}, 3500);

// ============== AOS INIT ==============
try {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }
} catch (e) { console.warn('AOS init failed:', e); }

// ============== LENIS SMOOTH SCROLL (opcional) ==============
let lenis = null;
try {
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
} catch (e) { console.warn('Lenis init failed:', e); }

// ============== ANCHOR LINKS (con o sin Lenis) ==============
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.5 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});

// ============== SCROLL PROGRESS ==============
try {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = progress + '%';
    });
  }
} catch (e) { console.warn('Scroll progress failed:', e); }

// ============== HEADER SCROLL ==============
try {
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }
} catch (e) { console.warn('Header scroll failed:', e); }

// ============== SPOTLIGHT ==============
try {
  const spotlight = document.getElementById('spotlight');
  if (spotlight) {
    document.addEventListener('mousemove', (e) => {
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
    });
  }
} catch (e) { console.warn('Spotlight failed:', e); }

// ============== BENTO CARDS SPOTLIGHT ==============
try {
  document.querySelectorAll('.bento-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
} catch (e) { console.warn('Bento spotlight failed:', e); }

// ============== MAGNETIC BUTTONS ==============
try {
  document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
} catch (e) { console.warn('Magnetic buttons failed:', e); }

// ============== PHONE TILT 3D ==============
try {
  const phoneTilt = document.querySelector('.phone-tilt');
  if (phoneTilt) {
    document.addEventListener('mousemove', (e) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
      const rotY = xRatio * 12;
      const rotX = -yRatio * 8;
      phoneTilt.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });
  }
} catch (e) { console.warn('Phone tilt failed:', e); }

// ============== VANILLA TILT ==============
try {
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      perspective: 1000,
    });
  }
} catch (e) { console.warn('VanillaTilt failed:', e); }

// ============== COUNTERS ==============
try {
  const counters = document.querySelectorAll('.counter');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || '';
            const duration = 2000;
            const start = performance.now();

            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.floor(eased * target);
              counter.textContent = value.toLocaleString('es-CO') + suffix;
              if (progress < 1) requestAnimationFrame(update);
              else counter.textContent = target.toLocaleString('es-CO') + suffix;
            }

            requestAnimationFrame(update);
            counterObserver.unobserve(counter);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));
  }
} catch (e) { console.warn('Counters failed:', e); }

// ============== TABS PASAJERO/CONDUCTOR ==============
try {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;

      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      tabContents.forEach((content) => {
        if (content.id === `tab-${tab}`) {
          content.classList.remove('hidden');
          content.classList.add('active');
        } else {
          content.classList.add('hidden');
          content.classList.remove('active');
        }
      });
    });
  });
} catch (e) { console.warn('Tabs failed:', e); }

// ============== FAQ ACCORDION ==============
try {
  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const item = trigger.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach((other) => {
        other.classList.remove('open');
      });

      if (!isOpen) item.classList.add('open');
    });
  });
} catch (e) { console.warn('FAQ failed:', e); }

// ============== SWIPER TESTIMONIOS ==============
try {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: false },
      },
    });
  }
} catch (e) { console.warn('Swiper failed:', e); }

// ============== THEME TOGGLE ==============
try {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const sunIcon = themeToggle.querySelector('.sun');
    const moonIcon = themeToggle.querySelector('.moon');

    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isLight);
        moonIcon.classList.toggle('hidden', isLight);
      }
    });
  }
} catch (e) { console.warn('Theme toggle failed:', e); }

// ============== GSAP ANIMATIONS ==============
try {
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.phone-tilt', {
        y: -50,
        scrollTrigger: {
          trigger: '.phone-tilt',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
    gsap.from('.hero-title', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3,
    });
  }
} catch (e) { console.warn('GSAP failed:', e); }

// ============== MAPA REAL DE PALMIRA (Leaflet + OpenStreetMap) ==============
try {
  if (typeof L !== 'undefined' && document.getElementById('palmira-map')) {
    // Coordenadas centro de Palmira, Valle del Cauca, Colombia
    const PALMIRA_CENTER = [3.5394, -76.3036];

    const map = L.map('palmira-map', {
      center: PALMIRA_CENTER,
      zoom: 13,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
      preferCanvas: true,
    });

    // Botón de zoom personalizado en posición discreta
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Tiles oscuros de CartoDB Dark Matter (gratis, sin API key)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Polígono aproximado de zona urbana de Palmira (geocerca)
    const palmiraPolygon = [
      [3.5650, -76.3250],
      [3.5680, -76.2900],
      [3.5500, -76.2750],
      [3.5200, -76.2780],
      [3.5050, -76.2950],
      [3.5100, -76.3200],
      [3.5300, -76.3300],
    ];

    L.polygon(palmiraPolygon, {
      color: '#FF3B5C',
      weight: 2,
      opacity: 0.8,
      fillColor: '#8B5CF6',
      fillOpacity: 0.12,
      dashArray: '6, 6',
    }).addTo(map).bindPopup('<b>Zona de cobertura</b><br/>Palmira, Valle del Cauca');

    // Pin principal pulsante (usuario)
    const userIcon = L.divIcon({
      className: 'custom-user-pin',
      html: `
        <div style="position:relative;width:24px;height:24px;">
          <div style="position:absolute;inset:0;border-radius:50%;background:#FF3B5C;box-shadow:0 0 20px rgba(255,59,92,0.8);z-index:2;"></div>
          <div style="position:absolute;inset:-12px;border-radius:50%;background:#FF3B5C;opacity:0.3;animation:pin-pulse 2s ease-out infinite;"></div>
          <div style="position:absolute;inset:-24px;border-radius:50%;background:#FF3B5C;opacity:0.15;animation:pin-pulse 2s ease-out infinite;animation-delay:0.6s;"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    L.marker(PALMIRA_CENTER, { icon: userIcon })
      .addTo(map)
      .bindPopup('<b>📍 Tu ubicación</b><br/>Centro de Palmira');

    // Pines de conductores cercanos (simulados)
    const conductores = [
      { coords: [3.5450, -76.3100], label: 'Andrés M. · ⭐ 4.9' },
      { coords: [3.5320, -76.2980], label: 'Carlos T. · ⭐ 4.8' },
      { coords: [3.5380, -76.3150], label: 'Juan P. · ⭐ 5.0' },
      { coords: [3.5470, -76.2950], label: 'Diego R. · ⭐ 4.7' },
      { coords: [3.5280, -76.3080], label: 'Luis F. · ⭐ 4.9' },
    ];

    const driverIcon = L.divIcon({
      className: 'custom-driver-pin',
      html: `<div style="width:14px;height:14px;border-radius:50%;background:#06B6D4;border:2px solid #0A0A0F;box-shadow:0 0 12px rgba(6,182,212,0.8);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    conductores.forEach((c) => {
      L.marker(c.coords, { icon: driverIcon })
        .addTo(map)
        .bindPopup(`<b>🏍️ ${c.label}</b><br/>Disponible ahora`);
    });

    // Activar scrollWheelZoom solo cuando el usuario hace clic en el mapa
    map.on('click', () => map.scrollWheelZoom.enable());
    map.on('mouseout', () => map.scrollWheelZoom.disable());
  }
} catch (e) { console.warn('Leaflet map failed:', e); }

// ============== KONAMI EASTER EGG ==============
try {
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key === konami[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konami.length) {
        document.body.style.animation = 'gradient-flow 1s infinite';
        alert('🏍️ ¡Modo turbo activado!');
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
} catch (e) {}

console.log(
  '%c🏍️ MotoPalmira',
  'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #FF3B5C, #8B5CF6, #06B6D4); -webkit-background-clip: text; color: transparent;'
);
console.log('%cHecho con ❤️ desde Palmira, Valle del Cauca', 'color: #06B6D4; font-size: 12px;');

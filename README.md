# 🏍️ MotoPalmira

> **Plataforma de movilidad inteligente sobre dos ruedas para Palmira, Valle del Cauca**

![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Autores](https://img.shields.io/badge/Autores-Xabier%20Jaramillo%20·%20David%20Mayor-purple)

---

## 📖 ¿Qué es MotoPalmira?

MotoPalmira es una plataforma de transporte compartido en motocicleta diseñada específicamente para Palmira, Valle del Cauca, Colombia. Combina el modelo de movilidad rápida y económica con tecnología moderna, permitiendo conexiones seguras entre pasajeros y conductores certificados dentro de la ciudad.

**Estado actual:** Landing page MVP completamente funcional. **Proyecto en proceso de creación y desarrollo activo.**

---

## ✨ Características destacadas

### 🎨 Frontend — Landing Page Premium

La landing page está diseñada con inspiración en plataformas líderes (Linear, Stripe, Apple Vision Pro, Vercel) e incluye:

#### **Componentes Visuales**
- ✅ **Loader animado** con path drawing SVG gradiente
- ✅ **Hero section** con phone mockup 3D con tilt interactivo
- ✅ **Bento grid** estilo Apple con 6 cards interactivas
- ✅ **Spotlight effect** que sigue el cursor (Glass morphism)
- ✅ **Botones magnéticos** que se atraen con el mouse
- ✅ **Smooth scroll** con Lenis.js (fallback a smooth nativo)
- ✅ **Mesh gradient animado** en secciones hero

#### **Secciones Funcionales**
- ✅ **Tabs interactivos** — Pasajero vs Conductor con transiciones suaves
- ✅ **Mapa real de Palmira** — Leaflet + OpenStreetMap (CartoDB Dark Matter)
  - Zona de cobertura con geocerca poligonal
  - Pin rojo pulsante del usuario
  - 5 conductores simulados con ratings
- ✅ **Carrusel de testimonios** — Swiper.js con autoplay y paginación
- ✅ **FAQ Accordion** — Preguntas frecuentes desplegables
- ✅ **Timeline** — Flujo de viaje (4 pasos animados)
- ✅ **Marquee infinito** — Features deslizándose continuamente
- ✅ **Counters animados** — Estadísticas con easing cubic

#### **Interactividad & UX**
- ✅ **Modo claro/oscuro** — Toggle completo con persistencia visual
- ✅ **Scroll progress bar** — Indicador de progreso en lectura
- ✅ **Anchor links suavizados** — Navegación interna con scroll smooth
- ✅ **Header responsivo** — Cambia estado al scroll
- ✅ **Easter egg Konami** — ↑↑↓↓←→←→BA activa "Modo turbo"
- ✅ **Totalmente responsive** — Funciona en mobile, tablet y desktop

#### **Robustez & Performance**
- ✅ Cada módulo JavaScript envuelto en `try/catch` para aislar errores
- ✅ CDN fallback automático si fallan las librerías
- ✅ Todas las dependencias cargadas vía CDN (sin build step necesario)
- ✅ Optimización de animaciones con `requestAnimationFrame`
- ✅ Lazy loading de imágenes

---

## 🛠️ Stack Tecnológico

### Frontend (Actual)
```
HTML5 + CSS3 + JavaScript (Vanilla)
├── Tailwind CSS v3          (Utilidades)
├── GSAP v3                  (Animaciones avanzadas)
├── Lenis.js                 (Smooth scroll)
├── AOS                      (Scroll animations)
├── Swiper.js                (Carruseles)
├── Leaflet.js + OpenStreetMap (Mapas)
├── VanillaTilt              (Efecto tilt)
└── CDN delivery             (Sin bundler)
```

### Backend (Próxima fase)
```
NestJS + TypeScript           (Framework)
├── PostgreSQL + PostGIS      (BD + geolocalización)
├── Prisma ORM               (Migraciones & queries)
├── Redis + BullMQ           (Colas & matching)
├── Wompi API                (Pagos sandbox)
├── OpenStreetMap + OSRM     (Rutas optimizadas)
└── JWT + Role-based auth    (Seguridad)
```

---

## 📁 Estructura del Proyecto

```
ProyectoXabiMayor/
├── frontend/
│   ├── index.html                    (Landing page principal)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css           (Custom styles + dark mode)
│   │   │   └── ...                  (Media queries responsive)
│   │   ├── js/
│   │   │   ├── main.js              (Toda la interactividad)
│   │   │   └── ...                  (Módulos robustos)
│   │   └── images/
│   │       └── ...                  (SVG, PNG optimizados)
│   └── README.md
│
├── backend/                          (En desarrollo)
│   ├── src/
│   │   ├── modules/
│   │   ├── config/
│   │   └── main.ts
│   └── README.md
│
└── README.md                         (Este archivo)
```

---

## 🚀 Cómo empezar

### Opción 1: Abrir directamente en el navegador
```powershell
# Windows
start frontend/index.html

# macOS
open frontend/index.html

# Linux
xdg-open frontend/index.html
```

### Opción 2: Servir con servidor local (recomendado para testing)
```bash
cd frontend
python -m http.server 8000
# O si tienes Node.js:
npx http-server

# Luego abre: http://localhost:8000
```

### Requisitos
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Conexión a internet (para cargar CDNs y OpenStreetMap)
- ✅ **No requiere backend instalado** — la landing funciona standalone

---

## 📊 Características técnicas en detalle

### Leaflet Map Integration
```javascript
// Mapa de Palmira con:
- Centro: [3.5394, -76.3036]
- Zoom: 13
- Tiles: CartoDB Dark Matter (sin API key)
- Geocerca: Polígono de zona urbana
- Markers: Usuario + 5 conductores simulados
```

### Dark Mode Implementation
```css
/* Toggle: body.light desactiva dark mode */
body {
  background: linear-gradient(180deg, #0A0A0F 0%, #0F0F15 100%);
}
body.light {
  background: linear-gradient(180deg, #FAFAFC 0%, #EEEEF2 100%) !important;
}
```

### Interactive Tabs & Accordion
- **Tabs Pasajero/Conductor** — Click listeners con `classList` para show/hide
- **FAQ Accordion** — Max-height animado, solo 1 item abierto simultáneamente
- Todas las transiciones con CSS `transition: max-height 0.3s`

---

## 🎯 Roadmap (12 fases)

### ✅ Completado
- [x] Landing page MVP con 15 secciones
- [x] Mapa interactivo de Palmira (Leaflet)
- [x] Dark mode funcional
- [x] Responsive design (mobile-first)
- [x] Bug fixes (cursor, tabs, tema, FAQ, CDN)

### 🔄 En desarrollo
- [ ] Setup monorepo TypeScript
- [ ] Schema Prisma + migraciones PostgreSQL
- [ ] Auth + role-based access control
- [ ] Onboarding documentos (cédula, license)

### 📋 Próximas fases
- [ ] Geocerca dinámica Palmira
- [ ] Solicitud y matching de viajes (algoritmo)
- [ ] Integración Wompi (pagos sandbox)
- [ ] App móvil React Native
- [ ] Panel admin Next.js
- [ ] Monitoring & observabilidad

---

## ⚖️ Consideraciones legales

**MotoPalmira es un prototipo académico** desarrollado como proyecto de investigación. **Proyecto en proceso de creación.** No representa un servicio comercial operativo ni realiza viajes reales en la actualidad.

### Normativas consideradas
- ✅ Ley 1581/2012 (Protección de datos personales)
- ✅ Decreto 024/2026 de Palmira (Regulación local de transporte)
- ✅ Lineamientos MinTransporte & ANSV (Autoridad Nacional de Seguridad Vial)

**Nota:** La regulación de transporte en moto en Colombia tiene zonas grises que requieren concepto legal antes de operación pública. Este proyecto está diseñado para demostración y desarrollo académico.

---

## 🔒 Seguridad

Medidas implementadas en el prototipo:

```javascript
// ✅ Error handling robusto
try {
  // Cada módulo en try/catch
} catch (e) {
  console.warn('Módulo falló:', e);
  // Fallback automático
}

// ✅ CSP-friendly (sin inline scripts maliciosos)
// ✅ No almacena datos sensibles en localStorage sin encripción
// ✅ CDN verificados (jsDelivr, unpkg, oficial)
```

---

## 👥 Autores

- **Xabier Jaramillo** — Concepto y dirección del proyecto
- **David Mayor** — Desarrollo frontend y arquitectura

---

## 💬 Contribuciones

Bienvenidos PRs e issues. Para contribuir:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📞 Contacto & Soporte

- **David Mayor** — [josedavidmayorlopez@gmail.com](mailto:josedavidmayorlopez@gmail.com)
- **GitHub:** [@JmDavid1x](https://github.com/JmDavid1x)

---

## 📄 Licencia

Este proyecto está bajo licencia **MIT**. Ver [LICENSE](LICENSE) para detalles.

---

## 🏆 Agradecimientos

- **Inspiración diseño:** Linear, Stripe, Apple Vision Pro, Vercel
- **Librerías:** GSAP, Lenis, Swiper, Leaflet, Tailwind
- **Comunidad:** OpenStreetMap, CartoDB, jsDelivr

---

**Última actualización:** 8 de mayo de 2026  
**Status:** Prototipo Académico en Desarrollo 🚀

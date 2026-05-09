# 🏍️ MotoPalmira

> **Plataforma de movilidad inteligente sobre dos ruedas para Palmira, Valle del Cauca**

![Status](https://img.shields.io/badge/Status-Prototipo%20Académico-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Autor](https://img.shields.io/badge/Autor-David%20Mayor%20·%20ICESI-purple)

---

## 📖 ¿Qué es MotoPalmira?

MotoPalmira es una plataforma de transporte compartido en motocicleta diseñada específicamente para Palmira, Valle del Cauca, Colombia. Combina el modelo de movilidad rápida y económica con tecnología moderna, permitiendo conexiones seguras entre pasajeros y conductores certificados dentro de la ciudad.

**Estado actual:** Landing page MVP completamente funcional + prototipo académico del backend.

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

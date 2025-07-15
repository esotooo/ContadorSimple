# Planificador de Presupuesto

Una pequeña aplicación desarrollada con React y TailwindCSS que permite incrementar, decrementar y reiniciar un contador.  
Incluye un botón para alternar entre modo claro y modo oscuro dinámicamente.  
Diseño minimalista y responsivo para escritorio y dispositivos móviles.

---

## Demo

[https://contador-simple-ts.netlify.app/](https://contador-simple-ts.netlify.app/)

---

## Características

- Incrementar el contador en +1.
- Decrementar el contador en -1.
- Reiniciar el contador a 0.
- Alternar entre modo claro y modo oscuro.
- Diseño totalmente responsivo y adaptado para móviles y escritorio.
- Animaciones simples y visualmente agradables.

---

## Tecnologías

- React 18+
- TailwindCSS para estilos
- React Icons para los iconos de sol y luna
- `useState` y `useEffect` para manejo de estado y efectos

---

## Instalación

Clona el repositorio y accede a la carpeta:

```bash
git clone https://github.com/esotooo/ContadorSimple.git
cd ContadorSimple
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicacion en modo desarrollo:

```bash
npm run dev
```

Abre en tu navegador la URL que muestra Vite, normalmente:

```bash
http://localhost:5173
```
---

## Estructura principal

- `src/App.tsx` – Componente principal que implementa el contador y el modo oscuro.
- `src/App.css` – Estilos globales y ajustes personalizados para Tailwind.
- `public/index.html` – Archivo base del proyecto.
- `tailwind.config.js` – Configuración para habilitar modo oscuro y personalizaciones.

---

## Uso

1. Pulsa **Incrementar** para aumentar el contador.
2. Pulsa **Decrementar** para disminuir el contador.
3. Pulsa **Reiniciar Contador** para volver a cero.
4. Usa el botón en la esquina superior derecha para alternar entre modo claro y modo oscuro.
5. Compatible con pantallas grandes y pequeñas gracias a su diseño responsivo.

---

## Próximas mejoras

- Persistir el valor del contador en `localStorage` para no perderlo al recargar.
- Animaciones más fluidas en los cambios de modo oscuro.
- Temas adicionales además de claro/oscuro.
- Añadir tests automatizados para las funcionalidades principales.

---

## Demo Visual

### Vista Escritorio
<p><em>Muestra la aplicación funcionando en pantalla de escritorio.</em></p>
<img src="./img/gastosDesktop.gif" width="600" alt="Demo escritorio" />

### Vista Móvil
<p><em>Muestra la aplicación funcionando en un dispositivo móvil, con diseño responsivo.</em></p>
<img src="./img/gastosMobile.gif" width="300" alt="Demo móvil" />

---

## Autor

Edwin Soto – [https://github.com/esotooo](https://github.com/esotooo) – edwinsoto.developer@gmail.com


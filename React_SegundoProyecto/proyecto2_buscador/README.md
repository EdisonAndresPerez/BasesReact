# Dragon Ball Characters Search (React + Vite)

Este proyecto es una aplicación web construida con React y Vite que permite buscar y visualizar personajes de Dragon Ball utilizando la API pública de https://dragonball-api.com/.

## 🚀 Características principales
- Búsqueda de personajes de Dragon Ball por nombre.
- Visualización de información relevante: imagen, raza, ki, ki máximo y nombre.
- Interfaz moderna y responsiva.
- Código organizado en componentes reutilizables.

## 📦 Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🛠️ Estructura del proyecto
```
proyecto2_buscador/
├── public/
├── src/
│   ├── components/
│   │   ├── AddCategory.jsx      # Componente para agregar nuevas búsquedas
│   │   └── GifGrid.jsx         # Componente que muestra los personajes
│   ├── helpers/
│   │   └── getGifs.js          # Función para consultar la API de Dragon Ball
│   ├── GifExpertApp.jsx        # Componente principal de la app
│   ├── main.jsx                # Punto de entrada de React
│   └── styles.css              # Estilos globales
├── package.json
└── README.md
```

## 🖥️ Uso
- Escribe el nombre de un personaje de Dragon Ball en el campo de búsqueda y presiona Enter.
- Se mostrarán las tarjetas con la información del personaje si existe en la API.
- Puedes buscar varios personajes y se mostrarán en la misma página.

## 🌐 API utilizada
- [Dragon Ball API](https://dragonball-api.com/)

## 👨‍💻 Autor
- Proyecto realizado por [Tu Nombre Aquí]

---
¡Disfruta explorando el mundo de Dragon Ball con React!

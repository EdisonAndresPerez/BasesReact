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
│   │   ├── GifGrid.jsx         # Componente que muestra los personajes
│   │   └── InfoItem.jsx        # Card individual de personaje
│   ├── helpers/
│   │   └── getGifs.js          # Función para consultar la API de Dragon Ball
│   ├── hooks/
│   │   └── UseFetchGifs.js     # Hook personalizado para fetch de personajes
│   ├── GifExpertApp.jsx        # Componente principal de la app
│   ├── main.jsx                # Punto de entrada de React
│   └── styles.css              # Estilos globales
├── test/
│   └── components/
│       └── InfoItem.test.js    # Pruebas unitarias de InfoItem
├── package.json
├── README.md
└── ...
```

## 🖥️ Uso
- Escribe el nombre de un personaje de Dragon Ball en el campo de búsqueda y presiona Enter.
- Se mostrarán las tarjetas con la información del personaje si existe en la API.
- Puedes buscar varios personajes y se mostrarán en la misma página.

## 🌐 API utilizada
- [Dragon Ball API](https://dragonball-api.com/)

---

## 🧪 Testing: Babel, Jest y React Testing Library

### Instalación de dependencias para testing

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

### Configuración de Babel

Crea un archivo llamado `babel.config.cjs` en la raíz del proyecto con el siguiente contenido:

```js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
> **Nota:** Usa `.cjs` si tu proyecto tiene `"type": "module"` en `package.json`.

### Configuración de Jest

Agrega este script en tu `package.json`:

```json
"scripts": {
  "test": "jest --watchAll"
}
```

Crea un archivo `jest.config.cjs` en la raíz del proyecto con:

```js
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  }
};
```

### Estructura recomendada para tests

Coloca tus archivos de prueba en una carpeta `test/` o junto a los componentes usando el sufijo `.test.js`.

Ejemplo:
```
test/components/InfoItem.test.js
```

### Ejecutar los tests

Para correr todos los tests:

```bash
npm run test
```

Para correr un test específico:

```bash
npm run test -- InfoItem
```

---

## 📄 Notas adicionales

- Si cambias la estructura o agregas nuevas funcionalidades, recuerda actualizar este README.
- Puedes agregar más ejemplos de uso, instrucciones para despliegue, o detalles de configuración avanzada según lo necesites.

---

¿Quieres agregar otra sección o detalle? ¡Solo dime y lo incluimos!


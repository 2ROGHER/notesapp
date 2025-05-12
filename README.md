# Notes App
## 1. Description
Awesome Notes app inspired by Noteped application.
## 2. Setup

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

More configurations and more mantainable schemas configurations and more else
```bash
my-app/
├── public/
│   └── ...
├── src/
│   ├── assets/             # Imágenes, iconos, fuentes, etc.
│   ├── components/         # Componentes reutilizables y atómicos (botones, inputs, etc.)
│   ├── features/           # Módulos por dominio funcional (ej: auth, users, dashboard)
│   │   └── auth/
│   │       ├── components/ # Componentes propios del dominio
│   │       ├── hooks/      # Custom hooks relacionados
│   │       ├── services/   # Llamadas a APIs relacionadas
│   │       ├── types.ts    # Tipado propio del módulo
│   │       └── index.ts    # Punto de entrada del módulo
│   ├── hooks/              # Custom hooks globales
│   ├── layouts/            # Layouts generales (ej: AuthLayout, MainLayout)
│   ├── pages/              # Páginas por ruta (home, login, etc.)
│   ├── router/             # Configuración de rutas
│   ├── store/              # Estado global (Redux, Zustand, etc.)
│   ├── styles/             # Archivos de estilos globales (Tailwind, Sass, etc.)
│   ├── types/              # Tipos globales compartidos
│   ├── utils/              # Utilidades y helpers globales
│   ├── config/             # Configuraciones de la app (env, constantes, etc.)
│   ├── App.tsx
│   └── main.tsx
├── .env
├── tsconfig.json
├── vite.config.ts
└── package.json

# React + TypeScript + Vite + Redux

my-app/
├── src/
│   ├── app/ | core | app | redux
│   │   ├── store.ts           # Configuración central del store
│   │   └── hooks.ts           # Typed useDispatch y useSelector
│   ├── features/
│   │   └── auth/              # Dominio funcional
│   │       ├── components/    # Componentes del dominio auth
│   │       ├── services/      # API calls (ej: login, register)
│   │       ├── authSlice.ts   # Slice de Redux para auth
│   │       ├── types.ts       # Tipos de este feature
│   │       └── index.ts       # Barrel file para exportar lo necesario
│   │   └── user/              # Otro dominio funcional
│   │       ├── userSlice.ts   # Slice de Redux para users
│   │       └── ...
│   ├── components/            # Componentes UI generales (botones, inputs, etc.)
│   ├── hooks/                 # Hooks globales
│   ├── layouts/
│   ├── pages/
│   ├── router/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx

# React + TypeScript + Vite + Components 
src/
└── components/
    ├── ui/                  # Componentes atómicos reutilizables (botones, inputs, etc.)
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.test.tsx
    │   │   └── index.ts
    │   ├── Input/
    │   ├── Modal/
    │   └── ...
    │
    ├── layout/              # Estructuras de layout (Navbar, Sidebar, Footer)
    │   ├── Navbar/
    │   ├── Sidebar/
    │   └── Footer/
    │
    ├── feedback/            # Alertas, loaders, notificaciones, spinners
    │   ├── Toast/
    │   ├── Loader/
    │   └── Spinner/
    │
    ├── data-display/        # Componentes para mostrar datos (cards, tables, badges)
    │   ├── Card/
    │   ├── Table/
    │   └── Badge/
    │
    └── form/                # Componentes de formularios complejos
        ├── FormField/
        ├── Select/
        └── CheckboxGroup/

# eCommerce [features] structure

src/
└── features/
    ├── auth/                # Registro, login, logout, recuperación de contraseña
    ├── user/                # Perfil del usuario, edición, direcciones, avatar, etc.
    ├── product/             # Lista de productos, detalle de producto, gestión
    ├── cart/                # Carrito de compras
    ├── wishlist/            # Lista de deseos
    ├── checkout/            # Proceso de compra (pasos, pago, etc.)
    ├── order/               # Historial de pedidos, detalles
    ├── search/              # Búsqueda, filtros, auto-completado
    ├── category/            # Gestión de categorías
    ├── reviews/             # Opiniones de productos
    ├── home/                # Secciones dinámicas para la home (banners, promociones)
    ├── notifications/       # Sistema de notificaciones (tostadas, alertas)
    ├── admin/               # Panel administrativo (gestión de productos, pedidos, etc.)
    ├── blog/                # (Opcional) sistema de artículos/blogs
    └── contact/             # Página de contacto, formulario, mapa, etc.

# Final structure project
src/
├── app/                             # Entry point de la app (App.tsx, providers, router)
│   ├── App.tsx
│   ├── main.tsx
│   ├── router/
│   └── providers/                  # Contextos globales: Theme, Auth, etc.
│
├── domains/                         # Dominios o features principales (DDD)
│   ├── products/
│   │   ├── application/             # Casos de uso (business logic)
│   │   │   └── fetchProducts.ts
│   │   ├── domain/                  # Entidades, modelos, interfaces puras
│   │   │   └── Product.ts
│   │   ├── infrastructure/          # API calls, servicios externos
│   │   │   └── productApi.ts
│   │   ├── presentation/            # Páginas, componentes UI de producto
│   │   │   ├── pages/
│   │   │   │   └── ProductListPage.tsx
│   │   │   ├── components/
│   │   │   │   └── ProductCard.tsx
│   │   │   └── routes.tsx
│   │   └── index.ts                 # Barrel export del dominio
│
│   ├── auth/                        # Otro dominio (igual estructura)
│   ├── cart/
│   ├── users/
│   └── ...
│
├── shared/                          # Reutilizable por todos los dominios
│   ├── components/                  # Botones, inputs, modales, etc.
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── constants/
│   └── config/                      # Config global (env vars, etc.)
│
├── core/                            # Infraestructura de bajo nivel
│   ├── theme/                       # Sistema de theming
│   ├── context/                     # Contextos globales
│   ├── services/                    # Logger, Notifier, Analytics
│   ├── i18n/                        # Internacionalización
│   └── store/                       # Zustand, Redux o similar
│
├── layouts/                         # Layouts base: AdminLayout, PublicLayout
│   ├── AdminLayout.tsx
│   ├── PublicLayout.tsx
│   └── ...
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── styles/
│       ├── tailwind.css
│       └── variables.css
│
├── theme/                           # Temas CSS o configuración de Tailwind
│   ├── dark.css
│   ├── light.css
│   └── theme.config.ts
│
├── index.html
└── vite.config.ts

```

EXPLICACIÓN DETALLADA DE LAS SUBCARPETAS

🔹 ui/

Componentes atómicos que no dependen del contexto de negocio:

Button, Input, Modal, Avatar, Tooltip, etc.

Reutilizables en cualquier parte del proyecto.

Puedes usar una lib como shadcn/ui, Chakra o tu propio design system.

🔹 layout/

Elementos estructurales comunes:

Navbar, Sidebar, Footer, MainContainer, etc.

Se usan como wrappers o layout pages.

🔹 feedback/

Componentes que comunican algo al usuario:

Toast, Alert, ErrorMessage, Loader, Spinner, ProgressBar, etc.

🔹 data-display/

Encargados de mostrar información visualmente:

Card, Table, List, Badge, Statistic, Chart, etc.

🔹 form/

Componentes más complejos relacionados a formularios:

TextField, Select, DatePicker, FormGroup, etc.

Encapsulan validación, estados, integración con react-hook-form, etc.


# React Vite Template with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA Support

![React version](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite version](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS version](https://img.shields.io/badge/TailwindCSS-3.4.6-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript version](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)
![ESLint version](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white)
![Prettier version](https://img.shields.io/badge/Prettier-3.3.2-F7B93E?logo=prettier&logoColor=white)
![PWA Support](https://img.shields.io/badge/PWA-support-4FC08D?logo=pwa&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-available-2496ED?logo=docker&logoColor=white)
![GitHub Pages](https://img.shields.io/github/deployments/ganymedelabs/react-vite-template/github-pages?label=GitHub%20Pages&color=brightgreen&logo=github&logoColor=white)
![BrowserRouter](https://img.shields.io/badge/Router-BrowserRouter-CA4245?logo=reactrouter&logoColor=white)

This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is compatible with BrowserRouter, allowing seamless URL routing.

## Table of Contents

-   [Getting Started](#-getting-started)
-   [TypeScript Configuration](#-typescript-configuration)
-   [TailwindCSS Configuration](#-tailwindcss-configuration)
-   [ESLint Configuration](#-eslint-configuration)
-   [Prettier Configuration](#-prettier-configuration)
-   [Docker Configuration](#-docker-configuration)
-   [PWA Configuration](#-pwa-configuration)
-   [GitHub Pages Deployment](#-github-pages-deployment)
-   [Repository Configuration](#-repository-configuration)
-   [License](#-license)

## 🚀 Getting Started

### Prerequisites

-   Node.js (>= 12.x)
-   npm or yarn
-   Docker (optional, for containerization)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ganymedelabs/react-vite-template.git
    cd react-vite-template
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```bash
npm start
# or
yarn start

# or if you prefer to run it inside a Docker container
docker build -t react-vite-template .
docker run -p 3000:3000 react-vite-template
```

This will start the development server at `http://localhost:3000/react-vite-template/`.

## 📘 TypeScript Configuration

This template uses TypeScript for static type-checking and ensuring type safety. You can find the configuration in the `tsconfig.json` file.

> [!CAUTION]
>
> ### Removing TypeScript
>
> 1. Convert all `.tsx` files to `.jsx` and `.ts` files to `.js`.
> 2. Delete the `tsconfig.json` file.
> 3. Uninstall TypeScript and its related packages:
>     ```bash
>     npm uninstall typescript @types/react @types/react-dom @types/jest @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser
>     ```
> 4. Remove TypeScript from the `"overrides"` field in `package.json`:
>     ```json
>     "overrides": {
>         "typescript": "^5.5.3"
>     }
>     ```
> 5. Remove TypeScript references from the `"plugins"` and `"extends"` fields in the `.eslintrc` configuration:
>     ```json
>     "plugins": ["@typescript-eslint"],
>     "extends": ["plugin:@typescript-eslint/recommended"]
>     ```

## 🎨 TailwindCSS Configuration

TailwindCSS is used for utility-first styling. It is configured with Just-in-Time (JIT) mode for optimized builds. You can find the configuration in the `tailwind.config.js` file.

> [!CAUTION]
>
> ### Removing TailwindCSS
>
> 1. Delete the `tailwind.config.js` and `postcss.config.js` files.
> 2. Uninstall TailwindCSS and related packages:
>     ```bash
>     npm uninstall tailwindcss postcss autoprefixer prettier-plugin-tailwindcss
>     ```
> 3. Remove any usage of `@tailwind`, `@apply`, and `@layer` from your `index.css`:
>
>     ```css
>     @tailwind base;
>     @tailwind components;
>     @tailwind utilities;
>
>     @layer base {
>         * {
>             @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500;
>         }
>     }
>     ```
>
> 4. Remove `prettier-plugin-tailwind` from the `"plugins"` field in `.prettierrc`:
>     ```json
>     "plugins": ["prettier-plugin-tailwindcss"]
>     ```
> 5. Update your JSX components to use standard CSS classes.

## 🔍 ESLint Configuration

This project uses the following ESLint configurations:

-   `eslint:recommended`
-   `plugin:react/recommended`
-   `plugin:react-hooks/recommended`
-   `plugin:@typescript-eslint/recommended`
-   `airbnb`
-   `plugin:import/errors`
-   `plugin:jsx-a11y/recommended`
-   `plugin:prettier/recommended`

You can find the ESLint configuration in the `.eslintrc` file.

> [!CAUTION]
>
> ### Removing ESLint
>
> 1. Delete the `.eslintrc` and `.eslintignore` files.
> 2. Uninstall ESLint and associated plugins:
>     ```bash
>     npm uninstall eslint @eslint/js @typescript-eslint/parser eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks vite-plugin-eslint
>     ```
> 3. Remove the `"lint"` and `"lint:fix"` scripts, along with the `"eslintConfig"` field from `package.json`:
>     ```json
>     "scripts": {
>         "lint": "eslint .",
>         "lint:fix": "eslint --fix ."
>     },
>     "eslintConfig": {
>         "extends": [
>             "react-app",
>             "react-app/jest"
>         ]
>     }
>     ```
> 4. Remove ESLint configurations from `vite.config.js`:
>
>     ```javascript
>     import eslint from "vite-plugin-eslint";
>
>     export default defineConfig(() => ({
>         plugins: [react(), eslint()],
>     }));
>     ```

## ✨ Prettier Configuration

Prettier is used for code formatting. You can find the configuration in the `.prettierrc` file.

> [!CAUTION]
>
> ### Removing Prettier
>
> 1. Delete the `.prettierrc` and `.prettierignore` files.
> 2. Uninstall Prettier and related plugins:
>     ```bash
>     npm uninstall prettier eslint-plugin-prettier
>     ```
> 3. Remove the `"format"` script from `package.json`:
>     ```json
>     "scripts": {
>         "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,html,css,md}'"
>     }
>     ```
> 4. Remove Prettier references from the `"plugins"` and `"extends"` fields in the `.eslintrc` configuration:
>     ```json
>     "plugins": ["prettier"],
>     "extends": ["plugin:prettier/recommended"]
>     ```

## 🐳 Docker Configuration

This project includes a `Dockerfile` for containerizing the application. The Dockerfile uses `node:18-alpine` as the base image. To build and run the Docker container, use the following commands:

```bash
docker build -t react-vite-template .
docker run -p 3000:3000 react-vite-template
```

> [!CAUTION]
>
> ### Removing Docker
>
> 1. Delete the `Dockerfile` and `.dockerignore` files.

## 📱 PWA Configuration

This project is configured as a Progressive Web App using Workbox. The service worker is generated during the build process.

> [!CAUTION]
>
> ### Removing PWA Support
>
> 1. Delete `service-worker.js`, `serviceWorkerRegistration.js`, `manifest.json`, `favicon.ico`, and the `public/images/favicons` folder.
> 2. Remove the service worker registration code from `index.tsx`:
>
>     ```tsx
>     import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
>
>     serviceWorkerRegistration.register();
>     ```
>
> 3. Remove favicon link tags from `index.html`:
>     ```html
>     <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
>     ```

## 🌐 GitHub Pages Deployment

This project is configured to be deployed to GitHub Pages. To deploy, run:

```bash
npm run deploy
# or
yarn deploy
```

Unlike many GitHub Pages setups that require the use of `HashRouter` due to URL routing limitations, this template is compatible with `BrowserRouter` thanks to the configuration provided by [rafgraph's Single Page Apps for GitHub Pages](https://github.com/rafgraph/spa-github-pages). It uses a custom `404.html` file and a redirect script to handle URL routing correctly and avoid 404 errors on page reloads. Be sure to update the `homepage` field in `package.json` to match your repository URL.

> [!CAUTION]
>
> ### Removing GitHub Pages Deployment
>
> 1. Uninstall the `gh-pages` package:
>     ```bash
>     npm uninstall gh-pages
>     ```
> 2. Remove the `"deploy"` and `"predeploy"` scripts from `package.json`:
>     ```json
>     "scripts": {
>         "predeploy": "npm run build",
>         "deploy": "gh-pages -d build"
>     }
>     ```
> 3. Adjust or remove the `base` property in `vite.config.js`:
>     ```javascript
>     base: "/react-vite-template/";
>     ```
> 4. Remove or modify the `VITE_PUBLIC_URL` in `.env.development` and `.env.production`:
>
>     ```env
>     # .env.development
>     VITE_PUBLIC_URL=http://localhost:3000/react-vite-template
>
>     # .env.production
>     VITE_PUBLIC_URL=https://ganymedelabs.github.io/react-vite-template
>     ```
>
> 5. Update the `Router` component's `basename` property in `index.tsx`:
>     ```jsx
>     <Router basename="/react-vite-template/">
>     ```
> 6. Remove or update the `href` value of `<link rel="canonical" href="https://ganymedelabs.github.io/react-vite-template/" />` in `index.html`.
> 7. If your deployment platform supports `BrowserRouter` without special configuration, delete `404.html` and remove the "Single Page Apps for GitHub Pages" script from `index.html`:
>     ```html
>     <script type="text/javascript">
>         (function (l) {
>             if (l.search[1] === "/") {
>                 var decoded = l.search
>                     .slice(1)
>                     .split("&")
>                     .map(function (s) {
>                         return s.replace(/~and~/g, "&");
>                     })
>                     .join("?");
>                 window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
>             }
>         })(window.location);
>     </script>
>     ```

## 🔧 Repository Configuration

To make this template work for your repository, you need to update a few configuration files:

1. **vite.config.js**

    - Change the `base` value to the name of your repository.

    ```json
    "base": "/your-repo-name/"
    ```

2. **src/index.tsx**

    - Change the `basename` value of `<Router basename="/react-vite-template/">` to the name of your repository.

    ```jsx
    <Router basename="/your-repo-name/">
    ```

3. **.env.production and .env.development**

    - Update the `.env` files to reflect your repository's URL. Ensure that `VITE_PUBLIC_URL` matches your local development server URL in `.env.development` and your GitHub Pages URL in `.env.production`.

    **.env.development**

    ```env
    VITE_PUBLIC_URL=http://localhost:3000/your-repo-name
    ```

    **.env.production**

    ```env
    VITE_PUBLIC_URL=https://your-username.github.io/your-repo-name
    ```

4. **index.html**

    - Change the `href` value of `<link rel="canonical" href="https://ganymedelabs.github.io/react-vite-template/" />` to the URL of your GitHub Pages.

    ```html
    <link rel="canonical" href="https://your-username.github.io/your-repo-name/" />
    ```

5. **public/manifest.json**

    - Change all instances of `"react-vite-template"` to the name of your repository. If your GitHub Pages URL is `https://your-username.github.io/`, leave the `"react-vite-template"` string as `"/"`.

    ```json
    "icons": [
        {
            "src": "/your-repo-name/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
        }
    ],
    "start_url": "/your-repo-name/",
    "scope": "/your-repo-name/",
    ```

Additionally, while not required for the template to work, it's a good idea to change the following parts in the `package.json` as needed:

```json
"home-page": "https://ganymedelabs.github.io/react-vite-template/",
"name": "react-vite-template",
"author": "ganymedelabs",
"description": "This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is set up to enforce code quality and styling guidelines.",
"license": "MIT",
"version": "1.0.0",
"private": true,
"repository": {
    "type": "git",
    "url": "https://github.com/ganymedelabs/react-vite-template.git"
},
"keywords": [
    "PWA",
    "Progressive Web App",
    "Open Source",
    "MIT",
    "React",
    "Vite",
    "TypeScript",
    "GitHub Pages",
    "BrowserRouter",
    "Docker",
    "Tailwind CSS",
    "ESLint",
    "Prettier",
    "Template"
],
"bugs": {
    "url": "https://github.com/ganymedelabs/react-vite-template/issues"
}
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

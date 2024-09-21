# React Vite Template with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA Support

![React version](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite version](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS version](https://img.shields.io/badge/TailwindCSS-3.4.6-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript version](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)
![ESLint version](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white)
![Prettier version](https://img.shields.io/badge/Prettier-3.3.2-F7B93E?logo=prettier&logoColor=white)
![PWA Support](https://img.shields.io/badge/PWA-Support-4FC08D?logo=pwa&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Available-2496ED?logo=docker&logoColor=white)
![GitHub Pages](https://img.shields.io/github/deployments/discontinuedlabs/react-vite-template/github-pages?label=GitHub%20Pages&color=brightgreen&logo=github&logoColor=white)
![BrowserRouter](https://img.shields.io/badge/Router-BrowserRouter-CA4245?logo=reactrouter&logoColor=white)

This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is compatible with BrowserRouter, allowing seamless URL routing.

## Table of Contents

-   [Getting Started](#getting-started)
-   [TypeScript Configuration](#typescript-configuration)
-   [TailwindCSS Configuration](#tailwindcss-configuration)
-   [ESLint Configuration](#eslint-configuration)
-   [Prettier Configuration](#prettier-configuration)
-   [Docker Configuration](#docker-configuration)
-   [PWA Configuration](#pwa-configuration)
-   [Deployment](#deployment)
-   [Repository Configuration](#repository-configuration)
-   [Known Issues](#known-issues)
-   [License](#license)

## Getting Started

### Prerequisites

-   Node.js (>= 12.x)
-   npm or yarn
-   Docker (optional, for containerization)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-vite-template.git
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
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:3000`.

## TypeScript Configuration

This project uses TypeScript for static type-checking and ensuring type safety. You can find the configuration in the `tsconfig.json` file.

## TailwindCSS Configuration

TailwindCSS is used for utility-first styling. It is configured with Just-in-Time (JIT) mode for optimized builds. You can find the configuration in the `tailwind.config.js` file.

## ESLint Configuration

This project uses the following ESLint configurations:

-   `eslint:recommended`
-   `plugin:react/recommended`
-   `plugin:@typescript-eslint/recommended`
-   `airbnb`
-   `plugin:import/errors`
-   `plugin:jsx-a11y/recommended`
-   `plugin:prettier/recommended`

You can find the ESLint configuration in the `.eslintrc` file.

## Prettier Configuration

Prettier is used for code formatting. You can find the configuration in the `.prettierrc` file.

## Docker Configuration

This project includes a `Dockerfile` for containerizing the application. The Dockerfile uses `node:18-alpine` as the base image. To build and run the Docker container, use the following commands:

```bash
docker build -t react-vite-template .
docker run -p 3000:3000 react-vite-template
```

## PWA Configuration

This project is configured as a Progressive Web App using Workbox. The service worker is generated during the build process.

## Deployment

This project is configured to be deployed to GitHub Pages. To deploy, run:

```bash
npm run deploy
# or
yarn deploy
```

Unlike many GitHub Pages setups that require the use of `HashRouter` due to URL routing limitations, this template is compatible with `BrowserRouter` thanks to the configuration provided by [rafgraph's Single Page Apps for GitHub Pages](https://github.com/rafgraph/spa-github-pages). It uses a custom `404.html` file and a redirect script to handle URL routing correctly and avoid 404 errors on page reloads. Be sure to update the `homepage` field in `package.json` to match your repository URL.

## Repository Configuration

To make this template work for your repository, you need to update a few configuration files:

1. **vite.config.js**

    - Change the `base` value to the name of your repository.

    ```json
    "base": "/your-repo-name/"
    ```

2. **src/index.tsx**

    - Change the `basename` value of `<Router basename="/react-vite-template">` to the name of your repository.

    ```jsx
    <Router basename="/your-repo-name">
    ```

3. **.env.production and .env.development**

    - Update the `.env` files to reflect your repository's URL. Ensure that `VITE_PUBLIC_URL` matches your local development server URL in `.env.development` and your GitHub Pages URL in `.env.production`.

    **.env.development**

    ```env
    VITE_PUBLIC_URL=http://localhost:3000/your-repo-name/
    ```

    **.env.production**

    ```env
    VITE_PUBLIC_URL=https://your-username.github.io/your-repo-name/
    ```

4. **index.html**

    - Change the `href` value of `<link rel="canonical" href="https://discontinuedlabs.github.io/react-vite-template/" />` to the URL of your GitHub Pages.

    ```html
    <link rel="canonical" href="https://your-username.github.io/your-repo-name/" />
    ```

    - Replace all instances of `"react-vite-template"` in `href` values to your repository name. If your GitHub Pages URL is `https://your-username.github.io/`, leave the `"react-vite-template"` string as `"/"`.

    ```html
    <link rel="apple-touch-icon" sizes="180x180" href="/your-repo-name/images/favicons/apple-touch-icon.png" />
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
"home-page": "https://discontinuedlabs.github.io/react-vite-template/",
"name": "react-vite-template",
"author": "discontinuedlabs",
"description": "This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is set up to enforce code quality and styling guidelines.",
"license": "MIT",
"version": "1.0.0",
"private": true,
"repository": {
    "type": "git",
    "url": "https://github.com/discontinuedlabs/react-vite-template.git"
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
    "url": "https://github.com/discontinuedlabs/react-vite-template/issues"
}
```

## Known Issues

### Caching Issue with `index.css` in GitHub Pages Deployment

There is a known issue with the caching of the `index.css` file when deploying the application to GitHub Pages. The problem arises because the `index.css` filename is constant and does not include a hash (e.g., `index-BKlr6yp3.css`), which prevents the browser from updating the file when new changes are deployed. As a result, users may see outdated styles unless they manually clear their browser cache.

-   **Why this happens**: By default, Vite adds a hash to static assets like `index.css` and `index.js` during each build. However, to avoid a `404` error in the app when deployed to GitHub Pages (due to service worker cache expecting the old file names), the names were set to be constant. The issue mainly affects `index.css` because it doesn't get updated in the browser without clearing the cache, although `index.js` behaves as expected.

-   **Temporary Solution**: Users will need to clear their browser cache manually to see the latest updates to the styles after a new deployment.

-   **Possible Future Solution**: This issue could potentially be resolved by reconfiguring the service worker to handle hashed filenames more effectively.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# React Vite Template with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA Support

![React version](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite version](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS version](https://img.shields.io/badge/TailwindCSS-3.4.6-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript version](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)
![ESLint version](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white)
![Prettier version](https://img.shields.io/badge/Prettier-3.3.2-F7B93E?logo=prettier&logoColor=white)
![PWA Support](https://img.shields.io/badge/PWA-Support-4FC08D?logo=workbox&logoColor=white)
![GitHub Pages](https://img.shields.io/github/deployments/discontinuedlabs/react-vite-template/github-pages?label=GitHub%20Pages&color=brightgreen&logo=github&logoColor=white)

This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is set up to enforce code quality and styling guidelines.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Available Scripts](#available-scripts)
-   [ESLint Configuration](#eslint-configuration)
-   [Prettier Configuration](#prettier-configuration)
-   [Docker Configuration](#docker-configuration)
-   [PWA Configuration](#pwa-configuration)
-   [Deployment](#deployment)
-   [Repository Configuration](#repository-configuration)
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

## Available Scripts

In the project directory, you can run:

1. `npm run start` or `yarn start`

    - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. `npm run build` or `yarn build`

    - Builds the app for production to the `dist` folder.

3. `npm run serve` or `yarn serve`

    - Serves the built app in the `dist` folder.

4. `npm run lint` or `yarn lint`

    - Lints the project using ESLint.

5. `npm run lint:fix` or `yarn lint:fix`

    - Lints the project and automatically fixes problems using ESLint.

6. `npm run test` or `yarn test`

    - Runs the tests using Jest.

7. `npm run coverage` or `yarn coverage`

    - Runs the tests and generates a coverage report.

8. `npm run deploy` or `yarn deploy`

    - Deploys the app to GitHub Pages.

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

## Repository Configuration

To make this template work for your repository, you need to update a few configuration files:

1. **vite.config.js**

    - Change the `base` value to the name of your repository.

    ```json
    "base": "/your-repo-name/"
    ```

2. **index.html**

    - Change the `href` value of `<link rel="canonical" href="https://discontinuedlabs.github.io/react-vite-template/" />` to the URL of your GitHub Pages.

    ```html
    <link rel="canonical" href="https://your-username.github.io/your-repo-name/" />
    ```

    - Replace all instances of `"react-vite-template"` in `href` values to your repository name. If your GitHub Pages URL is `https://your-username.github.io/`, leave the `"react-vite-template"` string as `"/"`.

    ```html
    <link rel="apple-touch-icon" sizes="180x180" href="/your-repo-name/images/favicons/apple-touch-icon.png" />
    ```

3. **public/manifest.json**

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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

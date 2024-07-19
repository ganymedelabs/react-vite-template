# React Vite Template with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA Support

This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is set up to enforce code quality and styling guidelines.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Available Scripts](#available-scripts)
-   [ESLint Configuration](#eslint-configuration)
-   [Prettier Configuration](#prettier-configuration)
-   [Docker Configuration](#docker-configuration)
-   [PWA Configuration](#pwa-configuration)
-   [Deployment](#deployment)
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

### `npm run start` or `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.

### `npm run serve` or `yarn serve`

Serves the built app in the `dist` folder.

### `npm run lint` or `yarn lint`

Lints the project using ESLint.

### `npm run lint:fix` or `yarn lint:fix`

Lints the project and automatically fixes problems using ESLint.

### `npm run test` or `yarn test`

Runs the tests using Jest.

### `npm run coverage` or `yarn coverage`

Runs the tests and generates a coverage report.

### `npm run deploy` or `yarn deploy`

Deploys the app to GitHub Pages.

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

Make sure to update the `homepage` field in `package.json` to match your repository URL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

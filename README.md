# SachhSoft Landing Page

This project is a landing page for SachhSoft, built using React, TypeScript, and Vite. It provides a modern, responsive interface showcasing the company's services and information.

## Table of Contents

- [SachhSoft Landing Page](#sachhsoft-landing-page)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
    - [Desktop Version](#desktop-version)
    - [Mobile Version](#mobile-version)
  - [Live Link](#live-link)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Expanding ESLint Configuration](#expanding-eslint-configuration)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- React-based UI components
- TypeScript for type safety
- Vite for fast development and building
- Styled-components for CSS-in-JS styling
- Lucide-react for icons
- ESLint for code linting
- Responsive design

## Requirements

- Node.js (version 14 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sachhsoft-landing-page.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sachhsoft-landing-page

   npm install

   yarn install

   ```

## Usage

1. To start the development server:

```bash
npm run dev
```

## Screenshots

### Desktop Version

<img src="./src/assets/desktop-screenshoot.png" alt="Desktop Version" width="800">

### Mobile Version

<img src="./src/assets/mobile-screenshoot.png" alt="Mobile Version" width="375">

## Live Link

[Live Link]()

## Project Structure

```bash
sachhsoft-landing-page/
├── src/
│ ├── assets/
│ ├── components/
│ ├── App.tsx
│ ├── custom.d.ts
│ ├── index.css
│ └── main.tsx
├── public/
├── figma-imgs/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` or `yarn dev`: Runs the development server
- `npm run build` or `yarn build`: Builds the project for production
- `npm run lint` or `yarn lint`: Lints the codebase
- `npm run preview` or `yarn preview`: Previews the built project

## Expanding ESLint Configuration

For production applications, it's recommended to enable type-aware lint rules. To do this:

1. Configure the top-level `parserOptions` property in your ESLint config:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally add `...tseslint.configs.stylisticTypeChecked`.

4. Install and configure eslint-plugin-react:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

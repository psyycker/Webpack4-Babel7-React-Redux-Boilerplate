React boilerplate with ES2015, Express.js, and Webpack

[![CircleCI](https://circleci.com/gh/psyycker/Webpack4-Babel7-React-Redux-Boilerplate.svg?style=svg)](https://circleci.com/gh/psyycker/Webpack4-Babel7-React-Redux-Boilerplate)

## Technologies

- React (v16) + Redux (v4) + React Router (v4)
- Babel 7
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES7

## Features
- preconfigured router
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Installation
```bash
git clone https://github.com/psyycker/Webpack4-Babel7-React-Redux-Boilerplate.git
cd Webpack4-Babel7-React-Redux-Boilerplate
npm install

# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
Free use and change.

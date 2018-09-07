React boilerplate with ES2015, Express.js, and Webpack


## Technologies

- React (v16) + Redux (v4) + React Router (v4)
- Babel 7
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015+

## Features
- preconfigured router
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Installation
```bash
git clone git@github.com:antonfisher/react-express-webpack.git
cd react-express-webpack
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

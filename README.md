# Setup

```bash
git clone https://github.com/Elijah-I/webpack-2022.git .
npm i --force
```

# Usage

```js
npm run start   // start live server
npm run build   // create production version
npm run dev     // create development version
npm run deploy  // deploy project into gh-pages root
```

# P.S.

If you need to deploy in separate folder inside gh-pages, use:

```js
"deploy": "npm run build && npx gh-pages -d build -e YOUR_PROJECT_FOLDER"
```

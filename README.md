# About

1. ESlint arbnb support
2. Auto implevemt ESlint possible fixes on save
3. Auto deploy feature
4. Modern favicon pack generation included (see FAQ)
5. Full React, Redux, TS support (also can be used for simple JS too, see FAQ below)

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

# FAQ

## 1. If you need to deploy in separate folder inside gh-pages:

1. go to **`package.json`**
2. find **`"scripts": {...}`**
3. replace **`"deploy": ...`** with:

```js
"deploy": "npm run build && npx gh-pages -d build -e YOUR_PROJECT_FOLDER"
```

## 2. If you _DON'T_ need to handle SCSS separately (as second entry point):

1. go to **`webpack/index.js`**
2. find **`entry: {...}`**
3. replace **`app: ...`** with:

```js
app: "./index.tsx";
```

## 3. If you want to use TS/JS insterad React:

1. go to **`src/`** and rename **`index.tsx`** to **`index.ts`** / **`index.js`**
   <br/><br/>
2. go to **`tsconfig.json`**
3. find **`"files": [...]`**
4. replace **`index.tsx`** with **`index.ts`** / **`index.js`**
   <br/><br/>
5. go to **`webpack/index.js`**
6. find **`entry: {...}`**
7. replace **`index.tsx`** with **`index.ts`** / **`index.js`**

## 4. If you want your CSS class names to STOP being hashes:

1. go to **`webpack/rules/scss.js`**
2. find **`use: [...]`**
3. replace **`"css-loader"`** with:

```js
{
  loader: "css-loader",
  options: {
    modules: false
  }
}
```

## 5. For more speed favicon generator switched to "light" mode. It works really slow generating pack of favicons. But if you want to turn this opton on:

1. go to **`webpack/plugins/favicon.js`**
2. find **`mode: ...`**
3. replace **`mode: "light"`** with: **`mode: "webapp"`**

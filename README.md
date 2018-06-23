# js-plugin-starter
VanillaJS plugin starter with Webpack

# Clone this repo
```
npx gclone thatisuday/js-plugin-starter [dir]
```
Use `npx` to use `gclone` on run-time or `npm install -g gclone`. This will copy this repository with `.git` directory. Remove `.git` directory because you might initialize your own git repository.

> Webpack 4 support is added to `webpack-4` branch. You can clone it using `git clone -b webpack-4 https://github.com/thatisuday/js-plugin-starter [dir]`

# Instructions
- `npm install` to install dependencies
- `npm i -D babel-plugin-react` and `npm i -S react react-dom` to use React.js (also add entry `react` to `.babelrc` presets)
- Execute command `npm run start` for running development server and preview
- Execute command `npm run build` for creating distribution files
- Tweak configuration inside `config` folder if necessary

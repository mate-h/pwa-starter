module.exports = {
  extends: '@snowpack/app-scripts-preact',
  mount: {
    src: '/'
  },
  // scripts: {
  //"build:css": "postcss src/style/tailwind.css -o src/style/index.css"
  // }
  // plugins: [
  //   ["@snowpack/plugin-build-script", {"cmd": "postcss", "input": [".css"], "output": [".css"]}]
  // ]
}

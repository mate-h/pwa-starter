module.exports = {
  extends: '@snowpack/app-scripts-preact',
  mount: {
    src: '/',
  },
  plugins: [
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
    [
      '@snowpack/plugin-build-script',
      {
        cmd: 'workbox injectManifest',
        input: ['src/sw.js'],
        output: ['src/sw-esm.js'],
      },
    ],
  ],
};

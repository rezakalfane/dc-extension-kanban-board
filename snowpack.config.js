module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'svelte-check --output human',
        watch: '$1 --watch',
        output: 'stream',
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
    sourceMap: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: './',
    sourceMaps: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

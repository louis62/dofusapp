const sveltePreprocess = require("svelte-preprocess");

export const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require("autoprefixer")]
  },
  scss: {
    includePaths: ['./src/theme', './node_modules'],
  },
});
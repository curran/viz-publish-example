export default {
  input: 'index.js',
  external: ['d3', 'topojson'],
  output: {
    file: 'bundle.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      d3: 'd3',
      topojson: 'topojson'
    }
  }
};

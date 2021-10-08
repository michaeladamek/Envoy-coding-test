module.exports = function(eleventyConfig) {
  let Nunjucks = require('nunjucks');
  eleventyConfig.setLibrary('njk', Nunjucks);

  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
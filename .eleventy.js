module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy('**/*.css');
    eleventyConfig.addPassthroughCopy('favicon.ico');
  };
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // 🔧 Add a shortcode for image grids
  eleventyConfig.addShortcode("imageGrid", function(folderPath) {
    const fullPath = path.join("src", folderPath);
    if (!fs.existsSync(fullPath)) return "<p>No images found.</p>";

    const files = fs.readdirSync(fullPath).filter(file =>
      /\.(jpe?g|png|webp)$/i.test(file)
    );

    return `
      <div class="image-grid">
        ${files
          .map(file => {
            const url = `/${folderPath}/${file}`;
            return `<img src="${url}" alt="${file}" loading="lazy" />`;
          })
          .join("\n")}
      </div>
    `;
  });

  // 📁 Copy image folders to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/projects");

  // 🗂️ Project collection for homepage list
  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByTag("project");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
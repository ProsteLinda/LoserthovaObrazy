const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\about.js"))),
  "component---src-pages-agency-1-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\agency-1.js"))),
  "component---src-pages-agency-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\agency-2.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\contact.js"))),
  "component---src-pages-designer-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\designer-2.js"))),
  "component---src-pages-devloper-1-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\devloper-1.js"))),
  "component---src-pages-devloper-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\devloper-2.js"))),
  "component---src-pages-grid-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\grid-2.js"))),
  "component---src-pages-grid-3-fluid-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\grid-3-fluid.js"))),
  "component---src-pages-grid-3-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\grid-3.js"))),
  "component---src-pages-grid-4-fluid-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\grid-4-fluid.js"))),
  "component---src-pages-grid-4-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\grid-4.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\index.js"))),
  "component---src-pages-masonry-2-column-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\masonry-2-column.js"))),
  "component---src-pages-masonry-3-column-fluid-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\masonry-3-column-fluid.js"))),
  "component---src-pages-masonry-3-column-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\masonry-3-column.js"))),
  "component---src-pages-masonry-4-column-fluid-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\masonry-4-column-fluid.js"))),
  "component---src-pages-masonry-4-column-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\masonry-4-column.js"))),
  "component---src-pages-photography-1-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\photography-1.js"))),
  "component---src-pages-photography-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\photography-2.js"))),
  "component---src-pages-portfolio-details-2-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\portfolio-details-2.js"))),
  "component---src-pages-portfolio-details-js": hot(preferDefault(require("D:\\repos\\TetaPavla\\src\\pages\\portfolio-details.js")))
}


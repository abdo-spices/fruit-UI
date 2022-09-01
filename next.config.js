/** @type {import('next').NextConfig} */

const theme = require("shiki/themes/dark-plus.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
  remarkPlugins: [
    [
      remarkCodeHike,
      {
        lineNumbers: true,
        showCopyButton: true,
        autoImport: true,
        theme: theme,
      },
    ],
  ],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
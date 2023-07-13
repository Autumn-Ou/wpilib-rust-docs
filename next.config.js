const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = require("nextra")({
  latex: true,
});

module.exports = withNextra();

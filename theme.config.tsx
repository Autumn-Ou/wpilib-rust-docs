import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>WPILib Rust</span>,
  project: {
    link: "https://github.com/oh-yes-0-fps/wpilib-rust",
  },
  chat: {
    link: "https://discord.gg/ADegEnxDhk",
  },
  docsRepositoryBase: "https://github.com/Autumn-Ou/wpilib-rust-docs",
  footer: {
    text: "WPILib Rust Docs © 2023, built with Next.js & Nextra.",
  },
};

export default config;

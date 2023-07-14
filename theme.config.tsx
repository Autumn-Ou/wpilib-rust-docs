import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>WPILib Rust</span>,
  project: {
    link: "https://github.com/oh-yes-0-fps/wpilib-rust",
  },
  chat: {
    link: "https://discord.gg/ADegEnxDhk",
  },
  docsRepositoryBase: "https://github.com/Autumn-Ou/wpilib-rust-docs/tree/main",
  footer: {
    text: "WPILib Rust Docs © 2023",
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://wpilib-rust-docs.vercel.app//api/og?WPILib_Rust=${WPILib_Rust}"
        : `https://wpilib-rust-docs.vercel.app//api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="WPILib Rust Docs: Documentation for WPILib Rust."
        />
        <meta name="og:description" content="WPILib Rust Docs." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="WPILib Rust" />
        <meta name="twitter:url" content="https://wpilib-rust-docs.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + " – WPIlib Rust" : "WPIlib Rust"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="WPILib Rust" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – WPIlib Rust",
      };
    }
  },
};

export default config;

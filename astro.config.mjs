import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://cheahannah.com",
  // Every page address ends in "/", matching how Netlify serves them.
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({ lastmod: new Date() }),
    tailwind(),
    icon(),
  ],
});

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    baseUrl: "http://localhost:4173",
  },
  component: {
    specPattern: "src/**/__tests__/*.spec.{js,ts,jsx,tsx}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setup.ts",
  },
});

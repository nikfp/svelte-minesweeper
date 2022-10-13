/// <reference types="vitest/config">
import { defineConfig, mergeConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
import {defineConfig as testConfig } from 'vitest/config'

// https://vitejs.dev/config/
const baseConfig = defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});

export default mergeConfig(baseConfig, testConfig({
  test: {
    globals: true, 
    environment: "jsdom"
  }
}))

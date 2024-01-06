import { defineConfig } from "vite";

const BASE_URL = process.env.ASSET_URL || "";

export default defineConfig({
    build: {
        target: "es2015",
    },
    base: BASE_URL,
    server: {
        host: true,
        open: true,
    },
});

import { defineConfig } from 'vite';

const BASE_URL = process.env.ASSET_URL || '';

export default defineConfig({
    base: BASE_URL
});

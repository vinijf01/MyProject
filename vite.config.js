import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [createVuePlugin(), tailwindcss()],
});

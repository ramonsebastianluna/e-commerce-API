import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; //importamos react

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx', //modificamos el input para que lea el app.jsx
            refresh: true,
        }),
        react(), //llamamos la función
    ],
});
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./src/pages/**/index.jsx');
        const importPage = pages[`./src/pages/${name}/index.jsx`];
        if (!importPage) {
            throw new Error(`Page not found: ${name}`);
        }
        const module = await importPage();
        return module.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
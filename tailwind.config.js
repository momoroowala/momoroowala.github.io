/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Calibre', 'Inter', 'sans-serif'],
                mono: ['SF Mono', 'Fira Code', 'monospace'],
            },
            colors: {
                navy: '#0a192f',
                'light-navy': '#112240',
                'lightest-navy': '#233554',
                slate: '#8892b0',
                'light-slate': '#a8b2d1',
                'lightest-slate': '#ccd6f6',
                white: '#e6f1ff',
                blue: '#3b82f6',
                'blue-tint': 'rgba(59, 130, 246, 0.1)',
            }
        },
    },
    plugins: [],
}

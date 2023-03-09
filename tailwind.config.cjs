/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#f0932b',
            btnColor: '#b2bec3',
            secondary: '#000000',
            white: '#ffffff',
        },
        screens: {
            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [],
};

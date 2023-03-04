/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                prussianBlue: '#5766F3',
                navyBlue: '#057CF2',
                lightBlue: '#51A9FF',
                darkBlue: '#1E1E1E',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

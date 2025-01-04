/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./templates/**/*.html",
        "./templates/*.html",
        "./styles/*.css"
    ],
    theme: {
        fontFamily: {
            'sans': ['Satoshi-Regular'], 
            'mono': ['SpaceMono'],
        },
        extend: {
            keyframes: {
                'border-spin': {
                    '100%': {
                        transform: 'rotate(-360deg)',
                    },
                },
            },
            animation: {
                'border-spin': 'border-spin 7s linear infinite',
            },
        },
    },
    plugins: [],
}


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
                'line-lr': {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '100%',
                    },
                }
            },
            animation: {
                'border-spin': 'border-spin 7s linear infinite',
                'line-lr': 'line-lr 2s ease-out infinite',
            },
        },
    },
    plugins: [],
}


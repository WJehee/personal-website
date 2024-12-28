/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html",
        "./templates/*.html",
        "./styles/*.css"
    ],
    theme: {
        color: {

        },
        fontFamily: {
            'sans': ['Satoshi-Regular'], 
            'mono': ['SpaceMono'],
        },
        extend: {},
    },
    plugins: [],
}


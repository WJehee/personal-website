
_default:
    just --list

serve:
    zola serve

tailwind:
    tailwindcss -i styles/styles.css -o static/css/styles.css --watch

build:
    tailwindcss -i styles/styles.css -o static/css/styles.css --minify
    zola build

